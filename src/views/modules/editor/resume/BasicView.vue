<template>
  <div class="basic-info pr">
    <div class="title pr">
      <div class="info pa">
        <div class="name basic">{{ basic.name }}</div>
        <div class="basic">
          <div class="item" v-for="item in basic.contact" :key="item.name">
            <span>{{ item.value }}</span>
          </div>
        </div>

        <div class=" basic">
          <div class="item" v-for="item in basic.social" :key="item.name">
            <span>{{ item.name + ': ' + item.value }}</span>
          </div>
        </div>

        <div class=" basic">
          <div class="item" v-for="item in basic.other" :key="item.name">
            <span>{{ item.name + ': ' + item.value }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="hasAvatar" class="usr-avatar pr">
      <img
        class="avatar-img"
        src="https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/cv/cv_accounts/avatars/18160aa0-225e-11eb-8364-05c75218e992.gif"
      />
      <div class="img-op">
        <div class="op">
          <p><i class="el-icon-edit"></i>编辑</p>
          <p @click.stop="delImg"><i class="el-icon-delete"></i>删除</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="avatar fcenter">添加照片</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { hasAvatar: false }
  },
  computed: {
    basic() {
      return this.$store.state.info.basic
    },
  },
  methods: {
    delImg() {
      this.hasAvatar = false
    },
  },
}
</script>

<style lang="less" scoped>
.basic-info {
  padding-bottom: 10.5px;
  margin: 0 13mm;
  height: 96px;
  .title {
    .name {
      font-size: 20px;
      font-weight: 700;
      margin: 0;
      margin-bottom: 10px;
    }
  }
}
.basic-info:hover {
  cursor: pointer;
  background: #f9f9f9;
}
.info {
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
}
.basic {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .item {
    vertical-align: middle;
    span:after {
      content: '|';
      display: inline-block;
      margin-right: 6px;
      margin-left: 2px;
      width: 1px;
      height: 14px;
    }
  }
  .item:last-child {
    span::after {
      display: none;
    }
  }
}

.usr-avatar {
  position: absolute;
  right: 0;
  top: 0;
  .avatar-img {
    width: 80px;
    height: 96px;
    object-fit: contain;
  }
  img {
    display: block;
  }
  .img-op {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 9;
    background: rgba(64, 64, 64, 0.5);
    text-align: right;
    cursor: auto;
    .op {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        cursor: pointer;
        color: #ececec;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        i {
          font-size: 16px;
          margin-right: 2px;
        }
      }
    }
  }
}
.avatar {
  // display: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 77px;
  height: 56px;
  border: 1px dashed #bcbcbc;
  color: #9c9c9c;
  border-radius: 2px;
}
.usr-avatar:hover {
  .img-op {
    display: block;
  }
}
</style>
