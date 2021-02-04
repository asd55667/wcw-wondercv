<template>
  <div class="project-form">
    <base-plural-form form-tag="project" :form="project"></base-plural-form>
  </div>
</template>

<script>
import BasePluralForm from './BasePluralForm'

import {
  mapState as mapUserState,
  mapGetters as mapUserGetters,
  mapActions as mapUserActions,
  mapMutations as mapUserMutations,
} from '@/store/helper/user'

import {
  mapState as mapResumeState,
  mapGetters as mapResumeGetters,
  mapMutations as mapResumeMutations,
  mapActions as mapResumeActions,
} from '@/store/helper/resume'

export default {
  components: { BasePluralForm },
  data() {
    return {
      projectPlaceholder: {
        ref: true,
        name: { desc: '项目名称', value: '' },
        timespan: { start: '', end: '' },
        attrs: {
          post: { desc: '担任角色', value: '' },
        },
        location: { desc: '所在城市', value: '' },
        desc: '',
        update: '',
      },
    }
  },
  computed: {
    ...mapUserState(['info']),
    ...mapResumeState(['formIdx', 'isNewForm']),
    project() {
      if (this.isNewForm) {
        return this.projectPlaceholder
      }
      return this.info.project[this.formIdx]
    },
  },
}
</script>

<style lang="less" scoped></style>
