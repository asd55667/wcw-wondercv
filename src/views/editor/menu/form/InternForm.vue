<template>
  <div class="intern-form">
    <base-plural-form form-tag="job" :form="intern"></base-plural-form>
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
  computed: {
    ...mapUserState(['info']),
    ...mapResumeState(['formIdx', 'emptyInfo', 'isNewForm']),
    intern() {
      if (this.isNewForm) {
        return this.emptyInfo.job
      }
      return this.info.job[this.formIdx]
    },
  },
}
</script>

<style lang="less" scoped></style>
