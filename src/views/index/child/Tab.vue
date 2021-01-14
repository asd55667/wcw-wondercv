<template>
  <div>
    <div class="tab-content">
      <div class="tab-bottom">
        <swiper
          class="swiper"
          height="450px"
          trigger="click"
          arrow="never"
          loop
        >
          <swiper-item
            class="swiper-item"
            v-for="item in banners"
            :key="item.id"
            :label="item"
          >
            <div class="tab-bottom-left">
              <a href="">
                <img
                  src="https://files.wondercv.com/homepage-pc/tab_1.png"
                  alt
                />
              </a>
            </div>
            <div class="tab-bottom-right">
              <div class="tips">{{ item.id }} 更专业</div>
              <div class="info">
                <span>由人力资源专家</span>
                <span>设计并推荐</span>
              </div>
              <ul class="desc">
                <li>
                  涵盖 15+ 大行业，300+ 岗位，5000+ 简历模板，1,600,000+
                  字简历范文，满足全方位简历需求。
                </li>
                <li>
                  所有模板均由专业 HR
                  挑选，确保格式、排版、措辞符合行业规范，简历通过率更有保障。
                </li>
              </ul>
              <div class="btn">
                立即制作专业简历
              </div>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'
export default {
  components: { Swiper, SwiperItem },
  data() {
    return {
      banners: [
        {
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
        },
        {
          id: 2,
          title: '2. 专业模板',
          subtitle: '由人力资源专家设计并推荐',
          tips: '更专业',
          info: ['由人力资源专家', '设计并推荐'],
          desc: [
            '涵盖 15+ 大行业，300+ 岗位，5000+ 简历模板，1,600,000+字简历范文，满足全方位简历需求。',
            '所有模板均由专业 HR挑选，确保格式、排版、措辞符合行业规范，简历通过率更有保障。',
          ],
          btn: '立即制作专业简历',
          src: 'https://files.wondercv.com/homepage-pc/%E7%AE%AD%E5%A4%B4.png',
        },
        {
          id: 3,
          title: '3. 专业模板',
          subtitle: '由人力资源专家设计并推荐',
          tips: '更专业',
          info: ['由人力资源专家', '设计并推荐'],
          desc: [
            '涵盖 15+ 大行业，300+ 岗位，5000+ 简历模板，1,600,000+字简历范文，满足全方位简历需求。',
            '所有模板均由专业 HR挑选，确保格式、排版、措辞符合行业规范，简历通过率更有保障。',
          ],
          btn: '立即制作专业简历',
          src: 'https://files.wondercv.com/homepage-pc/%E7%AE%AD%E5%A4%B4.png',
        },
        {
          id: 4,
          title: '4. 专业模板',
          subtitle: '由人力资源专家设计并推荐',
          tips: '更专业',
          info: ['由人力资源专家', '设计并推荐'],
          desc: [
            '涵盖 15+ 大行业，300+ 岗位，5000+ 简历模板，1,600,000+字简历范文，满足全方位简历需求。',
            '所有模板均由专业 HR挑选，确保格式、排版、措辞符合行业规范，简历通过率更有保障。',
          ],
          btn: '立即制作专业简历',
          src: 'https://files.wondercv.com/homepage-pc/%E7%AE%AD%E5%A4%B4.png',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.tab-shadow {
  background-color: #fff;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
}

.tab-content {
  position: relative;
  top: -70px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 0;
  width: 1204px;
  height: 700px;
  // height: 100%;
  background-color: #fff;
  border-radius: 12px 12px 0 0;
  z-index: 1;
  .tab-bottom {
    // display: flex;
    // flex-direction: row;
    // align-items: flex-start;
    // justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 29px;
    .swiper {
      width: 100%;
      .swiper-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tab-bottom-left {
          width: 670px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .tab-bottom-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 440px;
          .tips {
            color: #ff4f4c;
            background-color: #ffe6e6;
            width: 68px;
            height: 24px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 30px;
          }
          .info {
            display: flex;
            flex-direction: column;
            font-size: 28px;
            font-weight: 400;
            color: #404040;
            line-height: 40px;
            margin-bottom: 30px;
          }
          ul {
            width: 440px;
            font-size: 15px;
            font-weight: 400;
            color: #959ba3;
            line-height: 23px;
            padding-left: 20px;
            margin-bottom: 14px;
            li {
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
}
.tab-block {
  position: absolute;
  top: 430px;
  right: 0;
  width: 183px;
  height: 184px;
  z-index: 2;
  background: url(https://files.wondercv.com/homepage-pc/block-right.png)
    no-repeat 0 0/100%;
}
</style>
