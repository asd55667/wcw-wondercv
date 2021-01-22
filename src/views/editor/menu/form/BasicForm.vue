<template>
  <div class="basic-form pr">
    <base-form :editable="false">
      <div slot="head-name">基本信息</div>
      <div slot="form-content">
        <!-- 静态表单 -->
        <el-form :model="staticValidateForm">
          <el-form-item prop="name" label="姓名">
            <el-input v-model="staticValidateForm.name"></el-input>
          </el-form-item>
          <div class="form-wrap">
            <el-form-item class="item" prop="phone" label="电话">
              <el-input v-model="staticValidateForm.phone"></el-input>
            </el-form-item>
            <el-form-item class="item" prop="email" label="邮箱">
              <el-input v-model="staticValidateForm.email"></el-input>
            </el-form-item>
          </div>
          <el-form-item prop="city" label="现居城市">
            <el-input v-model="staticValidateForm.city"></el-input>
          </el-form-item>
        </el-form>
        <!-- 动态表单 -->
        <el-form :model="dynamicValidateForm" ref="dynamicValidateFormRef">
          <div class="form-wrap">
            <el-form-item
              v-for="attr in Object.keys(dynamicValidateForm)"
              :label="dynamicValidateForm[attr].desc"
              :key="dynamicValidateForm[attr].desc"
              :prop="attr"
              class="item"
            >
              <el-input
                v-model="dynamicValidateForm[attr].value"
                :placeholder="dynamicValidateForm[attr].placeholder"
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
              v-for="(tag, j) in Object.keys(group.tags)"
              :key="group.tags[tag].desc"
              @click="addAttr(tag, i, j)"
            >
              <b>+</b>
              <span>{{ group.tags[tag].desc }}</span>
            </div>
          </div>
        </div>
        <!-- <div v-for="i in 100" :key="i"><div>100</div></div> -->
      </div>
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

export default {
  components: { BaseForm },
  data() {
    return {}
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
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
    addAttr(tag, i, j) {
      // this.dynamicValidateForm.attr.push(tag)
      // this.groups[i].tags.splice(j, 1)
      if (i === 0) {
        // console.log(this.info.basic.social, tag)
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
      return {
        name: this.info.basic.name,
        phone: this.info.basic.contact.telephone.value,
        email: this.info.basic.contact.email.value,
        city: this.info.basic.contact.city.value,
      }
    },
    dynamicValidateForm() {
      const tags = {}
      Object.assign(tags, this.socialTags.tags)
      Object.assign(tags, this.otherTags.tags)
      return tags
      return {
        website: {
          desc: '个人网站',
          value: '123',
          placeholder: '如：github.com/wondercv.com',
        },
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
  created() {
    // console.log(this.otherTags)
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
