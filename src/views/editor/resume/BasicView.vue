<template>
  <div class="basic-info pr">
    <div class="title pr">
      <div class="info pa">
        <div class="name basic">{{ basic.user.name.value }}</div>
        <div class="basic">
          <div class="item" v-for="(item, prop) in basic.contact" :key="prop">
            <span>{{ item.value }}</span>
          </div>
        </div>

        <div class=" basic">
          <div class="item" v-for="item in socialTags.views" :key="item.desc">
            <span>{{ item.desc + ': ' + item.value }}</span>
          </div>
        </div>

        <div class=" basic">
          <div class="item" v-for="item in otherTags.views" :key="item.desc">
            <span>{{ item.desc + ': ' + item.value }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="avatar" class="usr-avatar pr">
      <img class="avatar-img" :src="avatar" />
      <div class="img-op">
        <div class="op">
          <p @click.stop="editAvatar"><i class="el-icon-edit"></i>编辑</p>
          <p @click.stop="delAvatar"><i class="el-icon-delete"></i>删除</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="avatar fcenter bfc" @click.stop=";(function() {})()">
        <!-- @click.stop="addAvatar" -->
        <p class="text bfc">
          添加照片
        </p>
        <input type="file" class="upload" @change.stop="addAvatar($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState as mapResumeState,
  mapGetters as mapResumeGetters,
  mapMutations as mapResumeMutations,
  mapActions as mapResumeActions,
} from '@/store/helper/resume'

import {
  mapState as mapUserState,
  mapGetters as mapUserGetters,
  mapActions as mapUserActions,
  mapMutations as mapUserMutations,
} from '@/store/helper/user'

import { updateBasic } from '@/api'

export default {
  data() {
    return { img: '' }
  },
  computed: {
    basic() {
      return this.info.basic
    },
    avatar() {
      return this.basic.user?.avatar?.src
    },
    ...mapUserState(['info']),
    ...mapUserGetters(['socialTags', 'otherTags']),
  },
  methods: {
    addAvatar(event) {
      const self = this
      const file = event.target.files[0]

      if (!/\.(jpe?g|png|gif)$/i.test(file.name))
        return self.$message.error('上传头像图片格式 jpg, png, gif')

      if (file.size / 1024 / 1024 > 0.3)
        return self.$message.error('上传头像图片大小不能超过 300k!')

      var reader = new FileReader()
      reader.onload = function(e) {
        self.updateAvatar({ desc: file.name, src: e.target.result })
      }
      reader.readAsDataURL(file)
      this.updateAvatar()
    },

    delAvatar() {
      this.updateAvatar({ desc: '', src: '' })
    },
    editAvatar() {
      console.log('edit avatar')
    },
    ...mapUserActions(['updateAvatar']),
  },
  created() {
    // console.log(this.basic.user.avatar.src)
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
  right: 0;
  top: 0;
  width: 77px;
  height: 56px;
  border: 1px dashed #bcbcbc;
  color: #9c9c9c;
  border-radius: 2px;

  .text {
  }
  .upload {
    opacity: 0;
  }
}
.bfc {
  position: absolute;
}
.usr-avatar:hover {
  .img-op {
    display: block;
  }
}
</style>
