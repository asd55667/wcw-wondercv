<template>
  <div class="share">
    <div class="wx">
      <div class="left">
        <p class="to">发送至微信</p>
        <p class="title">
          批注功能已上线，赶快让好友帮忙改简历吧～
        </p>
        <div class="copy">
          <input
            type="text"
            readonly="readonly"
            class="copy-link"
            placeholder="https:resume.wuchengwei.icu/cvs/TsR72SQg/share"
          />
          <input type="text" class="url" />
          <div class="btn">复制</div>
        </div>
      </div>
      <div class="right">
        <img src="" alt="" />
      </div>
    </div>
    <div class="email">
      <div class="left">
        <p class="to">
          发送至邮箱
        </p>
        <p class="title">
          输入邮箱地址，简历将以PDF格式发送至您的邮箱
        </p>
        <el-form :model="emailForm" ref="emailFormRef">
          <el-form-item
            prop="email"
            label=""
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              {
                type: 'email',
                message: '请输入正确的邮箱地址',
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input v-model="emailForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="filename" label="文件名">
            <el-input
              v-model="emailForm.filename"
              placeholder="请输入邮箱地址"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="right" @click="submitForm('emailFormRef')">
        <img
          src="https://static.wondercv.com/cv_pc_vue/img/around-right.5ece8505.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { cloneNode } from '@/utils'

export default {
  data() {
    return { emailForm: { email: '344078971@qq.com', filename: '简历' } }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit('sendToEmail', this.emailForm)
        } else {
          console.log('wrong eamil')
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.share {
  background: #fff;
  padding: 32px 28px;
  box-sizing: border-box;
  text-align: left;
  box-shadow: 0 2px 12px 0 hsla(0, 0%, 50.2%, 0.16);
  border-radius: 4px;
  .wx {
    cursor: default;
    overflow: hidden;
    .left {
      width: 305px;
      float: left;
      .copy {
        position: relative;
        width: 292px;
        height: 36px;
        border-radius: 19px;
        border: 1px solid #dfdfdf;
        line-height: 36px;
        text-align: left;
        input {
          border: 0;
          outline: none;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 180px;
          margin-left: 20px;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: #606060;
          line-height: 20px;
        }
        .url {
          opacity: 0;
          position: absolute;
          top: -1500px;
        }
        .btn {
          position: absolute;
          top: 0;
          right: 0;
          display: inline-block;
          cursor: pointer;
          height: 36px;
          width: 77px;
          border-left: 1px solid #dfdfdf;
          color: #4183ff;
          line-height: 36px;
          text-align: center;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
    .right {
      float: left;
      height: 96px;
      width: 96px;
      img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }
  .email {
    cursor: pointer;
    margin-top: 57px;
    .right {
      position: absolute;
      left: 410px;
      top: 200px;
      img {
        display: block;
        width: 20px;
        height: 25px;
      }
    }
  }
}
.to {
  height: 18px;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #404040;
  line-height: 18px;
}
.title {
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #606060;
  line-height: 14px;
  margin-top: 11px;
  margin-bottom: 15px;
}
</style>
