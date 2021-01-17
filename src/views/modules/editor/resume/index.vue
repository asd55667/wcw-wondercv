<template>
  <div class="resume-wrapper pr" :style="`width:${resumeWidth};`">
    <!-- <div>{{ screenWidth }} × {{ screenHeight }} | {{ resumeWidth }}</div> -->
    <div
      id="resume"
      class="a4 one-page-bottom"
      :style="`transform: scale(${scale});`"
    >
      <div
        class="scan"
        :style="`display:${isScanning ? 'block' : 'none'} ;`"
      ></div>
      <div class="cv">
        <div @click="switchFormTag('basic')">
          <basic-view></basic-view>
        </div>
        <div class="resume-view" v-for="item in modules" :key="item.id">
          <div @click="switchFormTag(item.tag)">
            <base-view :resumeModule="item"></base-view>
          </div>
        </div>
      </div>
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
import BaseView from './BaseView'
import BasicView from './BasicView'

const a4Width = 793

export default {
  name: 'ResumeView',
  components: {
    BasicView,
    BaseView,
  },
  data() {
    return {
      scale: 0.906801,
      // scale: 1,
      // screenWidth: '',
      // screenHeight: '',
      resumeWidth: '',
      rawWidth: 0,
    }
  },
  mounted() {
    this.resumeWidth = this.$el.offsetWidth
    this.rawWidth = this.$el.offsetWidth
    window.onresize = () => {
      return (() => {
        let marginRight = getComputedStyle(
          document.querySelector('.index-main'),
          null,
        ).marginRight.slice(0, -2)
        console.log('margin', marginRight)
        marginRight = +marginRight + 15
        if (marginRight > -270 && marginRight < 0) {
          this.resumeWidth = Math.max(450, this.resumeWidth + marginRight)
        } else if (marginRight >= 0) {
          if (this.activeId !== 0) {
            this.resumeWidth = this.rawWidth
          }
        }
      })()
    }
  },
  watch: {
    resumeWidth(val) {
      if (!this.timer) {
        this.timer = true
        let that = this
        setTimeout(() => {
          this.scale = (val / a4Width).toFixed(6)
          that.timer = false
        }, 300)
      }
    },

    activeId(val) {
      if (val !== 0) {
        setTimeout(() => {
          this.resumeWidth = this.rawWidth
        }, 300)
      }
    },
  },

  created() {},
  computed: {
    modules() {
      return this.$store.getters.modules
    },
    activeId() {
      return this.$store.state.activeId
    },
    isScanning() {
      return this.$store.state.isScanning
    },
  },

  methods: {
    componentId(id) {
      for (const m of this.$store.state.remains) {
        if (id === m.id) {
          return m.tag + '-view'
        }
      }
    },
    switchFormTag(tag) {
      this.$store.commit('switchFormTag', tag)
      this.$store.commit('switchTab', 0)
      setTimeout(() => {
        this.resumeWidth = this.$el.clientWidth
      }, 300)
    },

    onePageFmt() {
      console.log('one page fmt')
    },
  },
}
</script>

<style lang="less" scoped>
.resume-wrapper {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  box-sizing: content-box;
}
.cv {
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
  // color: red;
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
