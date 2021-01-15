<template>
  <div>
    <div class="trash-wrapper">
      <img
        src="https://static.wondercv.com/cv_pc_vue/img/nodata.04d8b7cb.png"
        alt=""
      />
      <p>暂无已删除简历</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.trash-wrapper {
  max-width: 900px;
  height: 466px;
  margin: auto;
  padding: 64px 0;
  padding-top: 64px;
  padding-bottom: 60px;
  background: #fff;
  img {
    display: block;
    width: 499px;
    margin: 68px auto 0;
  }
  p {
    text-align: center;
    font-size: 14px;
    color: #909090;
    margin-top: 30px;
  }
}
</style>
