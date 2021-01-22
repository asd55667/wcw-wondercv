<template>
  <div class="editor-menu">
    <div class="side-menu">
      <MenuLeft :activeId="activeId"></MenuLeft>
    </div>
    <div class="side-content" :style="activeId === 0 ? 'width:544px' : ''">
      <component :is="componentId"></component>
    </div>
  </div>
</template>

<script>
import MenuLeft from './MenuLeft'

import SideContent0 from './form'
import SideContent1 from './side-content/check'
import SideContent2 from './side-content/experience'
import SideContent3 from './side-content/styleSetting'
import SideContent4 from './side-content/moduleManage'

import {
  mapState as mapResumeState,
  mapGetters as mapResumeGetters,
  mapActions as mapResumeActions,
} from '@/store/helper/resume'

export default {
  components: {
    MenuLeft,
    SideContent0,
    SideContent1,
    SideContent2,
    SideContent3,
    SideContent4,
  },
  computed: {
    componentId() {
      return 'side-content-' + this.activeId
    },
    ...mapResumeState(['activeId']),
  },
}
</script>

<style lang="less" scoped>
.editor-menu {
  display: flex;
}

.side-menu {
  width: 68px;
  color: #fff;
}
.side-content {
  width: 324px;
  transition: all 0.3s ease;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.04);
}
</style>
