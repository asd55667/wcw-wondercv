<template>
  <div class="comment">
    <div class="title">看看使用过的人怎么说</div>
    <div class="swiper">
      <el-carousel indicator-position="outside" height="846px">
        <el-carousel-item v-for="item in 2" :key="item">
          <img src="https://files.wondercv.com/pc/mentor/discourse_1.png" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.comment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1282px;
  margin: 0 auto 12px;
  padding-top: 178px;
  .title {
    margin-bottom: 50px;
  }
  .swiper {
    width: 1282px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
/deep/ .el-carousel__arrow {
  height: 60px;
  width: 60px;
  font-size: 26px;
  background-color: #f9f9f9;
  color: #cbcfd6;
  font-weight: 600;
}
/deep/ .el-carousel__arrow:hover {
  background: #f4f4f4;
}
</style>
