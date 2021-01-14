<template>
  <div>
    <div class="title-wrapper" slot="title">
      <a href="" style="color:#7e8c8d;">
        <h2 class="title">
          <span class="special">{{ title.special }}</span
          >{{ title.content }}
        </h2>
        <p class="desc">{{ title.desc }}</p>
      </a>
    </div>
    <slot name="body">slot</slot>
    <slot name="block"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      special: '',
      content: '',
      desc: '',
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.title-wrapper {
  text-align: center;
  .title {
    font-size: 48px;
    font-weight: 600;
    color: #404040;
    line-height: 67px;
    margin-bottom: 0;
    .special {
      color: #f64;
      font-weight: 600;
    }
  }
  .desc {
    margin-top: 0;
    font-size: 22px;
    font-weight: 400;
    color: #9c9c9c;
    line-height: 33px;
    text-align: center;
  }
}
</style>
