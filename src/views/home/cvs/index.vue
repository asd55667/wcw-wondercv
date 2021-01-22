<template>
  <div class="cv">
    <div class="left">
      <ul class="menu">
        <li class="list item pr">
          <img src="https://files.wondercv.com/new-cv-icon.png" alt="" />
          <div class="con">
            <p class="title">新建简历</p>
            <p class="msg">选择高分简历模板</p>
          </div>
          <i class="el-icon-arrow-right pa"></i>
        </li>
        <li class="list item pr">
          <img src="https://files.wondercv.com/import-cv-icon.png" alt="" />
          <div class="con">
            <p class="title">导入简历</p>
            <p class="msg">上传简历智能优化</p>
          </div>
          <i class="el-icon-arrow-right pa"></i>
        </li>
      </ul>
      <div class="menu">
        <router-link
          :to="{ path: item.url }"
          :class="['menu-item', item.id === menuIdx ? 'flag' : '']"
          v-for="item in umenu"
          :key="item.id"
          @click.native="menuIdx = item.id"
        >
          <div class="left-model">
            <img :src="item.icon" />
            <div class="txt">{{ item.name }}</div>
          </div>
          <div class="right-model"></div>
        </router-link>
      </div>
      <div class="menu">
        <router-link
          :to="{ path: item.url }"
          :class="['menu-item', item.id === menuIdx ? 'flag' : '']"
          v-for="item in omenu"
          :key="item.id"
          @click.native="menuIdx = item.id"
        >
          <div class="left-model">
            <img :src="item.icon" />
            <div class="txt">{{ item.name }}</div>
          </div>
          <div class="right-model"></div>
        </router-link>
      </div>
    </div>

    <div class="right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      umenu: [
        {
          id: 0,
          name: '我的简历',
          url: '/cvs',
          icon: 'https://files.wondercv.com/cv-icon.png',
        },
        {
          id: 1,
          name: '更多模板案例',
          url: '/template',
          icon: 'https://files.wondercv.com/more-muban-icon.png',
        },
        {
          id: 2,
          name: '收藏模板',
          url: '/cvs/favorite',
          icon: 'https://files.wondercv.com/pc/pannel/favorite.png',
        },
        {
          id: 3,
          name: '回收站',
          url: '/cvs/trash',
          icon: 'https://files.wondercv.com/pc/pannel/trash.png',
        },
      ],
      omenu: [
        {
          id: 4,
          name: 'HR 邀约',
          url: '/cvs/hrinvite',
          icon: 'https://files.wondercv.com/hr-icon.png',
        },
        {
          id: 5,
          name: 'GPA 计算器',
          url: '',
          icon:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEYUlEQVRoQ+1ZSyhtYRRex3PgESHEhDzLO0wMREIpAynKQIy8yzuGYkRCBuRVJGWiTJR3mXokJCKG3u/k7fat29a5x7Xv+c/Z9+7jtv/J7pzz//9a33rtb62je39/f6f/eOk0gN/cu5oHv7kDSfOg5kELt4AWohbuoD+qp3nwjyay8A1meXBjY4NmZmbo4OCA7u7uFIOq0+nI0dGR/P39KS0tjUJDQ02+2ySAj4+PNDo6SktLSyYLNvYgwCYlJVFubi7Z2toae+xjn0kABwcHGZyNjQ1bODIykjw9PQnKKLHQ4BwdHdHa2hpNT0/T29sbpaSkUF5envD1wgARlu3t7Qyuvr6eAgIChIWKHNje3qa2tjYCaMgLDg4WOS5O1QAOIDMyMig7O/uTsNvbW7K3tyc7OzshReQ2Ix1mZ2cpNjaWSktLhe4V9mB5eTkXlMbGRgoMDPxF2MXFBVvZxcWFWltbhRSR27y1tcVedHNz46fIEgZYUFDA93d1dZGTk9Mvsvb29qilpYW/GxoaEtFDdu/Z2RnV1tZyZPT09Ajd+y0Anp+fU01NjToAd3d3aWxsjJ6fn+np6YlOT0/Zwj4+PvzE+6yoqIjDVlqoit3d3XRycvJbb1hZWXF1TkhI4N9VBTgxMUGTk5OyYVNdXU1hYWEfe66urqiyslL2TExMDCHfVQf48PBAy8vL9PLywh6ZmppipfLz8/np4ODA1c/wHYnCIXnbECn2RkREkKurq/oA9ZX7W0VG1RDVB7i/v0/Nzc2KV1GLAfj6+koDAwPk5eVFmZmZQuVcbrPFAFQMkcFFGkAZyyr6otc8aKIFVA9REGsQ7aqqKvLw8GAYm5ub1Nvby81qVlaWidB+HlMVIConWAnaJLB9dBPHx8dMxkHfwsPDGbj+AiloamqSpWqowunp6eoDhAaHh4fcHt3f3zP7QDsFcL6+vlRXV/ep67i5uWGjgJN+teLj46m4uNgyABqCxGeQbXjTsKWSAGEkgTbodwtUDb2m1DSrGqKSgsg5KSzxnRSuUk4aAllZWZHloiDb0lnVAeqD8/b2puvraw7Xr0BeXl5+yktDA0RHR1NFRYX6IYoiU1ZWRugqpJyDxaWcDAkJ4VDVXxgg9fX1fVlkEKKpqakUFxf37wEWFhbyhKuzs5OcnZ1Zgf7+fi7lJSUlHzmHwgNempiYyCM/cxbaKhSrfzKyQNjgldDQ0EBBQUHm6G30WWlU6e7uLjzMEqZqHR0dtL6+zu+onJwco5U0Z+Pw8DAtLCxwyCJKRJYwQAxikV/IEwyCzPnfwBhFYUykA+QhakQHzcIAodTIyAjNz88ThkPJyckUFRWl6OgeBABsaHV1lRYXFznnTY0YkwCCpYyPj9Pc3BwL/5sLRkRFxRTd2tpaWJRJACUpOzs7PFJX+u8z3A8G5Ofnx+BEw1LfCmYBFDanCgc0gCoYXVGRmgcVNacKl2keVMHoiorUPKioOVW4TPOgCkZXVOR/78Ef0JAxhrWmchoAAAAASUVORK5CYII=',
        },
      ],
      menuIdx: 0,
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.cv {
  display: flex;
  width: 1200px;
  margin: auto;
  padding-top: 30px;
  .left {
    width: 272px;
    margin-right: 24px;
    .menu {
      width: 100%;
      background: #fff;
      margin-bottom: 24px;
    }
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    .item {
      display: flex;
      align-items: center;
      position: relative;
      height: 79px;
    }
    .list {
      border-bottom: solid 1px #f5f5f7;
      width: 100%;
      cursor: pointer;
      i {
        color: #6c6c6c;
        font-size: 20px;
        font-weight: 400;
        top: 50%;
        right: 9px;
        transform: translateY(-50%);
      }
    }
    img {
      width: 36px;
      margin-left: 16px;
      margin-top: 0;
    }
    .con {
      // margin-left: -2.5px;
      margin-left: 10px;
      .title {
        font-size: 14px;
        // margin-top: 0;
        color: #404040;
      }
      .msg {
        font-size: 12px;
        color: #9c9c9c;
        margin-top: -10px;
      }
    }

    .menu-item {
      width: 100%;
      height: 62px;
      background: #fff;
      border-bottom: 1px solid #f5f5f7;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      position: relative;
      color: #404040;

      .left-model {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        img {
          width: 28px;
          height: 28px;
          max-width: 28px;
          max-height: 28px;
          margin-left: 18px;
          margin-right: 14px;
        }
        .txt {
          line-height: 62px;
          width: 100%;
          max-width: 160px;
          font-size: 14px;
          // font-weight: 600;
          word-break: keep-all;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
  .right {
    width: 900px;

    display: flex;
    flex-direction: column;
  }
}

.flag::after {
  content: '';
  display: block;
  width: 3px;
  height: 26px;
  background: #ff453c;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
</style>
