<template>
  <div class="experience-wrap">
    <div class="experience">
      <div class="title fcenter">
        <div class="cur pr" @click="choseModule">
          <div class="name">
            <span>{{ name }}</span>
            <span>({{ num }}/{{ total }})</span>
            <i class="el-icon-caret-bottom icon"></i>
          </div>
          <div
            class="option pa"
            :style="`display: ${showOption ? 'block' : 'none'};`"
          >
            <div
              v-for="(item, i) in experience"
              :key="item.name"
              :class="['item pr', name === item.name ? 'active' : '']"
              @click="choseItem(i)"
            >
              <div>{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="btn fcenter">
          <i class="el-icon-setting"></i>
          <span>管理</span>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="list">
          <div
            class="item pr"
            v-for="(item, i) in experience[optionIdx].content"
            :key="item.name"
          >
            <div
              class="option fcenter"
              :style="`background: ${item.ref ? '#505667' : ''};`"
              @click="importExperience(i)"
            ></div>
            <div class="content">
              <div v-if="experience[optionIdx].multiple" class="attrs">
                <div class="name">{{ item.name }}</div>
                <div class="info txt-overflow">
                  <span v-for="p in item.attrs" :key="p">{{ p }}</span>
                </div>
                <div class="timespan txt-overflow">
                  <span v-for="time in item.timespan" :key="time">{{
                    time
                  }}</span>
                </div>
              </div>
              <div class="desc" v-html="item.desc"></div>
              <div class="update">更新时间：{{ item.update }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
        <div class="btns fcenter">
          <div class="cancel fcenter">取消</div>
          <div class="confirm fcenter">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { optionIdx: 0, name: '', num: 0, total: 0, showOption: false }
  },
  created() {
    this.choseItem(0)
  },
  methods: {
    choseModule() {
      this.showOption = !this.showOption
    },
    choseItem(i) {
      this.optionIdx = i
      this.name = this.experience[i].name
      this.num = this.experience[i].num
      this.total = this.experience[i].total
    },
    importExperience(i) {
      const idx = this.optionIdx
      this.experience[idx].content[i].ref = !this.experience[idx].content[i].ref
    },
  },
  computed: {
    experience() {
      return this.$store.getters.experience
    },
  },
}
</script>

<style lang="less" scoped>
.experience-wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0 16px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.04);
}
.experience {
  height: 100vh;
  overflow-y: scroll;
}
.title {
  width: 100%;
  height: 76px;
  color: #505657;
  justify-content: space-between;
  .cur {
    .name {
      display: flex;
      align-items: center;
      font-weight: 600;
      cursor: pointer;
      background: #f5f6fa;
      height: 28px;
      border-radius: 14px;
      padding: 0 12px;
      box-sizing: border-box;
      .icon {
        font-size: 16px;
        margin-left: 8px;
        font-weight: 400;
      }
    }
    .option {
      width: 292px;
      max-height: 300px;
      overflow: auto;
      top: 45px;
      z-index: 11;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      .item {
        display: flex;
        align-items: center;
        justify-content: left;
        flex-wrap: wrap;
        padding: 0 20px;
        height: 34px;
        cursor: pointer;
      }
    }
  }
  .btn {
    width: 71px;
    height: 28px;
    border-radius: 14px;
    background: #f5f6fa;
    color: #505657;
    span {
      margin-left: 3px;
    }
  }
}

.active {
  color: #505667;
  font-weight: 600;
  background-color: #f5f7fa;
}

.content-wrapper {
  height: calc(100% - 56px - 68px - 76px);
  width: 100%;
  // overflow: auto;
  box-sizing: border-box;
  .list {
    height: 100%;
    overflow-y: auto;
    .item {
      display: flex;
      width: 100%;
      background: #f5f6fa;
      padding: 20px 20px 30px;
      border-radius: 12px;
      cursor: pointer;
      margin-bottom: 12px;
      box-sizing: border-box;
      .option {
        width: 12px;
        height: 12px;
        border: 1px solid #505667;
        border-radius: 8px;
        flex: none;
        margin-top: 2px;
        margin-right: 12px;
      }
      .content {
        width: 230px;
        color: #505667;
        font-size: 14px;
        .name,
        .info,
        .timespan {
          margin-bottom: 10px;
        }
        .name {
          font-size: 16px;
          color: #505667;
          font-weight: 600;
        }
        .timespan {
          span:after {
            content: ' - ';
          }
          span:last-child:after {
            content: '';
          }
        }
        .info {
          display: flex;
          span {
            display: flex;
          }
          span::after {
            content: '|';
            display: block;
            width: 10px;
            font-size: 12px;
            text-align: center;
          }
          span:last-child:after {
            content: '';
          }
        }
        .desc {
          width: 100%;
          margin-bottom: 15px;
        }
        .update {
          position: absolute;
          right: 24px;
          bottom: 14px;
          text-align: right;
          font-size: 12px;
          color: #aeb2bd;
        }
      }
    }
  }
}

.btn-wrapper {
  position: relative;
  width: 100%;
  height: 68px;
  left: 0;
  // bottom: 0;
  z-index: 4;
  background: #fff;
  .btns {
    justify-content: space-evenly;
    bottom: 16px;
    left: 24px;
    .confirm,
    .cancel {
      width: 108px;
      height: 38px;
      border-radius: 19px;
      border: 1px solid #f64;
    }
    .cancel {
      background: transparent;
    }
    .confirm {
      background: #f64;
      color: #fff;
    }
  }
}

/deep/ p {
  margin: 0;
}
/deep/ ul {
  margin: 0;
  padding: 0 0 0 20px;
}
</style>
