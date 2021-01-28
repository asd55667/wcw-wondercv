<template>
  <div class="base-wrap">
    <div class="module">
      <div class="title">
        <div class="name">{{ resumeModule.name }}</div>
        <div
          v-if="resumeModule.multiple"
          class="add-module"
          @click.stop="addModule"
        >
          <i class="el-icon-circle-plus"></i>
          <span class="add-txt">添加</span>
        </div>
      </div>

      <div class="content">
        <div
          class="items pr"
          v-for="(item, i) in resumeModule.content"
          :key="i"
          @click="contentIdx(i)"
        >
          <!-- 上下移动按钮 -->
          <div v-if="item.ref">
            <div v-if="content.filter(v => v.ref).length > 1" class="move-op">
              <div
                :class="['icon', i === 0 ? 'disabled' : '']"
                @click.stop="moveUp(i)"
              >
                <i class="el-icon-top"></i>
              </div>
              <div
                :class="['icon', i === content.length - 1 ? 'disabled' : '']"
                @click.stop="moveDown(i)"
              >
                <i class="el-icon-bottom"></i>
              </div>
            </div>

            <div class="first-row">
              <div v-if="item.name" class="item-name">
                {{ item.name.value }}
              </div>
              <div class="timespan">
                <span v-for="(time, name) in item.timespan" :key="name">{{
                  time
                }}</span>
              </div>
            </div>
            <div class="second-row">
              <div class="attrs" v-if="item.attrs">
                <span v-for="attr in item.attrs" :key="attr.desc">{{
                  attr.value
                }}</span>
              </div>
              <div class="location" v-if="item.location">
                {{ item.location.value }}
              </div>
            </div>
            <div class="desc" v-html="item.desc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resumeModule: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    content() {
      return this.resumeModule.content
    },
  },
  methods: {
    addModule() {
      console.log('addmodule')
    },
    swap(i, j) {
      this.content[i] = this.content.splice(j, 1, this.content[i])[0]
    },
    moveUp(i) {
      if (i !== 0) {
        this.swap(i, i - 1)
      }
    },
    moveDown(i) {
      if (i !== this.content.length - 1) {
        this.swap(i, i + 1)
      }
    },
    contentIdx(i) {
      this.$emit('formIdx', i)
    },
  },
}
</script>

<style lang="less" scoped>
.base-wrap {
  padding-top: 7px;
  font-size: 12px;
  color: #000;
}
.base-wrap:hover {
  background: #f9f9f9;
  border-radius: 4px;
  .add-module {
    display: flex;
  }
}

.module {
  margin: 0 13mm;
}

.title {
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  line-height: 18px;
  border-bottom: 1px solid rgb(64, 64, 64);
  .name {
    font-weight: 700;
    padding-bottom: 3.5px;
    margin-bottom: 5px;
  }
  .add-module {
    display: none;
    align-items: center;
    color: #505667;
    cursor: pointer;
    font-size: 14px;
    i {
      margin-right: 11px;
      font-size: 24px;
    }
  }
}
.title:hover {
  cursor: pointer;
}

.move-op {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 8;
  .icon {
    position: relative;
    background: #505667;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    i {
      position: absolute;
      top: 4px;
      right: 4.4px;
      color: #fff;
      font-weight: 700;
    }
  }
  .icon:first-child {
    margin-right: 11px;
  }
}

.items {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  .first-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .item-name {
      font-weight: 500;
      margin-bottom: 2.5px;
    }
    .timespan {
      span:after {
        content: ' - ';
      }
      span:last-child:after {
        content: '';
      }
    }
  }
  .second-row {
    display: flex;
    justify-content: space-between;
    .attrs {
      span:after {
        content: ' | ';
      }
      span:last-child:after {
        content: '';
      }
    }
  }
}

.desc /deep/ p,
.desc /deep/ ul {
  margin: 0;
  padding-bottom: 5px;
}
.items:hover {
  background: #efeff0;
  border-radius: 6px;
  cursor: pointer;
  .move-op {
    display: flex;
  }
}

.disabled {
  background: #aeb2bd !important;
  cursor: not-allowed;
}
</style>
