<template>
  <div class="module-wrapper">
    <div class="module-manage">
      <div class="manage pr">
        <div class="title pr">模块管理</div>
        <div class="module-wrap">
          <div class="item">
            <div class="module">基本信息</div>
          </div>
          <transition-group name="flip-list" tag="div" class="">
            <div
              class="item"
              v-for="item in this.modules"
              :key="item.name"
              draggable="true"
              @dragstart="dragstart(item)"
              @dragover="dragover(item)"
              @dragend="dragend()"
            >
              <div class="module">{{ item.name }}</div>
              <div class="ops fcenter">
                <i
                  class="el-icon-delete op delete"
                  @click="deleteModule(item)"
                ></i>
                <i class="el-icon-rank op"></i>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
      <div class="remain pr">
        <div class="title pr">添加模块</div>
        <div class="module">
          <div
            class="item"
            v-for="item in remains"
            :key="item.id"
            :style="item.ref && item.id !== 11 ? 'display:none;' : ''"
            @click="addModule(item.tag)"
          >
            <div class="info">
              <i class="el-icon-rank icon"></i>
              <div class="txt">
                <div class="name">{{ item.name }}</div>
                <div class="desc txt-overflow">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>
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

export default {
  data() {
    return {
      modules: [],
      draggingItem: null,
      lastItem: null,
    }
  },
  created() {
    this.modules = Object.assign([], this.importedModules)
  },
  methods: {
    dragstart: function(item) {
      this.draggingItem = item
    },
    dragover: function(item) {
      if (item !== this.draggingItem && this.lastItem !== item) {
        const fromIndex = this.modules.indexOf(this.draggingItem)
        const toIndex = this.modules.indexOf(item)
        const start = Math.min(fromIndex, toIndex)
        const end = Math.max(fromIndex, toIndex)

        for (let i = start, temp; i < end; i++) {
          temp = this.modules[i]
          this.modules[i] = this.modules[i + 1]
          this.modules[i + 1] = temp
        }
        this.modules = [...this.modules]
      }
      this.lastItem = item
    },
    dragend() {
      const imported = this.modules.map(v => v.id)
      this.resetModules(imported)
    },
    deleteModule(item) {
      const idx = this.modules.indexOf(item)
      this.modules.splice(idx, 1)
      this.delModuleItem(idx)
      this.changeRefState(item.id)
    },
    addModule(tag) {
      this.switchFormTag(tag)
      this.switchTab(0)
    },
    ...mapUserMutations(['resetModules', 'delModuleItem']),
    ...mapResumeMutations(['switchFormTag', 'switchTab']),
  },
  computed: {
    ...mapUserState(['remains']),
    ...mapUserGetters(['importedModules']),
  },
}
</script>

<style lang="less" scoped>
.module-wrapper {
  width: 100%;
  background: #fff;
  padding: 30px;
  box-sizing: border-box;
  color: #505667;
  font-size: 14px;
  height: var(--cvHeight);
}
.module-manage {
  height: 100vh;
  overflow: scroll;
}
.title {
  padding-left: 11px;
  margin-bottom: 16px;
}
.title::after {
  content: '';
  display: block;
  width: 3px;
  height: 14px;
  background: #505657;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.item {
  cursor: move;
  width: 100%;
  height: 46px;
  border-radius: 2px;
  background: #fbfbfb;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  user-select: none;
  .module {
    margin-left: 24px;
  }
  .ops {
    margin-right: 16px;
    flex: none;
    .delete {
      cursor: pointer;
    }
    .op {
      color: #c4c4c4;
      font-size: 16px;
      margin-left: 16px;
    }
    .op:hover {
      color: #404040;
    }
  }
}
.item:hover {
  background: #fff;
  box-shadow: 0 0 12px rgba(100, 100, 100, 0.1);
}

.remain {
  margin-top: 36px;
  .item {
    height: 72px;
    margin-bottom: 12px;
    padding: 0 18px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    .info {
      display: flex;
      align-items: flex-start;
      .icon {
        margin-right: 8px;
        font-weight: 600;
        font-size: 16px;
      }
      .txt {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .desc {
          font-size: 12px;
          color: #aeb2bd;
          margin-top: 4px;
        }
      }
    }
  }
}
.flip-list-move {
  transition: transform 0.3s;
}
</style>
