<template>
  <div>
    <base-form @submit="submitForm">
      <template #head-name>{{ tag2name[formTag] }}</template>
      <template #form-content>
        <el-form :model="form">
          <el-form-item prop="name" :label="form.name.desc">
            <el-input v-model="form.name.value"></el-input>
          </el-form-item>
          <el-form-item
            v-if="!attrs.post"
            prop="post"
            :label="form.attrs.post.desc"
          >
            <el-input v-model="form.attrs.post.value"></el-input>
          </el-form-item>
          <div class="form-wrap">
            <el-form-item
              class="item"
              v-for="(attr, name) in attrs"
              :key="name"
              :prop="name"
              :label="attr.desc"
            >
              <el-input v-model="attr.value"></el-input>
            </el-form-item>

            <el-form-item
              class="item"
              prop="location"
              :label="form.location.desc"
            >
              <el-input v-model="form.location.value"></el-input>
            </el-form-item>

            <el-form-item class="item" prop="start" label="起始时间">
              <el-input v-model="form.timespan.start"></el-input>
            </el-form-item>
            <el-form-item class="item" prop="end" label="结束时间">
              <el-input v-model="form.timespan.end"></el-input>
            </el-form-item>
          </div>

          <el-form-item prop="desc">
            <div>经历描述</div>
            <quill-editor v-model="form.desc"></quill-editor>
          </el-form-item>
        </el-form>
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

import { createPlural, updatePlural } from '@/api'
import { deepCopy, forEachValue } from '@/utils'

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
        edu: '教育经历',
        job: '实习经历',
        project: '项目经历',
      },
    }
  },
  computed: {
    attrs() {
      let ret = {}
      //   console.log(Object.keys(this.form.attrs).length % 2)
      for (let attr in this.form.attrs) {
        if (attr === 'post') continue
        ret[attr] = this.form.attrs[attr]
      }
      if (Object.keys(this.form.attrs).length % 2 !== 0) {
        ret['post'] = this.form.attrs['post']
      }
      return ret
    },
  },
  methods: {
    async submitForm(uid, info, isNewForm) {
      const { form, formTag } = this
      // this.clearAttr(form)
      this.updateExperience({ tag: formTag, item: form })

      if (isNewForm) {
        if (info[formTag].length === 1) {
          return await createPlural(uid, formTag, info[formTag])
        }
      }
      return await updatePlural(uid, formTag, info[formTag])
    },
    ...mapUserActions(['updateExperience']),
  },
}
</script>

<style></style>
