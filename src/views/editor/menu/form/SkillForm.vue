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

import { createSkill, updateSkill, getSkill } from '@/api'

export default {
  components: { BaseForm },
  data() {
    return {}
  },
  computed: {
    ...mapUserState(['info']),
    skill() {
      const skill = this.info.skill.filter(item => item.ref)
      return skill ? skill[0] : ''
    },
  },
  methods: {
    async submitForm() {
      let res

      if (this.info.skill.length == 1) {
        const uid = window.localStorage.getItem('uid')
        // console.log(this.info.skill);
        res = await updateSkill(uid, this.info.skill)
        // res = await getSkill(uid)
      } else {
        const skill = {
          ref: true,
          desc: this.skill,
          update: new Date(),
        }
        this.info.skill.push(skill)
        res = await createSkill(this.info.skill)
      }
    },
  },
  created() {
    console.log(this.info.skill.length)
  },
}
</script>

<style lang="less" scoped></style>
