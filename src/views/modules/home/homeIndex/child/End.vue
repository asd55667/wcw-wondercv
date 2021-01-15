<template>
  <div>
    <body-wrapper :title="title">
      <div class="end-button" slot="body">
        免费生成专业简历
      </div>
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
        special: '',
        content: '即刻开始体验超级简历',
        desc: '',
      },
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.end-title {
  font-size: 48px;
  font-weight: 600;
  color: #404040;
  line-height: 67px;
  text-align: center;
}
.end-button {
  width: 264px;
  height: 66px;
  line-height: 66px;
  text-align: center;
  background: linear-gradient(90deg, #ff813a, #ff3d3d);
  box-shadow: 0 10px 18px -1px rgba(255, 94, 59, 0.35);
  border-radius: 33px;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin: 30px auto 112px;
  cursor: pointer;
}
</style>
