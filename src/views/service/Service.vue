<template>
  <div class="service">
    <guide></guide>
    <version></version>
    <optimize></optimize>
    <solve></solve>
    <custom></custom>
    <Procedure></Procedure>
    <start></start>
    <comment></comment>
    <foot-wrap :logo="{ l: true }"></foot-wrap>
  </div>
</template>

<script>
import footWrap from '@/views/common/Footer'
import Guide from './child/Guide'
import Version from './child/Version'
import Optimize from './child/Optimize'
import Solve from './child/Solve'
import Start from './child/Start'
import Procedure from './child/Procedure'
import Custom from './child/Custom'
import Comment from './child/Comment'

export default {
  components: {
    footWrap,
    Guide,
    Version,
    Optimize,
    Solve,
    Start,
    Procedure,
    Custom,
    Comment,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.service {
  background: #fff;
}

/deep/ .btn {
  text-align: center;
  line-height: 62px;
  width: 188px;
  margin-right: auto;
  font-size: 20px;
  border-radius: 30px;
  background: #ff4f4f;
  border: #ff4f4f;
  box-shadow: 0 6px 24px -4px #ffa4a4;
  color: #fff;
  cursor: pointer;
}

/deep/ .title {
  font-size: 30px;
  font-weight: 700;
  line-height: 34px;
  color: #404040;
}
/deep/ .el-carousel__indicator.is-active button {
  opacity: 1;
  background: #f64;
}
/deep/ .el-carousel__button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
</style>
