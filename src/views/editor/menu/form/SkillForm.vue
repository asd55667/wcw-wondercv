<template>
  <div class="skill-form">
    <base-form @submit="submitForm">
      <template #head-name> 专业技能</template>
      <template #form-content>
        <quill-editor v-model="skill.desc"></quill-editor>
      </template>
    </base-form>
  </div>
</template>

<script>
import BaseForm from './BaseForm'

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

import { createSkill, updateSkill, getSkill } from '@/api'
import { deepCopy } from '@/utils'

export default {
  components: { BaseForm },
  data() {
    return {
      skillPlaceholder: {
        ref: true,
        desc: '',
        update: '',
      },
    }
  },
  computed: {
    ...mapUserState(['info']),
    ...mapResumeState(['isNewForm']),
    skill() {
      if (this.isNewForm) {
        return this.skillPlaceholder
      } else {
        const skill = this.info.skill.filter(item => item.ref)
        return skill.length === 1 ? skill[0] : {}
      }
    },
  },
  methods: {
    async submitForm() {
      let res
      const uid = window.localStorage.getItem('uid')
      if (this.isNewForm) {
        const skill = deepCopy(this.skill)
        skill.update = new Date()
        this.createExperience({ tag: 'skill', item: skill })
        if (this.info.skill.length === 1) {
          res = await createSkill(uid, this.info.skill)
        }
        res = await updateSkill(uid, this.info.skill)
      } else {
        this.updateExperience({ tag: 'skill', item: this.skill })
        res = await updateSkill(uid, this.info.skill)
      }
      console.log(res)
    },
    ...mapUserMutations(['createExperience', 'updateExperience']),
  },
}
</script>

<style lang="less" scoped></style>
