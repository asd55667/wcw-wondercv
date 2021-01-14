<template>
  <div class="foot-wrapper">
    <div class="foot-content">
      <div class="foot-top">
        <div class="left">
          <img
            class="logo-l"
            src="https://files.wondercv.com/translate-img/new_wondercv_logo_zh-CN.png"
            alt="logo"
            :style="`display:${logo.l ? 'inline' : 'none'}`"
          />
        </div>
        <div class="middle">
          <div class="links">
            <div class="link" v-for="i in 5" :key="i">
              <a href="" class="link-item" v-for="i in 6" :key="i">abaaa</a>
            </div>
          </div>
        </div>
        <div class="right">
          <img
            class="logo-r"
            src="https://files.wondercv.com/translate-img/new_wondercv_logo_zh-CN.png"
            alt="logo"
            :style="`display:${logo.r ? 'inline' : 'none'}`"
          />
        </div>
      </div>
      <div class="foot-bottom">
        <div class="partner">
          <span>合作伙伴：</span>
          <a href="" v-for="i in 6" :key="i">LinkedIn</a>
        </div>
        <div class="friend-link">
          <span>友情链接（+QQ:2549723159）：</span>
          <a href="" v-for="i in 24" :key="i">简历模板</a>
        </div>
        <div class="copy">
          ©2020 超级简历WonderCV wondercv.com | wcw-demo
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      l: false,
      r: false,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.foot-wrapper {
  background: #f2f2f5;
  padding-bottom: 40px;
  height: 420px;
  .foot-content {
    position: relative;
    // display: flex;
    // flex-direction: column;
    padding-top: 38px;
    width: 1200px;
    justify-content: center;
    margin: auto;
    .foot-top {
      display: flex;
      justify-content: center;

      .logo-r,
      .logo-l {
        width: 120px;
        height: 36px;
        img {
          width: 100%;
        }
      }

      .logo-r {
        width: 120px;
        margin-left: 100px;
      }
      .logo-l {
        width: 120px;
        margin-right: 100px;
      }
      .links {
        display: flex;
        justify-content: center;
        .link {
          display: flex;
          flex-direction: column;
          width: 167px;
          .link-item {
            display: block;
            width: fit-content;
            font-size: 13px;
            position: relative;
            cursor: pointer;
            margin-bottom: 12px;
            color: #7e8c8d;
          }
          .link-item:hover {
            text-decoration: underline;
          }
          .link-item:first-child {
            color: #9b9b9b;
          }
        }
        .link:last-child {
          width: auto;
        }
      }
    }
    .foot-bottom {
      width: 962px;
      line-height: 18.5px;
      color: #9b9b9b;
      margin: 40px auto auto;
      a {
        margin-right: 4px;
        color: #9b9b9b;
        // font-size: 13px;
      }
      .partner,
      .friend-link {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      .copy {
        font-size: 13px;
        margin-top: 36px;
        text-align: center;
      }
    }
  }
}
</style>
