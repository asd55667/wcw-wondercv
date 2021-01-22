<template>
  <div class="solve">
    <div class="left">
      <div class="title">解决三大问题</div>
      <div class="entry">
        <div
          class="item"
          v-for="i in 3"
          :key="i"
          @mouseenter="solveIdx = i"
          :style="solveIdx === i ? 'background: #fff;' : ''"
        >
          <img
            src="https://files.wondercv.com/pc/mentor/problem1.png"
            :style="solveIdx === i ? 'display: none;' : ''"
          />
          <img
            src="https://files.wondercv.com/pc/mentor/problem1-active.png"
            :style="solveIdx !== i ? 'display: none;' : ''"
          />
          <div class="txt">
            <div class="tab">简历优化</div>
            <div class="desc">好工作从好简历开始</div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="solve-block"></div>
      <div class="swiper">
        <el-carousel indicator-position="outside" height="455px">
          <el-carousel-item v-for="item in 2" :key="item">
            <img
              src="https://files.wondercv.com/pc/mentor/orderNew3_school_pic1.png"
            />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { solveIdx: 1 }
  },
}
</script>

<style lang="less" scoped>
.solve {
  // position: relative;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  width: 1016px;
  padding-top: 180px;
  margin: 0 auto;
  height: 563px;
  .left::before {
    content: '';
    width: 3000px;
    height: 563px;
    position: absolute;
    // top: 180px;
    left: 50%;
    margin-left: -3144px;
    background: #fff8f8;
    z-index: 0;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #fff8f8;
    width: 364px;
    height: 563px;
    .title {
      width: 100%;
      height: 34px;
      margin: 36px 0;
      text-align: center;
      z-index: 1;
    }
    .item {
      position: relative;
      display: flex;
      align-items: center;
      width: 364px;
      height: 110px;
      margin-bottom: 32px;
      border-radius: 8px 0 8px;
      img {
        width: 50px;
        height: 50px;
        margin: 0 25px 0 72px;
      }
      .txt {
        overflow: hidden;
        .tab {
          line-height: 22px;
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 600;
        }
        .desc {
          color: #404040;
        }
      }
    }
  }
  .right {
    position: relative;
    width: 496px;
    height: 430px;
    margin-top: 42px;
    margin-right: 20px;
    .swiper {
      cursor: zoom-in;
      width: 496px;
      height: 430px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
