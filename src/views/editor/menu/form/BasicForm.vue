<template>
  <div class="basic-form pr">
    <base-form :editable="false" @submit="submitForm">
      <template #head-name>
        基本信息
      </template>
      <template #form-content>
        <!-- 静态表单 -->
        <el-form :model="basicForm.static" ref="basicForm">
          <el-form-item
            prop="name"
            label="姓名"
            :rules="{ required: true, message: '请输入邮箱地址', trigger: 'blur' },"
          >
            <el-input v-model="basicForm.static.name.value"></el-input>
          </el-form-item>
          <div class="form-wrap">
            <el-form-item class="item" prop="phone" label="电话">
              <el-input v-model="basicForm.static.telephone.value"></el-input>
            </el-form-item>
            <el-form-item
              class="item"
              prop="email"
              :label="basicForm.static.email.desc"
            >
              <el-input v-model="basicForm.static.email.value"></el-input>
            </el-form-item>
          </div>
          <el-form-item prop="city" :label="basicForm.static.city.desc">
            <el-input v-model="basicForm.static.city.value"></el-input>
          </el-form-item>

          <!-- 动态表单 -->
          <div class="form-wrap">
            <el-form-item
              v-for="(attr, name) in basicForm.dynamic"
              :label="attr.desc"
              :key="attr.desc"
              :prop="name"
              class="item"
            >
              <el-input
                v-model="attr.value"
                :placeholder="attr.placeholder"
              ></el-input>
            </el-form-item>
          </div>
        </el-form>
        <!-- 动态属性标签 -->
        <div
          class="tag-group"
          v-for="(group, i) in tagGroups.arr"
          :key="group.gname"
        >
          <div class="gname" v-if="Object.keys(group.tags).length">
            {{ group.gname }}
          </div>
          <div class="tags">
            <div
              class="tag"
              v-for="(tag, name) in group.tags"
              :key="tag.desc"
              @click="addAttr(name, i)"
            >
              <b>+</b>
              <span>{{ tag.desc }}</span>
            </div>
          </div>
        </div>
      </template>
    </base-form>
  </div>
</template>

<script>
import BaseForm from './BaseForm'

import {
  mapState as mapUserState,
  mapGetters as mapUserGetters,
  mapActions as mapUserActions,
  mapMutations as mapUserMutations,
} from '@/store/helper/user'

import {
  mapState as mapResumeState,
  mapGetters as mapResumeGetters,
  mapMutations as mapResumeMutations,
  mapActions as mapResumeActions,
} from '@/store/helper/resume'

import { createBasic, updateBasic } from '@/api'

export default {
  components: { BaseForm },
  data() {
    return {
      basicPlaceholder: {
        user: {
          name: { desc: '姓名', value: '' },
          avatar: { desc: '', src: '' },
        },
        contact: {
          telephone: { desc: '电话', value: '' },
          email: { desc: '邮箱', value: '' },
          city: { desc: '现居城市', value: '' },
        },
        social: {
          website: {
            desc: '个人网站',
            value: null,
            placeholder: '如：github.com/wondercv.com',
          },
          linkin: {
            desc: 'LinkedIn',
            value: null,
            placeholder: '如：github.com/wondercv.com',
          },
          wechat: {
            desc: 'wexin',
            value: null,
            placeholder: '如：github.com/wondercv.com',
          },
        },
        other: {
          age: {
            desc: '年龄或生日',
            value: null,
            placeholder: '如：github.com/wondercv.com',
          },
          sex: {
            desc: '性别',
            value: null,
            placeholder: '如：github.com/wondercv.com',
          },
        },
        intension: {
          workIntension: {
            desc: '求职意向',
            value: '前端开发',
            placeholder: '如：github.com/wondercv.com',
          },
          currentJob: {
            desc: '当前工作状态',
            value: null,
            placeholder: '如：github.com/wondercv.com',
          },
          expectSalary: {
            desc: '期望薪资',
            value: null,
            placeholder: '如：github.com/wondercv.com',
          },
        },
      },
    }
  },
  methods: {
    submitForm() {
      this.$refs['basicForm'].validate(async valid => {
        if (valid) {
          const form = Object.assign({}, this.info.basic)
          let res
          if (this.info.basic.user.name.value) {
            const uid = window.localStorage.getItem('uid')
            res = await updateBasic(uid, form)
          } else {
            res = await createBasic(form)
          }
          console.log(res)
        } else {
          alert('fmt error!')
          return false
        }
      })
    },

    addAttr(tag, i) {
      if (i === 0) {
        this.info.basic.social[tag].value = ''
      } else if (i === 1) {
        if (tag in this.info.basic.other) this.info.basic.other[tag].value = ''
        else this.info.basic.intension[tag].value = ''
      }
    },
  },
  computed: {
    ...mapUserState(['info']),
    ...mapUserGetters(['socialTags', 'otherTags']),
    ...mapResumeState(['formIdx', 'isNewForm']),
    staticValidateForm() {
      const form = {}
      Object.assign(form, this.info.basic.contact, this.info.basic.user)
      return form
    },
    dynamicValidateForm() {
      const tags = {}
      Object.assign(tags, this.socialTags.tags, this.otherTags.tags)
      return tags
    },
    basicForm() {
      return {
        static: this.staticValidateForm,
        dynamic: this.dynamicValidateForm,
      }
    },
    tagGroups() {
      return {
        arr: [
          {
            gname: '社交信息',
            tags: this.newForm
              ? this.basicPlaceholder.social
              : this.socialTags.emptyTags,
          },
          {
            gname: '其他信息',
            tags: this.newForm
              ? Object.assign(
                  {},
                  this.basicPlaceholder.other,
                  this.basicPlaceholder.intension,
                )
              : this.otherTags.emptyTags,
          },
        ],
      }
    },
  },
}
</script>

<style lang="less" scoped>
// .form-wrap {
//   margin-top: 24px;
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   .item {
//     width: 50%;
//     box-sizing: border-box;
//   }
//   .item:nth-child(2n-1) {
//     padding-right: 3%;
//   }
//   .item:nth-child(2n) {
//     padding-left: 3%;
//   }
// }

.tag-group {
  .gname {
    margin-top: 28px;
    height: auto;
    font-size: 14px;
    color: #404040;
    margin-bottom: 16px;
  }
  .tags {
    // margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    .tag {
      height: 38px;
      line-height: 38px;
      padding: 0 24px;
      color: #606060;
      font-size: 14px;
      background: #f9f9f9;
      margin-right: 16px;
      margin-bottom: 16px;
      cursor: pointer;
      b {
        margin-right: 4px;
        font-size: 16px;
      }
    }
  }
}
</style>
