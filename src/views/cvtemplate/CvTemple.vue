<template>
  <div class="template-wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="''">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="'/template'">
        简历模版
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="search-wrapper">
      <el-input
        placeholder="搜索简历模板"
        v-model="queryInfo.query"
        class="inp"
      >
        <el-button class="btn" slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="theme-wrapper">
      <div class="theme-title">专题简历</div>
      <div class="theme">
        <router-link
          :to="'/template'"
          class="theme-item"
          v-for="i in 4"
          :key="i"
        >
          <img src="https://files.wondercv.com/template/banner_1.png" alt />
        </router-link>
      </div>
    </div>
    <div class="entry-tabs">
      <span
        :class="['entry', tab.id === isActive ? 'active' : '']"
        v-for="tab in entryTabs"
        :key="tab.id"
        @click="switchTab(tab.id)"
      >
        {{ tab.entry }}
      </span>
    </div>
    <div class="templ-content">
      <div class="tags">
        <div class="tag-item" v-for="tag in tags[isActive - 1]" :key="tag">
          {{ tag }}
        </div>
      </div>
      <div class="templ-list">
        <div
          class="templ-item"
          v-for="i in 8"
          :key="i"
          @mouseenter="coverd = i"
          @mouseleave="coverd = -1"
        >
          <img
            class="templ-img"
            src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c6d424f0-d7d1-11ea-a54c-47d0975e9829.png"
            alt
          />
          <div class="bottom">
            <div class="name">
              <img
                class="member"
                src="https://files.wondercv.com/pc/nuxt/member.png"
                alt=""
              />
              <span>2021秋招简历模板</span>
            </div>
            <div class="info">
              <div class="txt">免费下载</div>
              <div class="count">198131人使用</div>
            </div>
          </div>
          <div
            class="cover"
            :style="`display: ${i === coverd ? 'inline' : 'none'}`"
          >
            <router-link to="abc" class="look">查看模板</router-link>
            <div class="bottom">
              <div class="hover-txt">
                经典工作求职简历模板，适合各行业求职者参考，包含专业简历描述 |
                经典求职简历模板
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-pagination
        class="pages"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pangenum"
        :page-size="queryInfo.pagesize"
        background
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
    <foot-wrap :logo="{ l: true }"></foot-wrap>
  </div>
</template>

<script>
import footWrap from '../common/Footer.vue'
export default {
  components: {
    footWrap,
  },

  data() {
    return {
      queryInfo: {
        query: '',
        pangenum: 1,
        pagesize: 8,
        total: 0,
      },
      entryTabs: [
        { entry: '推荐', id: 1 },
        { entry: '热门', id: 2 },
        { entry: '行业', id: 3 },
        { entry: '职位', id: 4 },
        { entry: '高校', id: 5 },
      ],
      tags: [[], [1], [1, 2], [1, 2, 3, 4], [1]],
      isActive: 1,
      total: 1000,
      coverd: -1,
    }
  },
  methods: {
    switchTab(idx) {
      // console.log(this.isActive, idx)
      this.isActive = idx
    },

    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
    },
  },
}
</script>

<style lang="less" scoped>
.template-wrapper {
  width: 1196px;
  margin: auto;
}
.search-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  .inp {
    width: 900px;
    padding-bottom: 18px;
    // border-radius: 4px;
    input {
      background: #ccc;
    }
    .btn {
      background-color: #ff6644;
      color: #fff;
      text-align: center;
      border-radius: 0 4px 4px 0px;
      padding: 13px 20px;
      padding-right: 21px;
      cursor: pointer;
    }
  }
}
.theme-wrapper {
  // position: relative;
  margin-bottom: 32px;
  .theme-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    margin-bottom: 20px;
    color: #404040;
  }
  .theme {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .theme-item {
      cursor: pointer;
      img {
        width: 90%;
        height: 100%;
      }
    }
    .theme-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.18);
    }
  }
}

.entry-tabs {
  color: #606060;
  padding-bottom: 15px;
  .entry {
    position: relative;
    font-size: 20px;
    margin-right: 20px;
    padding-bottom: 15px;
    cursor: pointer;
  }
}
.templ-content {
  position: relative;
  width: 1196px;
  display: flex;
  flex-direction: column;
  margin: 24px auto 48px;
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 12px;
    align-items: center;
    .tag-item {
      padding: 4px 20px;
      background: red;
      border-radius: 15px;
      color: #606060;
      margin-bottom: 12px;
      margin-right: 12px;
      cursor: pointer;
    }
  }
  .templ-list {
    display: flex;
    flex-wrap: wrap;
    // width: 1196px;
    // justify-content: space-between;
    align-items: center;

    .templ-item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 280px;
      margin-right: 25px;
      margin-bottom: 24px;
      .templ-img {
        display: block;
        width: 100%;
      }
      .bottom {
        position: absolute;
        width: 100%;
        height: 96px;
        background: #fff;
        left: 0;
        bottom: 0;
        z-index: 0;
        padding: 18px 24px;
        box-shadow: 0 -4px 20px 0 hsla(0, 0%, 69.8%, 0.12);
        color: #404040;
        font-size: 13px;
        box-sizing: border-box;
        .name {
          display: flex;
          align-items: center;
          line-height: 30px;
          width: 100%;
          font-size: 15px;
          font-weight: 600;

          .member {
            margin-right: 6px;
            width: 28x;
            height: 14px;
          }
        }
        .info {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          font-size: 12px;
          .txt {
            color: #f64;
          }
          .count {
            color: #606060;
          }
        }
      }
      .cover {
        position: absolute;
        display: none;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        top: 0;
        left: 0;
        z-index: 1;
        cursor: pointer;
        .look {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 115px;
          height: 34px;
          background: #f64;
          border: #f64;
          border-radius: 18px;
          font-weight: 400;
          margin: 140px auto 0;
          font-size: 14px;
          color: #fff;
          letter-spacing: 1px;
        }
        hover-txt {
          height: 60px;
          overflow-y: hidden;
          color: #404040;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
    .templ-item:nth-child(4n) {
      margin-right: 0;
    }
  }
  .pages {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
    padding-bottom: 24px;
  }
}

.active::after {
  content: '';
  display: block;
  width: 16px;
  height: 2px;
  background: #404040;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
}

/deep/ .el-breadcrumb__inner {
  cursor: pointer;
}
/deep/ .el-breadcrumb__inner:hover {
  font-weight: 700;
}
</style>
