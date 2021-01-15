<template>
  <div class="editor-wrapper">
    <EditorHeader></EditorHeader>

    <div class="index-main">
      <EditorMenu></EditorMenu>
      <div class="resume-view">
        <ResumeView></ResumeView>
      </div>
    </div>
  </div>
</template>

<script>
import EditorHeader from './header'
import EditorMenu from './menu'
import ResumeView from './resume'

export default {
  components: {
    EditorHeader,
    EditorMenu,
    ResumeView,
  },
}
</script>

<style lang="less" scoped>
.editor-wrapper {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 72px;
}

.index-main {
  width: 1196px;
  margin: auto;
  display: flex;
  justify-content: center;
  height: var(--cvHeight);
}

.resume-view {
  margin-left: 16px;
  max-width: 720px;
  min-width: 450px;
  transition: all 0.3s ease;
  background: #f9f9f9;
  flex: 1;
  transform-origin: 0 0;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.04);
}
</style>
