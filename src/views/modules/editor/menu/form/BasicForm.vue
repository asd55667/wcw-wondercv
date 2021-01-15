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
          <el-form-item prop="location" label="现居城市">
            <el-input v-model="staticValidateForm.location"></el-input>
          </el-form-item>
        </el-form>
        <!-- 动态表单 -->
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm">
          <div class="form-wrap">
            <el-form-item
              v-for="(attr, index) in dynamicValidateForm.attr"
              :label="attr.name"
              :key="attr.key"
              :prop="'attr.' + index + '.value'"
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
        <div class="tag-group" v-for="(group, i) in groups" :key="group.gname">
          <div class="gname" v-if="group.tags.length">
            {{ group.gname }}
          </div>
          <div class="tags">
            <div
              class="tag"
              v-for="(tag, j) in group.tags"
              :key="tag.name"
              @click="addAttr(tag, i, j)"
            >
              <b>+</b>
              <span>{{ tag.name }}</span>
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
export default {
  components: { BaseForm },
  data() {
    return {
      dynamicValidateForm: {
        attr: [
          {
            key: Date.now(),
            name: '个人网站',
            value: 'wuchengwei.icu',
            placeholder: '如：github.com/wondercv.com',
          },
        ],
      },
      staticValidateForm: {
        name: '吴承炜',
        phone: '18120587177',
        email: '344078971@qq.com',
        location: '上海',
      },
      groups: [
        {
          gname: '社交信息',
          tags: [
            { name: '微信', placeholder: '请填写' },
            { name: 'LinkedIn', placeholder: '请填写领英账号' },
          ],
        },
        {
          gname: '其他信息',
          tags: [
            { name: '年龄或生日', placeholder: '请填写' },
            { name: '性别', placeholder: '请填写' },
            { name: '身高', placeholder: '请填写' },
            { name: '体重', placeholder: '请填写' },
            { name: '民族', placeholder: '请填写' },
            { name: '籍贯', placeholder: '请填写' },
            { name: '政治面貌', placeholder: '请填写' },
            { name: '婚姻状况', placeholder: '请填写' },
            { name: '求职意向', placeholder: '请填写' },
            { name: '当前工作状态', placeholder: '请填写' },
            { name: '期望薪资', placeholder: '请填写' },
          ],
        },
      ],
    }
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
      tag.key = Date.now()
      this.dynamicValidateForm.attr.push(tag)
      this.groups[i].tags.splice(j, 1)
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
