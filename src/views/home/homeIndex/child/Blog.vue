<template>
  <div>
    <body-wrapper :title="title">
      <div class="blog-content" slot="body">
        <div class="topic">
          <div class="recommend-content">
            <div class="recommend-left">
              <a href="" class="topic-title">精选推荐</a>
              <a href="" class="recommend-left-item" v-for="i in 2" :key="i">
                <img
                  src="https://photo.wondercv.com/uploads/page/middle_title_image/9287/title_photo-1485988412941-77a35537dae4.jpg"
                  alt
                />
                <div class="recommend-left-info">
                  <div class="recommend-left-title">
                    大学毕业生优秀简历怎么写？
                  </div>
                  <div class="recommend-left-msg">
                    对于大学生来说，毕业之后想要找到合适的工作，必须要拥有一份优质的简历，这样才能快速获得HR的关注，比起其他人更快一步获得面试机会。那么对于大学生来说，应该怎样做出一份优质...
                  </div>
                </div>
              </a>
            </div>
            <div class="recommend-right">
              <a href="" class="recommend-title"
                >最新简历攻略 <span>>></span></a
              >
              <a class="recommend-list">
                <a class="recommend-msg" v-for="item in middle" :key="item">
                  {{ item }}
                </a>
              </a>
            </div>
            <div class="recommend-right">
              <a href="" class="recommend-title">最新简历模板<span>>></span></a>
              <a class="recommend-list">
                <a class="recommend-msg" v-for="item in right" :key="item">
                  {{ item }}
                </a>
              </a>
            </div>
          </div>
        </div>
        <div class="topic topic-imgs">
          <a href="" class="topic-title">热门话题</a>
          <div class="topic-content">
            <a
              href="https://files.wondercv.com/homepage-pc/_%E7%83%AD%E9%97%A8%E8%AF%9D%E9%A2%981_.png"
              class="topic-menu"
              v-for="i in 4"
              :key="i"
            >
              <img
                src="https://files.wondercv.com/homepage-pc/_%E7%83%AD%E9%97%A8%E8%AF%9D%E9%A2%981_.png"
                alt
              />
              <span class="topic-menu-txt">简历经验 | 如何写出简历干货</span>
            </a>
          </div>
        </div>
      </div>
    </body-wrapper>
  </div>
</template>

<script>
import bodyWrapper from './Body.vue'
export default {
  components: {
    bodyWrapper,
  },
  data() {
    return {
      title: {
        special: '好攻略',
        content: '，助力求职顺利',
        desc: '简历 / 面试 / 跳槽 / 职场发展',
      },
      middle: [
        '写好简历必须注意这三点',
        '大学毕业生优秀简历怎么写？',
        '大学生找实习，如何写出好简历？',
        '2020应届毕业生春招，如何找到一份合适的工作？',
        '应届生大学四年空白咋写简历？',
        '20届经验分享：腾讯、百度、字节...我们是怎么拿到大厂offer的',
        '优质的应届生简历怎么写？',
        '想要快速找到工作，需要注意哪几点？',
        '春招期间，写好一份优质简历要注意哪些方面？',
      ],
      right: [
        '2020春招简历模板',
        '互联网春招简历模板',
        '考研复试简历模板',
        '2020考研简历模板',
        '垂类产品运营简历模板',
        'B2C产品运营简历模板',
        '内容产品运营简历模板',
        '互联网产品运营简历模板',
        '初级销售运营（适合应届生）简历模板',
      ],
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.blog-content {
  .topic {
    width: 1160px;
    margin: auto;
    .recommend-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 60px;
      margin-bottom: 30px;
      .recommend-left {
        width: 610px;
        .recommend-left-item {
          display: flex;
          align-items: center;
          img {
            width: 158px;
            height: 118px;
            border-radius: 6px 0 0 6px;
            flex: none;
          }

          .recommend-left-info {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            height: 118px;
            padding: 16px 19px 16px 20px;
            border: 1px solid #ececec;
            border-left: none;
            border-radius: 0 6px 6px 0;
            .recommend-left-title {
              font-size: 18px;
              line-height: 1;
              color: #202329;
            }
            .recommend-left-msg {
              font-size: 14px;
              font-weight: 400;
              color: #9c9c9c;
              line-height: 20px;
              margin-top: 8px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
          }
        }
        .recommend-left-item:last-child {
          margin-top: 20px;
        }
      }
      .recommend-right {
        width: 225px;
        .recommend-list {
          display: flex;
          flex-direction: column;
          .recommend-msg {
            display: block;
            width: 100%;
            margin-bottom: 9px;
            font-size: 14px;
            line-height: 20px;
            color: #606060;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: keep-all;
            white-space: nowrap;
          }
          .recommend-msg:hover {
            text-decoration: underline;
            color: red;
          }
        }
      }
    }
  }
  .topic-imgs {
    .topic-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;

      .topic-menu {
        position: relative;
        display: block;
        width: 262px;
        height: 125px;
        border-radius: 6px;
        .topic-menu-txt {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 36px;
          background: rgba(0, 0, 0, 0.5);
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          line-height: 36px;
          text-align: center;
          border-radius: 0 0 6px 6px;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }
      }
    }
  }
}

.topic-title,
.recommend-title {
  margin-bottom: 20px;
  display: block;
  color: #9c9c9c;
}
.recommend-title {
  display: flex;
  justify-content: space-between;
}
.recommend-title:hover {
  text-decoration: underline;
}
</style>
