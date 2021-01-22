<template>
  <div>
    <body-wrapper :title="title">
      <div class="mobile-content" slot="body">
        <div class="mobile-left">
          <span class="mobile-left-label">更高效</span>
          <div class="mobile-left-title">
            HR 在线直聊， <br />快速掌握求职先机
          </div>
          <div class="mobile-left-desc">
            便捷聊天沟通，获取更多真实信息，增加求职确定性。
          </div>
          <div class="mobile-left-desc">
            手机App实时连线，不错过任何机会，随时掌握求职进度。
          </div>
          <div class="mobile-left-desc">
            屏蔽在职公司，个人隐私保密，私密零骚扰的求职环境。
          </div>
          <div class="mobile-left-button">扫码下载 APP</div>
        </div>
        <img
          src="https://files.wondercv.com/homepage-pc/_%E7%A7%BB%E5%8A%A8%E7%AB%AF.png"
          alt
        />
      </div>
    </body-wrapper>
  </div>
</template>

<script>
import bodyWrapper from './Body.vue'
export default {
  components: {
    bodyWrapper,
  },
  data() {
    return {
      title: {
        special: '移动端',
        content: '，即时沟通不断线',
        desc: '随时沟通，极速邀约面试不排队',
      },
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.mobile-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 76px;
  .mobile-left {
    display: flex;
    flex-direction: column;
    margin-right: 34px;
    .mobile-left-label {
      display: inline-block;
      font-size: 14px;
      font-weight: 400;
      color: #ff4f4c;
      width: 68px;
      height: 24px;
      line-height: 24px;
      background: #ffe6e6;
      border-radius: 12px;
      text-align: center;
      margin-bottom: 15px;
    }
    .mobile-left-title {
      font-size: 28px;
      font-weight: 400;
      color: #404040;
      line-height: 40px;
      margin-bottom: 30px;
    }
    .mobile-left-desc {
      position: relative;
      width: 426px;
      font-size: 15px;
      font-weight: 400;
      color: #959ba3;
      line-height: 23px;
      padding-left: 20px;
      margin-bottom: 14px;
    }
    .mobile-left-desc::before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #959ba3;
    }
    .mobile-left-button {
      font-size: 18px;
      font-weight: 500;
      color: #fff;
      width: 220px;
      height: 49px;
      line-height: 49px;
      background: linear-gradient(90deg, #ff813a, #ff3d3d);
      box-shadow: 0 10px 18px -1px rgba(255, 94, 59, 0.35);
      border-radius: 24px;
      text-align: center;
      cursor: pointer;
    }
  }
  img {
    width: 633px;
    height: 574px;
  }
}
</style>
