<template>
  <div class="editor">
    <div class="pc-nav">
      <Header>
        <router-link to="/" slot="left" @click.native="switchTab(0)">
          <img
            class="left"
            src="https://photo.wondercv.com/white-logo.png"
            alt="超级简历WonderCV LOGO"
          />
        </router-link>
        <div class="middle" slot="middle">
          <router-link
            :to="item.url"
            :class="['middle-item', isActive === item.id ? 'active' : '']"
            v-for="item in middleNav"
            :key="item.id"
            @click.native="switchTab(item.id)"
          >
            {{ item.entry }}
          </router-link>
        </div>
      </Header>
    </div>
    <!-- body -->
    <el-main class="index-main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
  </div>
</template>

<script>
import Header from '@/layout/Header'

export default {
  components: {
    Header,
  },
  data() {
    return {
      middleNav: [
        { entry: '简历模版', url: '/template', id: 2 },
        { entry: '简历修改', url: '/service', id: 3 },
        { entry: '热门职位', url: '/jobs', id: 4 },
        { entry: '求职攻略', url: '/blog', id: 5 },
      ],
      isActive: 0,
    }
  },
  created() {
    const token = window.sessionStorage.getItem('token')
    if (token) this.middleNav.unshift({ entry: '我的简历', url: '/cvs', id: 1 })
  },
  methods: {
    switchTab(idx) {
      // console.log(this.isActive, idx)
      this.isActive = idx
    },
  },
}
</script>

<style lang="less" scoped>
.pc-nav {
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  background-color: #202329;
}
.left {
  height: 32px;
  left: 0;
  top: 12px;
  z-index: 3;
  vertical-align: middle;
  cursor: pointer;
}

.middle {
  color: white;
  font-size: 14px;
  text-align: center;
  .middle-item {
    color: #fff;
    line-height: 55px;
    height: 55px;
    cursor: pointer;
    position: relative;
    margin-right: 38px;
    -webkit-font-smoothing: antialiased;
  }
  .middle-item:hover {
    color: red;
  }
  .middle-item:last-child {
    margin: 0;
  }
}

.index-main {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 56px;
  overflow: scroll;
}

.el-main {
  padding: 0;
}

.active::after {
  position: absolute;
  content: '';
  display: block;
  width: 50%;
  height: 3px;
  background: #ff4f4c;
  left: 50%;
  bottom: -18px;
  transform: translateX(-50%);
}
</style>
