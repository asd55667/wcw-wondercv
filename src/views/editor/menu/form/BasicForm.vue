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

import { createBasic, updateBasic } from '@/api'

export default {
  components: { BaseForm },
  data() {
    return {}
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
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.attr.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.attr.splice(index, 1)
      }
    },
    addAttr(tag, i) {
      // this.dynamicValidateForm.attr.push(tag)
      // this.groups[i].tags.splice(j, 1)
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
            tags: this.socialTags.emptyTags,
          },
          {
            gname: '其他信息',
            tags: this.otherTags.emptyTags,
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
