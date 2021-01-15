<template>
  <div>
    <body-wrapper :title="title">
      <div class="swiper" slot="body">
        <div class="swiper-main">
          <el-carousel
            indicator-position="outside"
            :autoplay="false"
            arrow="always"
            slot="body"
            height="350px"
          >
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="swiper-wrapper">
                <div class="swiper-usr-box">
                  <img
                    src="https://files.wondercv.com/%E5%88%98%E8%90%8C%E8%90%8C@2x.png"
                    alt=""
                  />
                  <div class="swiper-usr-info">
                    <span class="swiper-usr-name">刘萌萌</span>
                    <span class="swiper-usr-desc">互联网公司猎头</span>
                  </div>
                </div>
                <p class="swiper-content">
                  作为一个专业猎头，我看的职位是比较高级的，但是拿到的简历也是五花八门各种样子的都有。为了能够更好的把他们展示给雇主单位，很多简历我都会和候选人详聊之后重新制作。
                  一般我都是用国外的编辑器和Word按照我做好的习惯模板去制作，直到发现超级简历，比用自己做好的模板还要方便快捷，确实是我用过最好用的编辑器，希望超级简历能够开发能让我们更好管理简历的功能就更好了。
                </p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="feedback-block" slot="block"></div>
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
        special: '听一听',
        content: '，用户们的反馈',
        desc: '他们都推荐超级简历',
      },
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.swiper {
  margin: 62px auto 0;
  .swiper-main {
    width: 100%;
    height: 540px;
    overflow: hidden;
    .swiper-wrapper {
      width: 984px;
      // height: 300px;
      background: #fff;
      box-shadow: 0 0 30px 0 rgba(0, 9, 85, 0.08);
      border-radius: 12px;
      padding: 50px 80px 60px;
      margin: 20px auto;
      box-sizing: border-box;
      .swiper-usr-box {
        display: flex;
        margin-bottom: 20px;
        img {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          margin-right: 16px;
        }
        .swiper-usr-info {
          display: flex;
          flex-direction: column;
          .swiper-usr-name {
            font-size: 20px;
            font-weight: 400;
            color: #202329;
            line-height: 35px;
          }
          .swiper-usr-desc {
            font-size: 16px;
            font-weight: 400;
            color: #9c9c9c;
            line-height: 22px;
          }
        }
      }
      .swiper-content {
        font-size: 16px;
        font-weight: 400;
        color: #333;
        line-height: 28px;
      }
    }
  }
}

.feedback-block {
  width: 133px;
  height: 153px;
  position: absolute;
  top: 20px;
  left: -16px;
  background: url(https://files.wondercv.com/homepage-pc/block-left.png)
    no-repeat 0 0/100%;
  z-index: 1;
}

// .el-carousel__indicator--horizontal {
//   left: 50%;
//   transform: translateX(-50%);
//   padding: 0 11px;
// }
/deep/ .el-carousel__indicator.is-active button {
  opacity: 1;
  background: #f64;
}
/deep/ .el-carousel__button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
/deep/ .el-carousel__arrow {
  height: 60px;
  width: 60px;
  font-size: 26px;
  background-color: #f9f9f9;
  color: #cbcfd6;
  font-weight: 600;
}
/deep/ .el-carousel__arrow:hover{
  background: #f4f4f4;
}
</style>
