<template>
  <div class="job-form">
    <base-plural-form form-tag="job" :form="job"></base-plural-form>
  </div>
</template>

<script>
import BasePluralForm from './components/BasePluralForm'

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
      jobPlaceholder: {
        ref: true,
        name: { desc: '公司名称', value: '' },
        timespan: { start: '', end: '' },
        attrs: {
          post: { desc: '职位名称', value: '' },
          department: { desc: '所在部门', value: '' },
        },
        location: { desc: '所在城市', value: '' },
        desc: '',
        update: new Date(),
      },
    }
  },
  computed: {
    ...mapUserState(['info']),
    ...mapResumeState(['formIdx', 'isNewForm']),
    job() {
      return this.isNewForm ? this.jobPlaceholder : this.info.job[this.formIdx]
    },
  },
  created() {
    // console.log(this.job.desc)
  },
}
</script>

<style lang="less" scoped></style>
