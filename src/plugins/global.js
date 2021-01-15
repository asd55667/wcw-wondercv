import Vue from 'vue'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor)
;(function(jsPDFAPI) {
  var callAddFont = function() {
    var font =

    this.addFileToVFS('FZLTCXHJW-normal.ttf', font)
    this.addFont('FZLTCXHJW-normal.ttf', 'FZLTCXHJW', 'normal')
  }
  window.jspdf.jsPDF.API.events.push(['addFonts', callAddFont])
})(window.jspdf.jsPDF.API)