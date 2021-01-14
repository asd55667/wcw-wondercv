<template>
  <div :class="direction === 0 ? 'horizontal' : 'vertical'">
    <div
      :class="[type === 0 ? 'rec' : '', idx === i ? 'active' : '']"
      v-for="(op, i) in options"
      :key="op"
      @click="changeOp(i)"
    >
      <slot>{{ op }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      //   default: [],
    },
    initIdx: {
      type: Number,
      default: 0,
    },
    type: {
      type: Number,
      default: 0,
    },
    direction: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return { idx: 0 }
  },
  methods: {
    changeOp(i) {
      this.idx = i
    },
  },
}
</script>

<style lang="less" scoped>
.horizontal {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vertical {
}

.rec {
  font-size: 14px;
  display: flex;
  justify-content: center;
  width: 110px;
  border: solid 1px #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
}

.dot {
}

.active {
  color: #f64;
  border: solid 1px #f64;
}
</style>
