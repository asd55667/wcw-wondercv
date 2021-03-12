import Vue from 'vue'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

import { EMPTY_IMG } from '@/utils'
import VueLazyload from 'vue-lazyload'

Vue.use(VueQuillEditor)
Vue.use(VueLazyload, {
  loading: EMPTY_IMG,
  error: EMPTY_IMG,
})
