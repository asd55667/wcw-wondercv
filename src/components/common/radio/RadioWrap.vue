<template>
  <div>
    <div class="radio">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initIdx: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      //   idx: 0,
    }
  },
}
</script>

<style lang="less" scoped>
.radio {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
