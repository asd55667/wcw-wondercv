<template>
  <a-layout-header class="nav-container pr">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="middle">
      <slot name="middle">middle</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
      <div class="auth">
        <a-popover
          placement="bottom"
          :overlayStyle="{
            width: '238px',
            height: '256px',
          }"
        >
          <div class="app">
            <i class="iconfont icon-shouji" style="margin-right: 6px"> &#xe615; </i>
            APP
          </div>
          <template #content>
            <div class="qrcode">
              <div class="title">扫码下载App 同步编辑</div>
              <img :src="'https://files.wondercv.com/appDownloadIcon.png'" alt="" />
            </div>
          </template>
        </a-popover>

        <a-divider type="vertical"></a-divider>

        <a-popover
          placement="bottomRight"
          v-if="isLogin"
          :overlayStyle="{
            width: '198px',
          }"
        >
          <div class="usr-img">
            <img class="usr-avatar" :src="user.avatar_url" alt="" />
          </div>

          <template #content>
            <div class="usr-menu">
              <div class="menu-title">
                <p class="t1 fcenter">开通<span>会员</span>享等多权益</p>
                <p class="t2 fcenter txt-overflow"><button>立即开通</button></p>
              </div>
              <div
                class="menu-item"
                v-for="item in menuItems"
                :key="item.name"
                @click="usrOption($event, item.id)"
              >
                <img :src="item.img_src" alt="" />
                <span> {{ item.name }}</span>
              </div>
            </div>
          </template>
        </a-popover>

        <div class="btn" v-else>
          <button class="login" @click="login">登陆</button>
          <button class="register" @click="register">注册</button>
        </div>
      </div>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  // import { tokenLogin } from '@/api';

  export default defineComponent({
    setup() {
      if (window.localStorage.getItem('access_token')) {
        (async () => {
          // const res = await tokenLogin();
          // console.log(res);
          console.log(`%c auto login with token`, 'background: green; color: #fff');
          // this.authlogin(res.data.user_info);
        })();
      }

      const usrOption = (e: MouseEvent, i: number) => {
        if (i === 0) {
          // settings
        }
        if (i === 1) {
          // vip
        }
        if (i === 2) {
          // my order
        }
        if (i === 3) {
          // feedback
        }
        if (i === 4) {
          // logout
        }
        if (i === 5) {
          (() => {
            // console.log('logout')
            window.sessionStorage.removeItem('access_token');
            window.sessionStorage.removeItem('refresh_token');
            // this.logout();
            // this.$router.push({ path: '/login' });
            // location.reload();
          })();
        }
      };

      const login = () => {
        // this.$router.push({ path: '/login' });
      };
      const register = () => {
        // this.$router.push({ path: '/login' });
      };

      return {
        isLogin: ref(false), // store
        menuItems: ref([
          {
            id: 1,
            img_src: 'https://files.wondercv.com/setting-icon.png',
            name: '账号设置',
          },
          {
            id: 2,
            img_src: 'https://files.wondercv.com/membership-icon.png',
            name: '超级会员',
          },
          {
            id: 3,
            img_src: 'https://files.wondercv.com/my-order-icon.png',
            name: '我的订单',
          },
          {
            id: 4,
            img_src: 'https://files.wondercv.com/feedback-icon.png',
            name: '问题反馈',
          },
          {
            id: 5,
            img_src: 'https://files.wondercv.com/signout-icon.png',
            name: '退出登录',
          },
        ]),
        user: ref({
          // store
          avatar_url: 'https://avatars0.githubusercontent.com/u/38181164?v=4',
          //
        }),
        usrOption,
        login,
        register,
      };
    },
  });
</script>

<style lang="less" scoped>
  .nav-container {
    background-color: #202329;
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  // .left {
  // }

  .middle {
    flex: 1;
  }

  .right {
    display: flex;
    align-items: center;
    // z-index: 3;

    .app {
      font-size: 16px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #797b7e;
      margin-left: 8px;
    }

    .auth {
      display: flex;
      align-items: center;

      .login,
      .register {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 62px;
        height: 26px;
        padding: 1px 6px;
        border-radius: 15px;
        font-size: 14px;
        color: #fff;
      }

      .login {
        border: 1px solid #797b7e;
        background: #202329;
      }

      .login:hover {
        border: 1px solid #fff;
      }

      .register {
        background-color: #f64;
        border: 1px solid #f64;
        margin: 0 0 0 16px;
      }

      .register:hover {
        background-color: #ff856a;
        border: 1px solid #ff856a;
      }
    }
  }

  .qrcode {
    .title {
      line-height: 20px;
      font-size: 14px;
      text-align: center;
      margin: 24px 0;
    }

    img {
      width: 160px;
      height: 160px;
      margin: 4px auto 0;
    }
  }

  .usr-img {
    width: 34px;
    height: 56px;
    overflow: hidden;
    position: relative;

    .usr-avatar {
      object-fit: cover;
      background-size: 30px;
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      margin-top: 13px;
    }
  }

  .usr-menu {
    .menu-title {
      position: relative;
      overflow: hidden;
      cursor: auto;

      .t1 {
        padding-top: 14px;
        padding-bottom: 8px;
        line-height: 20px;
        color: rgb(64, 64, 64);

        span {
          color: rgb(255, 79, 76);
        }
      }

      .t2 {
        width: 90%;

        button {
          width: 72px;
          height: 24px;
          background: #ff4f4c;
          font-size: 14px;
          color: #fff;
          display: block;
          border-radius: 2px;
          margin-left: 25px;
          border: none;
        }

        button:active {
          border: none;
          outline: none;
          cursor: pointer;
        }
      }
    }

    .menu-title::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: #f2f2f2;
      position: absolute;
      left: 8px;
      bottom: 0;
    }

    .menu-item {
      display: flex;
      align-items: center;
      height: 52px;
      padding: 0 25px;
      cursor: pointer;

      img {
        max-width: 14px;
        max-height: 14px;
        margin: 0 20px;
      }
    }

    .menu-item:hover {
      background: #f9f9f9;
    }
  }
</style>

<style lang="less">
  .ant-popover {
    .ant-popover-arrow {
      display: none;
    }
  }
</style>
