<template>
  <div class="loggin-wrapper pr">
    <div class="box pa">
      <div class="carousel">
        <a-carousel autoplay>
          <div v-for="item in carousels" :key="item">
            <img :src="item" alt="" />
          </div>
        </a-carousel>
      </div>

      <div class="content">
        <div class="head pr">
          <div class="togger pa" @click="switchLogin">
            <img :src="toggles[+!isWxLogin].img_src" alt="" />
            <img :src="toggles[+!isWxLogin].img_src_hovered" alt="" />
            <div class="login-type pa">
              <span>{{ switchTab[+!isWxLogin] }}</span>
            </div>
          </div>
          <div class="toggerOption txt-center">
            <div :class="['option', { active: isEmployee }]" @click="reloadQRCode(true)">
              我是求职者
            </div>
            <div :class="['option', { active: !isEmployee }]" @click="reloadQRCode(false)">
              我是招聘者
            </div>
          </div>
        </div>

        <div class="wx" v-if="isWxLogin">
          <div class="qcode pr">
            <LoadingOutlined class="loading-icon" v-if="isLoading" />
            <img
              v-else
              src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQHf7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAya3dWNVJYN3hmeTMxTWxEbzF2Y1kAAgTZJthfAwQ8AAAA"
              alt=""
              @click="oauth2"
            />
            <img
              v-if="!isQRCodeValid"
              class="reload pa"
              src="https://files.wondercv.com/auth/qrcode_reload.png"
              alt=""
              @click.stop="reloadQRCode"
            />
          </div>
          <div class="tips txt-center">
            <span
              ><i class="el-icon-basketball"></i> 扫码关注「超级{{
                switchTxt[+!isEmployee]
              }}」快速登录</span
            >
          </div>
          <div class="tips2 txt-center">新用户将为您免费注册账号</div>
        </div>

        <a-form v-if="!isWxLogin" class="formBox" :model="loginForm" :rules="loginRules">
          <div class="item fcenter">
            <!-- <div class="phone">+86</div> -->
            <div class="pr flex1">
              <a-form-item name="email">
                <a-input :value="loginForm.email" :placeholder="emailPlaceholder"></a-input>
              </a-form-item>
            </div>
          </div>
          <div class="item fcenter">
            <div class="pr flex1">
              <a-form-item name="valCode">
                <a-input :value="loginForm.valCode" placeholder="请输入验证码"></a-input>
              </a-form-item>
            </div>
            <div class="val-code txt-center">
              <button v-if="valCodeClickable" @click="getValCode"> 发送验证码 </button>
              <button v-else class="ticker" disabled> 请 {{ valCodeCountDown }} s后重试 </button>
            </div>
          </div>
          <div class="submit txt-center" @click="loginWithEmail"> 登录 </div>
        </a-form>
        <div v-if="!isWxLogin" class="clearfix moretxt">
          <div class="left">新用户将为您免费注册账号</div>
          <div class="right">登录遇到问题？</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { LoadingOutlined } from '@ant-design/icons-vue';

  import {
    loginForm,
    loginRules,
    loginData,
    toggles,
    carousels,
    reloadQRCode,
    switchLogin,
    getValCode,
    loginWithEmail,
    oauth2,
  } from './login';

  export default defineComponent({
    components: {
      //
      LoadingOutlined,
    },
    setup() {
      reloadQRCode();

      return {
        carousels,
        toggles,
        loginForm,
        loginRules,
        ...toRefs(loginData),
        switchLogin,
        getValCode,
        loginWithEmail,
        oauth2,
        reloadQRCode,
      };
    },
  });
</script>

<style lang="less" scoped>
  .loggin-wrapper {
    height: 100vh;
    background: #f5f5f7;
  }

  .box {
    width: 1120px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .carousel {
    float: left;
    width: 633px;
    height: 454px;

    img {
      display: block;
      width: 633px;
      height: 454px;
    }
  }

  .content {
    background: #fff;
    float: right;
    width: 427px;
    height: 454px;
    border-radius: 6px;
    box-shadow: 0 8px 24px 0 #e8e8e8;
  }

  .head {
    padding-top: 82px;

    .togger:hover {
      img:first-child {
        display: none;
      }

      img:nth-child(2) {
        display: block;
      }
    }

    .togger {
      width: 46px;
      height: 46px;
      left: 14px;
      top: 14px;
      cursor: pointer;

      img {
        width: 46px;
        height: 46px;
        display: block;
      }

      img:nth-child(2) {
        display: none;
      }

      .login-type {
        display: flex;
        justify-content: center;
        width: 128px;
        height: 44px;
        padding: 6px 12px 10px 19px;
        line-height: 30px;
        left: 48px;
        top: -4px;
        opacity: 1;
        transition: all 0.3s;
        background: url(data:image/png;base64,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)
          50%;
        background-size: cover;
        font-size: 14px;
        color: #9c9c9c;
      }
    }

    .option {
      line-height: 44px;
      font-size: 14px;
      border: 1px solid #cfcfcf;
      width: 154px;
      border-radius: 2px;
      display: inline-block;
      margin: 0 8px;
      cursor: pointer;
    }

    .active {
      border-color: #ff4f4c;
      color: #ff4f4c;
    }
  }

  .wx {
    margin-top: 38px;

    .qcode {
      width: 170px;
      height: 170px;
      margin: 0 auto;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      .loading-icon {
        font-size: 48px;
      }

      img {
        display: block;
        margin: -5px 0 0 -5px;
        width: 180px;
        height: 180px;
      }

      i {
        font-family: element-icons !important;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        vertical-align: baseline;
        position: absolute;
        font-size: 32px;
        color: #bcbcbc;
        top: calc(50% - 16px);
        left: calc(50% - 16px);
        animation: rotating 2s linear infinite;
      }

      .reload {
        left: 0;
        top: 10px;
        display: block;
        width: 170px;
        height: 170px;
        cursor: pointer;
      }
    }

    .tips {
      line-height: 30px;
      font-size: 14px;
      color: #404040;
      margin-top: 12px;

      i {
        color: #3fab40;
        font-size: 22px;
        top: 2px;
      }
    }

    .tips2 {
      line-height: 18px;
      margin-top: 28px;
      font-size: 14px;
      color: #606060;
    }
  }

  .formBox {
    padding-top: 35px;
    width: 328px;
    margin: 0 auto;

    .item {
      padding: 8px 0;
      border-bottom: 1px solid #ebebeb;
    }

    .phone {
      width: 44px;
      line-height: 16px;
      border-right: 1px solid #d8d8d8;
      margin-right: 15px;
      font-size: 14px;
      color: #404040;
    }

    .val-code {
      button {
        color: #50a4ff;
        font-size: 14px;
        background: none;
        border: none;
        cursor: pointer;
        outline: inherit;
      }

      .ticker {
        background: #cfcfcf;
        border-radius: 4px;
      }
    }

    .submit {
      width: 100%;
      height: 42px;
      line-height: 42px;
      margin-top: 26px;
      border-radius: 2px;
      cursor: pointer;
      font-size: 16px;
      color: #fff;
      background: #ff4f4c;
      border: 0;
      outline: inherit;
    }
  }

  .clearfix::after {
    content: '';
    height: 0;
    display: block;
    line-height: 0;
    visibility: hidden;
    clear: both;
    overflow: hidden;
  }

  .moretxt {
    width: 328px;
    margin: 22px auto 0;
    line-height: 20px;
    font-size: 14px;

    .left {
      float: left;
      color: #606060;
    }

    .right {
      float: right;
      color: #9c9c9c;
      cursor: pointer;
    }
  }

  .txt-center {
    text-align: center;
  }

  .a-form-item {
    margin: 0;

    :deep(.a-input__inner) {
      border: 0;
    }
  }

  .git-img {
    border: 1px solid red;
    border-radius: 50%;
  }

  .ant-form-item {
    margin: 0;

    .ant-input {
      border: 0;
    }
  }
</style>
