<template>
  <div>
    <h1>demo</h1>
    <swiper
      class="swiper"
      height="150px"
      trigger="click"
      indicator-position="outside"
      arrow="always"
      loop
      :is-indicator-top="true"
    >
      <swiper-item class="item" v-for="item in 4" :key="item" :label="banners">
        {{ item }}
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      banners: {
        id: 1,
        title: '1. 专业模板',
        subtitle: '由人力资源专家设计并推荐',
        tips: '更专业',
        info: ['由人力资源专家', '设计并推荐'],
        desc: [
          '涵盖 15+ 大行业，300+ 岗位，5000+ 简历模板，1,600,000+字简历范文，满足全方位简历需求。',
          '所有模板均由专业 HR挑选，确保格式、排版、措辞符合行业规范，简历通过率更有保障。',
        ],
        btn: '立即制作专业简历',
        src: 'https://files.wondercv.com/homepage-pc/%E7%AE%AD%E5%A4%B4.png',
        tab: 'https://files.wondercv.com/homepage-pc/tab_icon_1.png',
      },
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 80%;
  background: red;
  color: #fff;
}

.app {
  display: flex;
  justify-content: center;
}
.code {
  background: red;
  width: 100px;
}
</style>
