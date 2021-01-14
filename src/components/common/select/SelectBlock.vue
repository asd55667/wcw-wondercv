<template>
  <div>
    <div class="cur pr" @click="choseModule">
      <div class="name">
        <span>{{ name }}</span>
        <i class="el-icon-arrow-down icon"></i>
      </div>
      <div
        class="option pa"
        :style="`display: ${showOption ? 'block' : 'none'}; width: ${width};`"
      >
        <div
          v-for="(item, i) in options"
          :key="i"
          :class="['item pr', name === item.name ? 'active' : '']"
          @click="choseItem(i)"
        >
          <div :style="item.style">{{ item.txt }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
    },
    width: {
      type: String,
    },
    initIdx: {
      type: Number,
      default: 0,
    },
  },
  created() {
    this.name = this.options[this.initIdx].name
  },
  data() {
    return { showOption: false, optionIdx: 0, name: '' }
  },
  methods: {
    choseModule() {
      this.showOption = !this.showOption
    },
    choseItem(i) {
      this.optionIdx = i
      this.name = this.options[i].name
    },
  },
}
</script>

<style lang="less" scoped>
.cur {
  .name {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    // font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    color: #606266;
    background: #fff;
    width: 110px;
    line-height: 36px;
    border-radius: 5px;
    border: solid 1px #aeb2bd;
    // padding: 0 12px;
    box-sizing: border-box;
    .icon {
      font-size: 12px;
      margin-left: 8px;
      font-weight: 400;
    }
  }
  .option {
    width: 292px;
    max-height: 300px;
    // padding: 5px 0;
    overflow: auto;
    top: 45px;
    z-index: 11;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    // box-sizing: border-box;
    .item {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: left;
      flex-wrap: wrap;
      padding: 0 20px;
      height: 34px;
      cursor: pointer;
    }
  }
}
.active {
  // color: #505667;
  // font-weight: 600;
  background-color: #f5f7fa;
}
</style>
