<template>
  <div class="guide">
    <div class="left">
      <div class="guide-block"></div>
      <div class="title">专业辅导，助你脱颖而出</div>
      <div class="subtitle">
        资深导师 1v1 简历优化，提升 2 倍以上面试邀约
      </div>
      <a href="" class="btn">立即体验</a>
    </div>
    <div class="right">
      <img
        src="https://files.wondercv.com/pc/mentor/orderNew1.jpg"
        alt="简历优化，直通面试"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.guide {
  display: flex;
  align-items: center;
  width: 988px;
  padding-top: 40px;
  margin: 0 auto;
  .left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-left: 20px;

    .guide-block {
      content: '';
      width: 150px;
      height: 150px;
      background: #ff4f4f;
      opacity: 0.04;
      border-radius: 50%;
      position: absolute;
      left: -54px;
      top: -50px;
    }
    .title {
      font-size: 38px;
      line-height: 38px;
      font-weight: 600;
      color: #404040;
    }
    .subtitle {
      font-size: 20px;
      line-height: 20px;
      margin: 24px 0 46px;
      color: #606060;
    }
  }
  .right {
    img {
      width: 602px;
      height: 395px;
      margin-right: -81px;
    }
  }
}
</style>
