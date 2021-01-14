<template>
  <div class="jobs-wrapper">
    <div class="search-wrapper">
      <el-input placeholder="请输入" v-model="queryInfo.query" class="inp">
        <el-button class="btn" slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <foot-wrap :logo="{ l: true }"></foot-wrap>
  </div>
</template>

<script>
import footWrap from '../common/Footer.vue'
export default {
  components: {
    footWrap,
  },
  data() {
    return {
      queryInfo: {
        query: '',
        pangenum: 1,
        pagesize: 8,
        total: 0,
      },
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.search-wrapper {
  width: 900px;
  height: 136px;
  padding-top: 28px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  .inp {
    width: 900px;
    padding-bottom: 18px;
    // border-radius: 4px;
    input {
      background: #ccc;
    }
    .btn {
      background-color: #ff6644;
      color: #fff;
      text-align: center;
      border-radius: 0 4px 4px 0px;
      padding: 13px 20px;
      padding-right: 21px;
      cursor: pointer;
    }
  }
}
</style>
