<template>
  <div class="resume-wrapper pr">
    <!-- :style="{ width: `${resumeWidth}px` }" -->
    <!-- <div>{{ screenWidth }} × {{ screenHeight }} | {{ resumeWidth }}</div> -->
    <div
      id="resume"
      class="a4 one-page-bottom"
      :style="{ transform: `scale(${scale})` }"
    >
      <div
        class="scan"
        :style="`display:${isScanning ? 'block' : 'none'} ;`"
      ></div>
      <CV></CV>
    </div>
    <div class="pagination">pagination</div>
    <div class="one-page pa" @click="onePageFmt">
      <div class="one-page-btn">
        <i class="el-icon-basketball"></i>
        <span>智能一页</span>
      </div>
    </div>
  </div>
</template>

<script>
import CV from './CV'

import { addResizeListener, removeResizeListener } from '@/utils'

import {
  mapState as mapResumeState,
  mapGetters as mapResumeGetters,
  mapMutations as mapResumeMutations,
  mapActions as mapResumeActions,
} from '@/store/helper/resume'

const a4Width = 793

export default {
  name: 'ResumeView',
  components: {
    CV,
  },
  data() {
    return {
      // scale: 1,
      resumeWidth: '',
      cvHeight: 1,
      rawWidth: 0,
    }
  },

  computed: {
    scale() {
      const scale = (this.resumeWidth / a4Width).toFixed(6)
      // return 0.5
      return scale < 0.5 ? 0.5 : scale
    },
    ...mapResumeState(['isScanning', 'activeId']),
  },

  methods: {
    onePageFmt() {
      console.log('one page fmt')
    },
    resetResumeWidth() {
      const offsetRight =
        document.body.offsetWidth - a4Width - this.$el.offsetLeft

      if (offsetRight < 0) {
        this.resumeWidth = Math.max(450, this.resumeWidth + offsetRight * 0.8)
      } else {
        if (this.activeId !== 0) {
          this.resumeWidth = this.rawWidth
        }
      }
    },
  },

  mounted() {
    this.rawWidth = this.resumeWidth = this.$el.offsetWidth
    this.$nextTick(() => {
      addResizeListener(this.$el, this.resetResumeWidth)
    })
  },
  beforeDestroy() {
    if (this.$el) removeResizeListener(this.$el, this.resetResumeWidth)
  },
}
</script>

<style lang="less" scoped>
.resume-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: content-box;
}

.a4 {
  width: 210mm;
  height: 297mm;
  // width: 595px;
  // height: 841px;
  background: #fff;
}

.scan {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  // background: url(../../../assets/imgs/scan.png) center center repeat-x;
  background: url(./scan.png) center center repeat-x;
  animation: move 2s ease-in-out infinite;
}
@keyframes move {
  from {
    top: -50%;
  }
  to {
    top: 50%;
  }
}

.resume-wrapper > .pagination {
  display: none;
}

.resume-wrapper > .one-page {
  display: none;
  // display: flex;
  align-items: center;
  justify-content: center;
  bottom: 100px;
  width: 100%;
}

.resume-wrapper:hover > .one-page {
  display: flex;
  .one-page-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 114px;
    height: 32px;
    background-color: rgba(53, 57, 68, 0.8);
    border-radius: 16px;
    color: #fff;
    i {
      margin-right: 8px;
    }

    .one-page-btn:hover {
      background: rgba(25, 28, 50, 0.9);
    }
  }
}

#resume {
  position: relative;
  transform-origin: 0 0;
  transition: all 0.3s;
  margin: 0 auto;
  line-height: 19px;
  font-size: 12px;

  padding: 12mm 0mm;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 2px 16px 0 hsla(0, 0%, 80.8%, 0.5) !important;
}
/deep/ p {
  margin: 0;
}
/deep/ ul {
  margin: 0;
  padding: 0 0 0 20px;
}
</style>
