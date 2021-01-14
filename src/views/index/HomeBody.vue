<template>
  <div class="home-body" style="width:100%;">
    <banner class="banner-wrapper"></banner>
    <tab class="tab-wrapper"></tab>
    <company class="company-wrapper"></company>
    <mobile class="mobile-wrapper"></mobile>
    <blog class="blog-wrapper"></blog>
    <feedBack class="feedback-wrapper"></feedBack>
    <end class="end-wrapper"></end>
  </div>
</template>

<script>
import Banner from './child/Banner.vue'
import Tab from './child/Tab.vue'
import Company from './child/Company.vue'
import Mobile from './child/Mobile.vue'
import Blog from './child/Blog.vue'
import FeedBack from './child/FeedBack.vue'
import End from './child/End.vue'

export default {
  components: {
    Banner,
    Tab,
    Company,
    Mobile,
    Blog,
    FeedBack,
    End,
  },
}
</script>

<style lang="less" scoped>
.banner-wrapper {
  background-color: #202329;
  position: relative;
  height: 680px;
  background: url(https://files.wondercv.com/homepage-pc/banner__bg.png)
    no-repeat 50% / cover;
}
.tab-wrapper {
  background-color: #fff;
  position: relative;
}
.company-wrapper {
  position: relative;
  margin-top: -37px;
}
.mobile-wrapper {
  margin-top: 176px;
}

.blog-wrapper {
  margin-top: 132px;
}
.feedback-wrapper {
  position: relative;
  margin-top: 211px;
}
.end-wrapper {
  margin-top: -76px;
}
/deep/ .btn {
  color: #fff;
  font-weight: 500;
  background: linear-gradient(90deg, #ff813a, #ff3d3d);
  margin-right: 23px;

  width: 220px;
  height: 49px;
  line-height: 49px;
  font-size: 18px;
  border-radius: 24px;
  text-align: center;
  cursor: pointer;
}
</style>
