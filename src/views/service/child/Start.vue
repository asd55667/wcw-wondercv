<template>
  <div class="start">
    <div class="title">开始优化你的简历吧</div>
    <div class="product">
      <div class="item" v-for="i in 3" :key="i">
        <div class="case">实习版</div>
        <div class="txt">1 轮简历辅导</div>
        <div class="price">
          <span class="type">¥ </span>
          <span class="count">149</span>
        </div>
        <div class="desc">适用于学生找实习，第一次工作无实习经历的同学</div>
        <a href="">立即体验</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 536px;
  padding-top: 70px;
  background: #fff8f8;
  margin: auto;
  .title {
    margin-bottom: 74px;
  }
  .product {
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 17px;
    .item:last-child {
      margin-right: 0;
    }
    .item:hover {
      box-shadow: 0 10px 52px 0 hsla(0, 0%, 89.4%, 0.5);
    }
    .item {
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 76px;
      border-radius: 4px;
      width: 268px;
      height: 356px;
      overflow: hidden;
      .case {
        font-size: 26px;
        font-weight: 600;
        line-height: 37px;
        padding: 38px 0 10px;
      }
      .txt {
        line-height: 22px;
        margin: 0 31px;
        color: #606060;
      }
      .price {
        line-height: 65px;
        font-weight: 700;
        margin: 15px;
        color: #ff4f4c;
        .type {
          top: -2px;
          font-size: 22px;
        }
        .count {
          font-size: 46px;
        }
      }
      .desc {
        font-size: 16px;
        line-height: 22px;
        margin: 0 31px;
        color: #606060;
      }
      a {
        margin: 22px auto 0;
        width: 174px;
        height: 44px;
        line-height: 44px;
        border-radius: 2px;
        border: 1px solid #ff4f4c;
        color: #ff4f4c;
        cursor: pointer;
        background: #fff;
      }
      a:hover {
        background: #ff4f4c;
        color: #fff;
      }
    }
  }
}
</style>
