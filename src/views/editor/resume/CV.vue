<template>
  <!-- <div class="cv-wrapper"> -->
  <!-- :style="{ height: `${resumeHeight}px` }" -->
  <div class="cv">
    <div @click="switchForm('basic', 0)">
      <basic-view></basic-view>
    </div>
    <div class="resume-view" v-for="(item, idx) in importedModules" :key="idx">
      <div>
        <base-view
          :resumeModule="item"
          @formIdx="switchForm(item.tag, $event)"
        ></base-view>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { addResizeListener, removeResizeListener } from '@/utils'

import BaseView from './BaseView'
import BasicView from './BasicView'

import {
  mapState as mapResumeState,
  mapGetters as mapResumeGetters,
  mapMutations as mapResumeMutations,
  mapActions as mapResumeActions,
} from '@/store/helper/resume'

import {
  mapState as mapUserState,
  mapGetters as mapUserGetters,
  mapActions as mapUserActions,
  mapMutations as mapUserMutations,
} from '@/store/helper/user'

const a4Height = 1031

export default {
  components: {
    BasicView,
    BaseView,
  },
  data() {
    return { cvHeight: a4Height }
  },
  computed: {
    resumeHeight() {
      console.log(Math.ceil(this.cvHeight / a4Height) * a4Height)
      return Math.ceil(this.cvHeight / a4Height) * a4Height
    },
    ...mapUserState(['remains']),
    ...mapUserGetters(['importedModules']),
  },
  methods: {
    switchForm(tag, i) {
      this.switchFormState(false)
      this.switchFormTag(tag)
      this.switchFormIdx(i)
      this.switchTab(0)
      setTimeout(() => {
        this.resumeWidth = this.$el.clientWidth
      }, 300)
    },
    resetCVHeight() {
      //   console.log(`before ${this.cvHeight}`)
      this.cvHeight = getComputedStyle(
        // document.querySelector('.cv'),
        document.getElementsByClassName('cv')[0],
        null,
      ).height.slice(0, -2)
      //   console.log(`after ${this.cvHeight}`)
    },
    ...mapResumeMutations([
      'switchFormTag',
      'switchFormIdx',
      'switchTab',
      'switchFormState',
    ]),
  },
  mounted() {
    this.$nextTick(() => {
      addResizeListener(this.$el, this.resetCVHeight)
    })
  },
  beforeDestroy() {
    if (this.$el) removeResizeListener(this.$el, this.resetCVHeight)
  },
}
</script>

<style lang="less" scoped>
.cv {
  height: 100vh;
  overflow-y: scroll;
}
</style>
