<template>
  <div>
    <home-body></home-body>
    <foot-wrap :logo="{ r: true }"></foot-wrap>
  </div>
</template>

<script>
import homeBody from './HomeBody.vue'
import footWrap from '../common/Footer.vue'
export default {
  components: {
    footWrap,
    homeBody,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped></style>
