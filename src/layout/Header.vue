<template>
  <div class="nav-container pr">
    <slot name="left">left</slot>
    <slot name="middle">middle</slot>
    <div class="right">
      <slot name="right"></slot>
      <div class="auth">
        <div class="mobile">
          <hide class="app">
            <div slot="content" :top="40">
              <i class="iconfont icon-shouji" style="margin-right:6px;"
                >&#xe615;</i
              >
              APP
            </div>
            <div slot="hide" class="qcode">
              <div class="title">扫码下载App 同步编辑</div>
              <img
                :src="'https://files.wondercv.com/appDownloadIcon.png'"
                alt=""
              />
            </div>
          </hide>
        </div>
        <div class="line"></div>

        <hide class="usr" v-if="isLogin">
          <div slot="content" class="usr-img" :top="100">
            <img class="usr-avatar" :src="user.avatar_url" alt="" />
          </div>
          <div slot="hide" class="usr-menu">
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
        </hide>

        <div class="btn" v-else>
          <div class="login" @click="login">登陆</div>
          <div class="register" @click="register">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hide from '@/views/common/Hide'

import {
  mapState as mapUserState,
  mapGetters as mapUserGetters,
  mapActions as mapUserActions,
  mapMutations as mapUserMumapMutations,
} from '@/store/helper/user'

import { tokenLogin } from '@/api'

export default {
  components: {
    Hide,
  },
  data() {
    return {
      menuItems: [
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
      ],
    }
  },
  created() {
    // console.log('user', this.user, this.isLogin)
    if (window.localStorage.getItem('access_token')) {
      ;(async () => {
        const res = await tokenLogin()
        // console.log(res)
        console.log(
          `%c auto login with token`,
          'background: green; color: #fff',
        )
        this.authlogin(res.data.user_info)
      })()
    }
  },

  methods: {
    login() {
      this.$router.push({ path: '/login' })
    },
    register() {
      this.$router.push({ path: '/login' })
    },
    usrOption(e, i) {
      switch (i) {
        // settings
        case 1:
          break
        // vip
        case 2:
          break
        // my order
        case 3:
          break
        // feedback
        case 4:
          break
        // logout
        case 5:
          ;(() => {
            // console.log('logout')
            window.sessionStorage.removeItem('access_token')
            window.sessionStorage.removeItem('refresh_token')
            this.logout()
            this.$router.push({ path: '/login' })
            location.reload()
          })()
          break
      }
    },
    ...mapUserActions(['authlogin', 'logout']),
  },
  computed: {
    ...mapUserGetters(['isLogin']),
    ...mapUserState(['user']),
  },
}
</script>

<style lang="less" scoped>
.nav-container {
  text-align: center;
  height: 56px;
  width: 1196px;
  margin: auto;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
}
.middle {
  flex: 1;
}
.right {
  display: flex;
  align-items: center;
  // justify-content: center;
  z-index: 3;
  .mobile {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    font-size: 16px;
    .app {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #797b7e;
      margin-left: 8px;
    }
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
.line {
  width: 1px;
  height: 16px;
  margin: 0 16px;
  background-color: #36393e;
}

.qcode {
  width: 238px;
  height: 256px;
  background: #fff;
  border: 1px solid #dedfe1;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  position: absolute;
  // bottom: -258px;
  top: 43px;
  left: 4%;
  transform: translateX(-50%);
  text-align: center;
  color: #404040;
  border-radius: 4px;
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

.usr {
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
    position: absolute;
    right: -15px;
    bottom: 0;
    transform: translateY(100%);
    width: 198px;
    background-color: #fff;
    padding: 5px 0;
    margin: 0 0;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    border-radius: 4px;
    color: rgb(0, 0, 0);
    .menu-title {
      margin: auto;
      text-align: center;
      position: relative;
      overflow: hidden;
      cursor: auto;
      padding-bottom: 8px;
      margin-bottom: 2px;
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
        width: 170px;
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
      padding: 0 20px;
      cursor: pointer;
      img {
        max-width: 14px;
        max-height: 14px;
        margin: 0 20px;
        // display: block;
      }
    }
    .menu-item:hover {
      background: #f9f9f9;
    }
  }
}
</style>
