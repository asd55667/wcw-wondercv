<template>
  <div class="hr-invite">
    <div class="message">
      <span class="title">HR邀约通知</span>
      <span class="txt">共收到0条邀约信息</span>
    </div>
    <div class="no-data">
      <div class="content">
        <img
          src="https://files.wondercv.com/pc-inbox/%E5%8D%A0%E4%BD%8D%E5%9B%BE%402x.png"
          alt=""
        />
        <p>暂无HR邀约记录，或许可以先看看机会？</p>
        <router-link :to="{ path: '/cvs' }">去看职位</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.hr-invite {
  width: 904px;
  box-sizing: border-box;
  .message {
    height: 54px;
    padding: 0 32px;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid rgba(66, 66, 66, 0.12);
    background: #fff;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 54px;
    .title {
      font-weight: 500;
      color: #404040;
      margin-right: 14px;
    }
    span {
      font-weight: 400;
      color: #9c9c9c;
    }
  }
  .no-data {
    display: grid;
    align-items: center;
    background: #fff;
    height: 530px;
    justify-content: center;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        display: block;
        width: 112px;
        height: 112px;
        margin-bottom: 16px;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        color: #9c9c9c;
        line-height: 22px;
        margin-bottom: 24px;
      }
      a {
        text-align: center;
        width: 104px;
        height: 34px;
        padding: 0;
        background: #f64;
        border: #f64;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        line-height: 34px;
      }
    }
  }
}
</style>
