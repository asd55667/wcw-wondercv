<template>
  <div>
    <div class="banner-content">
      <div class="banner-left">
        <h1 class="banner-title">
          <span>从简历到内推</span>
          <span>一站式求职平台</span>
        </h1>
        <p class="banner-desc">
          <span>30 分钟快速制作，名企 HR 在线邀约</span>
        </p>
        <div class="btn">
          免费生成专业简历
        </div>
      </div>
      <div class="banner-right">
        <video
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          poster
          preload="auto"
          width="674px"
          playsinline="playsinline"
        >
          <source
            src="https://files.wondercv.com/%E9%A6%96%E9%A1%B5%E8%A7%86%E9%A2%91_v3.ogg"
            type="video/ogg"
          />
          <source
            src="https://files.wondercv.com/%E9%A6%96%E9%A1%B5%E8%A7%86%E9%A2%91_v3.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.banner-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 70px;
  max-width: 1482px;
  min-width: 1280px;
  width: 1204px;
  height: 100%;
  color: #fff;
  .banner-left {
    display: flex;
    flex-direction: column;
    margin-right: 6%;
    .banner-title {
      font-size: 52px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 20px;
      line-height: 64px;
      span {
        display: block;
      }
      span:first-child {
        margin-bottom: 4px;
      }
    }
    .banner-desc {
      font-size: 18px;
      font-weight: 400;
      color: #f7f8f9;
      margin-bottom: 55px;
      span {
        display: inline-block;
        margin-bottom: 10px;
      }
    }
  }
  .banner-right {
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>
