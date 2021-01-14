<template>
  <div class="custom">
    <div class="left">
      <img
        src="https://files.wondercv.com/pc/mentor/orderNew4-new.png"
        alt=""
      />
    </div>
    <div class="right">
      <div class="title">专业导师为你定制专属简历</div>
      <div class="desc">
        <p class="txt">
          超级简历的导师团队来自BAT、罗兰贝格、德勤、联合利华等各大500强顶级名企及国内传统行业头部公司，覆盖互联网、金融、能源、高科技、地产、消费品等50多个领域，拥有至少5年以上工作经验，深度参与企业招聘流程，熟悉企业用人需求；
        </p>
        <p class="txt">
          服务人群覆盖海内外高校和世界500强名企，帮助众多求职者拿到国泰君安、字节跳动、联合利华等企业的面试及Offer
        </p>
      </div>
      <a href="" class="btn">立即体验</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.custom {
  display: flex;
  justify-content: space-between;
  // align-items: center;
  width: 1020px;
  padding-top: 134px;
  margin: 0 auto;
  .left {
    img {
      width: 570px;
      height: 302px;
      margin-top: 68px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 400px;

    .desc {
      line-height: 32px;
      margin: 34px 0 10px;
      width: 388px;
      color: #606060;
      p {
        font-size: 14px;
        // margin-bottom: 22px;
        margin-top: 0;
      }
    }
  }
}
</style>
