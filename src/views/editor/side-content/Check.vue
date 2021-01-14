<template>
  <div class="check-wrapper pr">
    <div class="info-main">
      <div class="info-component">
        <div class="model check">
          <div class="check-title">
            <div class="score-content">
              <span class="score-number">85</span>
              <span class="score-txt">分</span>
            </div>
            <div class="check-btn" @click="scanCV">智能检查</div>
          </div>
          <div class="check-progress">
            <div style="width:85%;"></div>
          </div>
          <div class="check-msg">
            <span
              >你的简历已经较为完善，可以继续智能优化，或使用导师辅导，定制匹配岗位要求的满分简历！</span
            >
            <router-link to="/jobs" class="jobs-btn">去看职位</router-link>
          </div>
        </div>

        <div class="optimize-main model suggest">
          <div class="optimize-content show">
            <div class="suggest-content">
              <div
                class="suggest-item"
                v-for="item in suggests"
                :key="item.name"
              >
                <div class="name">
                  <img :src="item.img" class="logo" />
                  <span>{{ item.name }} </span>
                  <span>({{ item.num }})</span>
                </div>
                <ul class="content">
                  <li class="list" v-for="l in item.txt" :key="l">
                    <span>{{ l }}</span>
                    <i class="el-icon-question wenhao">
                      <div class="tooltip">
                        <a href="https://www.wondercv.com/blog/15lafaq6"
                          >简历上到底需要写哪些信息？</a
                        >
                      </div>
                    </i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="guide-code-container flex-center">
              <img
                src="https://files.wondercv.com/appDownloadIcon.png"
                alt=""
              />
              <section class="code-content">
                <span class="code-title">扫码下载 超级简历APP</span>
                <span class="code-desc"
                  >简历在线修改，导出方便快捷，还有面试攻略等你挖掘</span
                >
              </section>
            </div>
          </div>
        </div>
      </div>
      <!-- teacher  -->
      <router-link to="/service" class="teacher model">
        <div class="title">超级简历辅导</div>
        <img
          src="https://files.wondercv.com/mentor-img.png"
          class="teacher-img"
        />
        <div class="teacher-txt">
          业界最顶级的导师辅导，拥有全球名企实战经验，简历修改后获得
          <b>2倍以上面试邀请，</b>帮你拿到梦想Offer
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      suggests: [
        {
          name: '工作经历',
          img: 'https://files.wondercv.com/cv-check/check-work-1.png',
          num: 1,
          txt: [
            '工作经历应该作为简历的主体内容，目前这部分篇幅和其他内容相比较少，建议再增加一些工作经历内容，或者删减其他部分内容',
          ],
        },
        {
          name: '专业细节',
          img: 'https://files.wondercv.com/cv-check/check-global-1.png',
          num: 2,
          txt: [
            '经历没有按时间倒序排列，建议使用简历上方编辑栏中的【自动排序】调整经历顺序',
            '部分经历描述的分段过多，建议每个经历最多不超过6个小段',
          ],
        },
        {
          name: '其他模块',
          img: 'https://files.wondercv.com/cv-check/check-other-1.png',
          num: 2,
          txt: [
            '建议添加技能描述，以增强竞争力',
            '建议添加语言能力描述，以增强竞争力',
          ],
        },
      ],
    }
  },
  methods: {
    scanCV() {
      this.$store.commit('scanning')
      setTimeout(() => {
        this.$store.commit('scanning')
      }, 4000)
    },
  },
}
</script>

<style lang="less" scoped>
.check-wrapper {
  width: 324px;
  border-top: 12px solid #fff;
  border-bottom: 12px solid #fff;
  box-sizing: border-box;
  border-radius: 4px;
  height: var(--cvHeight);
}

.info-main {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

.info-component {
  padding-top: 164px;
  width: 100%;
  box-sizing: content-box;

  a {
    color: #7e8c8d;
  }
}

.check {
  background: #fff;
  top: 0px;
  position: absolute;
  padding: 8px 24px 20px;
  width: 324px;
  box-sizing: border-box;
  z-index: 8;
  .check-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .score-content {
      color: #f64;
      line-height: 32px;
      font-weight: 600;
      .score-number {
        display: inline-block;
        font-size: 32px;
        margin-right: 2px;
      }
    }
    .check-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90px;
      height: 30px;
      color: #f64;
      background-color: #fff;
      border: 1px solid #f64;
      font-size: 14px;
      border-radius: 16px;
    }
    .check-btn:hover {
      outline: none;
      cursor: pointer;
      color: #fff;
      background: #f64;
    }
  }
  .check-progress {
    height: 5px;
    border-radius: 3px;
    background: #e8e8e8;
    margin-top: 16px;
    div {
      height: 100%;
      border-radius: 3px;
      background: #f64;
    }
  }
  .check-msg {
    margin-top: 16px;
    color: #404040;
    line-height: 20px;
    font-size: 14px;
    min-height: 10px;
    .jobs-btn {
      color: #f64;
      text-decoration: underline;
    }
  }
}

.suggest {
  height: 516.65px;
  overflow: scroll;
  border-radius: 0 0 4px 4px;
  box-sizing: border-box;
}

.optimize-content {
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-bottom: 16px;
  margin-top: 16px;
  position: relative;
  .suggest-content {
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
    .suggest-item {
      margin-bottom: 20px;
      .name {
        font-size: 14px;
        color: #404040;
        margin-bottom: 16px;
        font-weight: 600;
        display: flex;
        align-items: center;
        .logo {
          width: 28px;
          height: 28px;
          border-radius: 3px;
          margin-right: 12px;
        }
        img {
          display: block;
        }
      }
      .content {
        .list {
          font-size: 14px;
          color: #404040;
          line-height: 21px;
          margin-top: 16px;
          cursor: pointer;
          position: relative;
          .wenhao {
            display: inline-block;
            padding-left: 4px;
            vertical-align: middle;
            color: #cfcfcf;
            margin-bottom: 1px;
            .tooltip {
              display: none;
            }
          }
          span:hover {
            color: #f64;
          }
          .wenhao:hover {
            .tooltip {
              display: block;
              width: calc(100% + 16px);
              background: #505667;
              padding: 14px 16px;
              border-radius: 4px;
              transform: translateY(16px);
              a {
                color: #fff;
                text-decoration: underline;
                cursor: pointer;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }

  .guide-code-container {
    width: calc(100% - 48px);
    padding: 24px 30px;
    margin: -10px auto 14px;
    border-radius: 4px;
    background-color: rgba(78, 85, 103, 0.04);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    img {
      box-sizing: border-box;
      width: 72px;
      height: 72px;
      margin-right: 20px;
    }
    .code-content {
      display: flex;
      flex-direction: column;
      .code-title {
        color: #414653;
        line-height: 22px;
        white-space: nowrap;
        margin-bottom: 4px;
      }
      .code-desc {
        color: #505667;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}

.model {
  border-bottom: 6px solid #f9f9f9;
  margin-bottom: 0 !important;
}
.teacher {
  display: block;
  background: #fff;
  padding: 22px 20px 10px;
  cursor: pointer;
  border-radius: 4px 4px 0 0;
  margin-top: 14px;
  box-sizing: border-box;
  .title {
    color: #404040;
    font-weight: 700;
    margin-bottom: 24px;
  }
  .teacher-img {
    width: 100%;
  }
  .teacher-txt {
    font-size: 13px;
    margin-top: 13px;
    line-height: 23px;
    color: #606060;
    b {
      color: #f64;
    }
  }
}
</style>
