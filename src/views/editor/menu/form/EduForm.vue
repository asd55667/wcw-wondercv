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
  data() {
    return {
      eduPlaceholder: {
        ref: true,
        name: { desc: '学校名称', value: '' },
        timespan: { start: '', end: '' },
        attrs: {
          post: { desc: '所学专业', value: '' },
          scholar: { desc: '学历', value: '' },
          department: { desc: '所在学院', value: '' },
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
    edu() {
      if (this.isNewForm) {
        return this.eduPlaceholder
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
