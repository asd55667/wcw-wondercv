<template>
  <div>
    <base-form @submit="submitForm">
      <template #head-name> {{ tag2name[formTag] }}</template>
      <template #form-content>
        <quill-editor v-model="form.desc"></quill-editor>
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

import { createSingular, updateSingular } from '@/api'

export default {
  components: { BaseForm },

  props: {
    formTag: {
      type: String,
    },
    // placeholder or store
    form: {
      type: Object,
    },
  },
  data() {
    return {
      tag2name: {
        skill: '专业技能',
        summary: '个人总结',
      },
    }
  },
  methods: {
    async submitForm(uid, info, isNewForm) {
      var { form, formTag } = this
      this.updateExperience({ tag: formTag, item: form })

      if (isNewForm && info[formTag].length === 1) {
        return await createSingular(uid, formTag, info[formTag])
      }
      return await updateSingular(uid, formTag, info[formTag])
    },
    ...mapUserActions(['updateExperience']),
  },
}
</script>

<style></style>
