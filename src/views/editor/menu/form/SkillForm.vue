<template>
  <div class="skill-form">
    <base-form>
      <div slot="head-name" class="head-name">专业技能</div>
      <div slot="form-content">
        <quill-editor v-model="skill"></quill-editor>
      </div>
    </base-form>
  </div>
</template>

<script>
import BaseForm from './BaseForm'
export default {
  components: { BaseForm },
  data() {
    return {
      skill:
        '<p>1, 语言</p><p>擅长python，熟悉js，c/c++， 了解java， cuda</p><p>了解常见的设计模式，数据结构，掌握基本的网络编程，数据分析/处理，爬虫</p><p>&nbsp;2.框架</p><p>了解 vue 状态管理 路由 SSR，了解 koa 洋葱模型 cluster多线程</p><p>&nbsp;3. 工具</p><p>熟悉字符界面 vim tmux，熟悉 git版本控制，熟悉 shell 终端常用命令</p>',
    }
  },
}
</script>

<style lang="less" scoped></style>
