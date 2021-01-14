<template>
  <div class="opt">
    <div class="opt-block"></div>
    <div class="title">多方面优化你的简历</div>
    <div class="intro">
      <div class="item" v-for="i in 4" :key="i">
        <img
          src="https://files.wondercv.com/pc/mentor/orderNew2-4.png"
          alt=""
        />
        <div class="aspect">架构梳理</div>
        <div class="desc">
          梳理简历结构，强化重点模块，突出 HR 关注的优势及核心竞争力
        </div>
      </div>
    </div>
    <div style="display:flex;">
      <a href="" class="btn">立即优化</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.opt {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // text-align: center;
  width: 988px;
  padding-top: 180px;
  margin: 0 auto;
  .opt-block {
    content: '';
    width: 260px;
    height: 260px;
    background: #ff4f4f;
    opacity: 0.04;
    border-radius: 50%;
    position: absolute;
    right: -60px;
    top: 86px;
  }
  .intro {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 77px 0 63px;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 177px;
      height: 255px;
      padding: 13px 14px 10px;
      margin: 0 21px;
      border-radius: 4px;
      box-shadow: 0 10px 36px 0 hsla(0, 0%, 86.7%, 0.5);
      img {
        width: 177px;
        height: 104px;
      }
      .aspect {
        line-height: 18px;
        margin: 34px 0 17px;
        font-size: 18px;
        font-weight: 700;
      }
      .desc {
        font-size: 12px;
        color: #606060;
        line-height: 20px;
        margin: 0 11px;
      }
    }
  }
}
</style>
