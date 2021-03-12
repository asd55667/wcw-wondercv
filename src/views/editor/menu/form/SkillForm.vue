<template>
  <div class="skill-form">
    <base-singular-form form-tag="skill" :form="skill"></base-singular-form>
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
      skillPlaceholder: {
        ref: true,
        desc: '',
        update: new Date(),
      },
    }
  },
  computed: {
    ...mapUserState(['info']),
    ...mapResumeState(['isNewForm']),
    skill() {
      return this.isNewForm ? this.skillPlaceholder : this.info.skill[0]
    },
  },
  created() {
    // console.log(this.skill.desc)
  },
}
</script>

<style lang="less" scoped></style>
