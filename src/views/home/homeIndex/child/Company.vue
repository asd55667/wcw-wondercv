<template>
  <div>
    <!-- <div class="title-wrapper">
      <a href="" style="color:#7e8c8d;">
        <h2 class="title">
          <span class="special">找工作</span>，热门公司任你选
        </h2>
        <p class="desc">热门职位，靠谱企业只等你来</p>
      </a>
    </div> -->
    <body-wrapper :title="title">
      <div class="company" slot="body" style="position:relative;">
        <div class="company-content">
          <a class="company-item" href="" v-for="item in 8" :key="item">
            <img
              src="https://files.wondercv.com/homepage-pc/%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8.png"
              alt
            />
            <div class="company-title">字节跳动</div>
            <div class="company-desc">北京等 · 移动互联网 · 10000人以上</div>
            <div class="company-button">
              <span class="job-count"> 99+ </span>
              个职位正在热招
            </div>
          </a>
        </div>
        <div class="company-button-box">
          <a class="employer" href="">查看更多热门职位</a>
          <a class="recruit" href="">我要招人</a>
        </div>
        <div class="company-block"></div>
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
        special: '找工作',
        content: '，热门公司任你选',
        desc: '热门职位，靠谱企业只等你来',
      },
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.company-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1120px;
  margin: 48px auto 0;
  .company-item {
    display: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 265px;
    border-radius: 6px;
    padding: 30px 0 28px;
    margin-bottom: 20px;
    background: #fff;
    border: 1px solid #e9ecf0;
    cursor: pointer;
    img {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
    }
    .company-title {
      font-size: 18px;
      font-weight: 500;
      color: #404040;
      line-height: 1;
      margin-bottom: 12px;
    }
    .company-desc {
      font-size: 14px;
      font-weight: 300;
      color: #9c9c9c;
      line-height: 1;
      margin-bottom: 22px;
    }
    .company-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 180px;
      height: 34px;
      border-radius: 2px;
      border: 1px solid #ececec;
      color: #606060;
      font-size: 14px;
      text-align: center;
      .job-count {
        color: #ff4f4c;
        font-size: 18px;
        font-weight: 500;
        margin-right: 4px;
      }
    }
  }
}
.company-button-box {
  display: flex;
  justify-content: center;
  margin-top: 18px;
  a {
    font-size: 18px;
    font-weight: 500;
    line-height: 49px;
    text-align: center;
    width: 220px;
    height: 49px;
    border-radius: 24px;
    cursor: pointer;
  }
  .employer {
    background: linear-gradient(90deg, #ff813a, #ff3d3d);
    box-shadow: 0 10px 18px -1px rgba(255, 94, 59, 0.35);
    color: #fff;
    margin-right: 30px;
  }
  .recruit {
    color: #ff4f4c;
    background: #fff;
    border-radius: 24px;
    border: 1px solid #eb5446;
    line-height: 47px;
  }
}
.company-block {
  position: absolute;
  top: 20px;
  left: -16px;
  width: 133px;
  height: 153px;
  background: url(https://files.wondercv.com/homepage-pc/block-left.png)
    no-repeat 0 0/100%;
  z-index: 1;
}
</style>
