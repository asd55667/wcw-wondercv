<template>
  <div class="editor-wrap">
    <div class="side-menu">
      <menu-tab :activeId="this.activeId"></menu-tab>
    </div>
    <div class="side-content" :style="this.activeId === 0 ? 'width:544px' : ''">
      <component :is="componentId"></component>
    </div>
    <div class="resume-view">
      <resume-view></resume-view>
    </div>
  </div>
</template>

<script>
import MenuTab from './menu'
import ResumeView from './resume'

import {
  SideContent1,
  SideContent2,
  SideContent3,
  SideContent4,
} from './side-content'
import { SideContent0 } from './form'

export default {
  components: {
    MenuTab,
    ResumeView,
    // SideContent,
    SideContent0,
    SideContent1,
    SideContent2,
    SideContent3,
    SideContent4,
  },
  data() {
    return {}
  },
  computed: {
    componentId() {
      return 'side-content-' + this.activeId
    },
    activeId() {
      return this.$store.state.activeId
    },
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.editor-wrap {
  width: 1196px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  height: var(--cvHeight);
  .side-menu {
    width: 68px;
    color: #fff;
  }
  .side-content {
    width: 324px;
    transition: all 0.3s ease;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.04);
  }
  .resume-view {
    margin-left: 16px;
    max-width: 720px;
    min-width: 450px;
    transition: all 0.3s ease;
    background: #f9f9f9;
    flex: 1;
    transform-origin: 0 0;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.04);
  }
}
</style>
