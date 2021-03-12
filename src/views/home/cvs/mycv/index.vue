<template>
  <div class="my-cv pr">
    <div class="cv-recommend pr">
      <div class="title sb">
        <div class="left">
          <span>简历推荐中</span>
          <span>简历已更新，是否更新推荐中的简历</span>
        </div>
        <router-link :to="{ path: '/account/aciprvy' }" class="setting">
          <span>隐私设置</span>
          <img
            src="https://files.wondercv.com/pc-cvs/%E5%BD%A2%E7%8A%B6%E7%BB%93%E5%90%88%402x.png"
          />
        </router-link>
      </div>
      <div class="usr-info sb">
        <div class="left">
          <img
            src="https://files.wondercv.com/pc/mentor/caseIcon1.png"
            alt=""
          />
          <div class="info">
            <div class="name">吴承炜</div>
            <div class="school">
              <span>上海应用技术大学｜硕士</span>
            </div>
            <div class="date">2020年08月25日 22:18 更新</div>
          </div>
        </div>
        <div class="right">
          <span>更新</span>
        </div>
      </div>
    </div>

    <div class="draft pr">
      <div class="title">
        <div class="left">草稿简历</div>
        <span>共有 1 份草稿简历</span>
      </div>
      <div class="info-wrapper pr">
        <router-link :to="`/cvs/${usrid.split('-')[0]}/editor`" class="info pr">
          <img src="https://photo.wondercv.com/cv_doc@2x.png" alt="" />
          <div class="desc">
            <div class="name">吴承炜</div>
            <div class="tags">
              <el-tag class="tag">中文</el-tag>
              <el-tag class="tag" type="danger">简历评分：87分</el-tag>
              <el-tag class="tag" type="info">程序员模板</el-tag>
            </div>
            <div class="date">最后编辑：10月23日</div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="job-rec">
      <div class="title">
        <div class="left">推荐职位</div>
      </div>
      <div class="content">
        <div class="item" v-for="i in 6" :key="i">
          <div class="job">
            <span class="name">计算机视觉算法工程师</span>
            <span class="salary">15-30K</span>
          </div>
          <div class="requirement">
            <el-tag class="tag" type="info">北京</el-tag>
            <el-tag class="tag" type="info">经验不限</el-tag>
            <el-tag class="tag" type="info">本科</el-tag>
            <el-tag class="tag" type="info">视觉图像算法</el-tag>
            <el-tag class="tag" type="info">深度学习</el-tag>
            <el-tag class="tag" type="info">人工智能</el-tag>
          </div>
          <div class="company">
            <div class="logo">
              <img
                src="https://logo.wondercv.com/companies/da3e4990f0d511eaaa330242ac210003.jpg"
                alt=""
              />
            </div>
            <div class="info">
              <span>太初弈宪</span>
              <span class="vline"></span>
              <span>互联网</span>
              <span class="vline"></span>
              <span>20-99人</span>
            </div>
          </div>
          <div class="job-desc">
            <div class="icon">
              <img
                src="https://files.wondercv.com/cvs-job-pc/%E7%AE%80%E5%8E%86%E6%8E%A8%E8%8D%90%E6%A0%87%E7%AD%BE.png"
                alt=""
              />
            </div>
            <div class="txt">
              该职位与您的简历匹配度为 82%
              <i class="el-icon-question"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="more-job">
        <router-link :to="''">查看更多职位</router-link>
      </div>
    </div>
    <div style="padding-top: 56px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    usrid() {
      const uid = window.localStorage.getItem('uid')
      if (uid) return uid
      else return 'wcw'
    },
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.my-cv {
  width: 900px;
  overflow: hidden;
  top: 0;
  display: flex;
  flex-direction: column;
}
.cv-recommend {
  width: 100%;
  // height: 400px;
  margin: 0;
  padding: 0;
  .title {
    border-radius: 5px;
    .left {
      span:first-child {
        margin-right: 20px;
        font-weight: 600;
        font-size: 16px;
        color: #404040;
      }
      span {
        font-size: 14px;
        color: #9c9c9c;
      }
    }
    .setting {
      display: flex;
      align-items: center;
      color: #9c9c9c;
      span {
        margin-right: 10px;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  .usr-info {
    align-items: flex-end;
    cursor: pointer;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 100px;
        height: 100px;
        background: red;
        margin-right: 25px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100px;
        font-size: 14px;
        color: #9c9c9c;
        .name {
          margin-top: 2px;
        }
        .school {
          font-size: 16px;
          color: #404040;
        }
        .date {
          margin-bottom: 4px;
        }
      }
    }
    .right {
      margin-bottom: 10px;
      margin-right: 30px;
      span {
        padding: 10px 40px;
        text-align: center;
        font-size: 16px;
        border-radius: 30px;
        background: #ff4f4f;
        border: #ff4f4f;
        box-shadow: 0 6px 24px -4px #ffa4a4;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}

.draft {
  margin-top: 20px;
  background: #fff;
  border-radius: 5px;
  .title {
    padding: 20px 30px;
    span {
      color: #9c9c9c;
      margin-left: 11px;
    }
  }
  .info:hover {
    border: none;
    box-shadow: 0 0 20px #ddd;
  }

  .info-wrapper:hover .info::before,
  .info-wrapper:hover .info.info::after {
    display: inline;
  }

  .info::before,
  .info::after {
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .info::before {
    content: '点击进入编辑';
    top: -26%;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    padding: 9px;
    border-radius: 4px;
    background-color: #000;
  }
  .info::after {
    content: '';
    top: -9%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #000;
  }
  .info {
    display: flex;
    align-items: center;
    width: 100%;
    height: 170px;
    padding: 0 32px;
    box-sizing: border-box;
    cursor: pointer;
    z-index: 1;
    img {
      width: 40px;
      height: 48px;
      padding: 48px;
      border: solid 1px #ccc;
      border-radius: 10px;
    }
    .desc {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 144px;
      font-size: 16px;
      margin-left: 30px;
      .name {
        margin-top: 4px;
        color: #404040;
        font-weight: 700;
      }
      .date {
        color: #9c9c9c;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 30px;
        .tag {
          display: flex;
          align-items: center;
          margin-right: 15px;
          border: none;
        }
        .tag:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

.job-rec {
  padding: 20px 30px;
  margin-top: 20px;
  background: #fff;
  border-radius: 5px;
  .content {
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    .item:hover {
      border: none;
      box-shadow: 0 2px 18px 0 #ececec;
    }
    .item {
      margin-top: 15px;
      border: solid 1px #ececec;
      display: flex;
      flex-direction: column;
      padding: 20px;
      box-sizing: border-box;
      width: 400px;
      .job {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
          font-size: 20px;
          font-weight: 700;
        }
        .salary {
          color: red;
        }
      }
      .requirement {
        margin-top: 10px;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        height: 24px;
        .tag {
          margin-right: 5px;
          border: none;
        }
      }
      .company {
        margin-top: 15px;
        padding-bottom: 18px;
        display: flex;
        align-items: center;
        border-bottom: dotted 1px #ececec;
        .logo {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info {
          span {
            color: #9c9c9c;
          }
        }
      }
      .job-desc {
        margin-top: 10px;
        display: flex;
        .icon {
          width: 14px;
          height: 14px;
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .txt {
          color: #9c9c9c;
        }
      }
    }
  }
  .more-job {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 40px;
    border: 1px solid #ff4f4c;
    font-size: 14px;
    border-radius: 2px;
    margin: 40px auto 32px;
    background: transparent;
    a {
      color: #ff4f4c;
    }
  }
}

.sb {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  padding: 20px 30px;
  border-bottom: solid 1px #f5f5f7;
}

.title {
  display: flex;
  align-items: center;
  font-size: 16px;
  .left {
    color: #404040;
    font-weight: 600;
  }
}

.vline {
  display: inline-block;
  background: #cfcfcf;
  width: 1px;
  height: 9px;
  margin: 0 6px;
}
</style>
