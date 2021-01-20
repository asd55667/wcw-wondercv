<template>
  <div class="menu-wrapper">
    <div class="tab-wrapper pr">
      <img
        class="bkgd pa"
        src="https://files.wondercv.com/cv-sidebar/sidebar-select-bgimg.png"
        :style="`transform: translateY(${(activeId - 1) * 117}px);`"
      />
      <div
        :class="[
          'tab-item pr',
          activeId === item.id ? 'selected' : 'not-selected',
        ]"
        v-for="item in tabBar"
        :key="item.id"
        @click="switchTab(item.id)"
      >
        <div class="tab-img">
          <img :src="activeId === item.id ? item.selected : item.icon" alt="" />
        </div>
        <div class="txt">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState as mapResumeState,
  mapGetters as mapResumeGetters,
  mapMutations as mapResumeMutations,
} from '@/store/helper/resume'

export default {
  data() {
    return {
      tabBar: [
        {
          id: 1,
          name: '检查',
          icon: 'https://files.wondercv.com/cv-sidebar/check-not-select.png',
          selected: 'https://files.wondercv.com/cv-sidebar/check-1.png',
        },
        {
          id: 2,
          name: '经历库',
          icon: 'https://files.wondercv.com/cv-sidebar/library-not-select.png',
          selected: 'https://files.wondercv.com/cv-sidebar/library-1.png',
        },
        {
          id: 3,
          name: '排版',
          icon:
            'https://files.wondercv.com/cv-sidebar/composing-not-select.png',
          selected: 'https://files.wondercv.com/cv-sidebar/composing-1.png',
        },
        {
          id: 4,
          name: '模块管理',
          icon: 'https://files.wondercv.com/cv-sidebar/manage-not-select.png',
          selected: 'https://files.wondercv.com/cv-sidebar/manage-1.png',
        },
      ],
    }
  },
  methods: {
    ...mapResumeMutations(['switchTab']),
  },
  computed: {
    ...mapResumeState(['activeId']),
  },
}
</script>

<style lang="less" scoped>
.menu-wrapper {
  background-color: #353944;
  height: 100%;
  border-radius: 4px 0 0 0;
  // img {
  // display: block;
  // }
  .bkgd {
    width: 54px;
    height: 80px;
    right: 0;
    z-index: 0;
  }
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 1;
    .tab-img {
      cursor: pointer;
      width: 40px;
      height: 40px;
      margin: 20px;
      border-radius: 20px;
      background-color: #414653;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .txt {
      cursor: pointer;
      font-size: 12px;
      width: 100%;
      padding-top: 1px;
      margin-bottom: 20px;
    }
  }
}

.selected {
  .tab-img {
    background-color: #fff !important;
  }
}
</style>
