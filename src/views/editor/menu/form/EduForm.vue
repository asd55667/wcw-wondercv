<template>
  <div class="edu-wrap">
    <base-plural-form form-tag="edu" :form="edu"></base-plural-form>
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
    edu() {
      if (this.isNewForm) {
        return this.emptyInfo.edu
      }
      return this.info.edu[this.formIdx]
    },
  },
  created() {
    // console.log(this.edu)
  },
}
</script>

<style></style>
