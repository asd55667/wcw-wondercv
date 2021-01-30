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
import { deepCopy } from '@/utils'

export default {
  components: { BaseForm },

  props: {
    formTag: {
      type: String,
    },
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
    ...mapUserState(['info']),
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
    ...mapUserState(['info']),
    ...mapResumeState(['isNewForm', 'emptyInfo']),
  },
  methods: {
    async submitForm() {
      let res
      const uid = window.localStorage.getItem('uid')
      if (this.isNewForm) {
        const form = deepCopy(this.form)
        form.update = new Date()
        this.createExperience({ tag: this.formTag, item: form })

        if (this.info[this.formTag].length === 1) {
          res = await createPlural(uid, this.formTag, this.info[this.formTag])
        }
        res = await updatePlural(uid, this.formTag, this.info[this.formTag])
      } else {
        console.log(this.form.update)
        this.updateExperience({ tag: this.formTag, item: this.form })
        res = await updatePlural(uid, this.formTag, this.info[this.formTag])
      }
      console.log(res)
    },
    ...mapUserMutations(['createExperience', 'updateExperience']),
  },
  created() {
    // console.log(this.tag2name[this.formTag])
    // console.log('form', this.info[this.formTag])
  },
}
</script>

<style></style>
