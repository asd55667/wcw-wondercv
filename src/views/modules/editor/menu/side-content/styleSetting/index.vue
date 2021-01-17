<template>
  <div class="style-settings">
    <div class="tabs fcenter pr">
      <div
        :class="['item pr', activeId === i ? 'active' : '']"
        v-for="(item, i) in tabs"
        :key="item"
        @click="switchTab(i)"
      >
        {{ item }}
      </div>
    </div>
    <div class="style-wrap" :hidden="activeId !== 0">
      <Style></Style>
    </div>
    <div class="rank-wrap" :hidden="activeId !== 1">
      <Rank>rank</Rank>
    </div>
  </div>
</template>

<script>
import Style from './Style.vue'
import Rank from './Rank'
export default {
  components: {
    Style,
    Rank,
  },
  data() {
    return {
      tabs: ['样式', '排版'],
      activeId: 0,
    }
  },
  methods: {
    switchTab(i) {
      console.log(i)
      this.activeId = i
    },
  },
}
</script>

<style lang="less" scoped>
.style-settings {
  width: 100%;
  height: var(--cvHeight);
  background: #fff;
}

.tabs {
  height: 52px;
  line-height: 52px;
  justify-content: space-evenly;
  .item {
    color: #606060;
    font-size: 14px;
  }
  .item:hover {
    cursor: pointer;
  }
}

.active {
  position: relative;
  color: #404040;
  font-weight: 600;
}
.active::after {
  content: '';
  display: block;
  width: 14px;
  height: 3px;
  background: #505657;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
