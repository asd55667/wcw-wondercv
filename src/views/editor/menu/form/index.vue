<template>
  <div class="form-wrapper">
    <component :is="componentId"></component>
  </div>
</template>

<script>
import BasicForm from './BasicForm'
import SkillForm from './SkillForm'
import SummaryForm from './SummaryForm'
import JobForm from './JobForm'
import ProjectForm from './ProjectForm'
import EduForm from './EduForm'
import CustomForm from './CustomForm'

import {
  mapState as mapResumeState,
  mapGetters as mapResumeGetters,
  mapMutations as mapResumeMutations,
  mapActions as mapResumeActions,
} from '@/store/helper/resume'

export default {
  components: {
    BasicForm,
    SkillForm,
    SummaryForm,
    JobForm,
    ProjectForm,
    EduForm,
    CustomForm,
  },
  data() {
    return {}
  },
  computed: {
    componentId() {
      return this.formTag + '-form'
    },
    ...mapResumeState(['formTag']),
  },
}
</script>

<style lang="less" scoped>
.form-wrapper {
  height: var(--cvHeight);
}
.form-wrapper /deep/ .form-wrap {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    width: 50%;
    box-sizing: border-box;
  }
  .item:nth-child(2n-1) {
    padding-right: 3%;
  }
  .item:nth-child(2n) {
    padding-left: 3%;
  }
}
</style>
