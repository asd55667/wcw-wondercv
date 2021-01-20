<template>
  <div class="form-wrapper">
    <div class="base-form pr">
      <div class="title pa">
        <div class="back" @click="switchTab(1)">
          <i class="el-icon-arrow-left"></i>
          <span>返回</span>
        </div>
        <div class="head-name">
          <slot name="head-name" class="name">表单名</slot>
          <i v-if="editable" class="el-icon-edit"></i>
        </div>
        <div class="save">保存</div>
      </div>
      <div class="form-content pr">
        <slot name="form-content">
          <div class="desc">表单内容</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState as mapResumeState,
  mapGetters as mapResumeGetters,
  mapMutations as mapResumeMutations,
  mapActions as mapResumeActions,
} from '@/store/helper/resume'

export default {
  props: {
    editable: { type: Boolean, default: true },
  },
  methods: {
    ...mapResumeMutations(['switchTab']),
  },
}
</script>

<style lang="less" scoped>
.form-wrapper {
  height: var(--cvHeight);
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.04);
}

.base-form {
  height: 100vh;
  overflow-y: scroll;
  background: #fff;
  overflow-y: auto;
  border-radius: 4px 4px 0 0;
  box-sizing: border-box;
  padding-bottom: 68px;
}
.title {
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px 0;
  box-sizing: border-box;
  color: #404040;
  border-radius: 4px 4px 0 0;
  .back {
    font-size: 14px;
    i {
      margin-right: 3px;
    }
    span:hover {
      cursor: pointer;
    }
  }
  .name {
    font-size: 16px;
  }
  .save {
    color: #f64;
    font-weight: 500;
    cursor: pointer;
  }
}

.head-name {
  display: flex;
  align-items: center;
  i {
    font-size: 16px;
    color: #ccc;
    margin-left: 5px;
  }
}

.form-content {
  overflow: scroll;
  margin-top: 70px;
  padding: 0 28px;
  color: #404040;
}
</style>
