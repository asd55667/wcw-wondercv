<template>
  <div
    class="pendant-wrap pr"
    @mouseenter="isShow = true"
    @mouseleave="isShow = false"
  >
    <slot name="content"></slot>
    <div :style="`display: ${isShow ? 'inline' : 'none'};`">
      <slot name="hide"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    }
  },
}
</script>

<style lang="less" scoped></style>
