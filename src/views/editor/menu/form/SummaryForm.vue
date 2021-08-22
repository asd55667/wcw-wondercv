<template>
  <div class="summary-form">
    <base-singular-form form-tag="summary" :form="summary"></base-singular-form>
  </div>
</template>

<script>
import BaseSingularForm from './components/BaseSingularForm'

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
  components: { BaseSingularForm },
  data() {
    return {
      summaryPlaceholder: {
        ref: true,
        desc: '',
        update: new Date(),
      },
    }
  },
  computed: {
    ...mapUserState(['info']),
    ...mapResumeState(['isNewForm']),
    summary() {
      return this.isNewForm ? this.summaryPlaceholder : this.info.summary[0]
    },
  },
}
</script>

<style lang="less" scoped></style>
