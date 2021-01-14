<template>
  <div class="style-wrapper">
    <div class="btns fcenter">
      <div class="one-page">
        <div v-if="isOnePage">智能一页</div>
        <div v-else>取消一页</div>
      </div>
      <div class="sort">智能排序</div>
    </div>

    <div class="attr size">
      <div class="title">尺寸</div>
      <div class="ops horizontal">
        <div
          :class="['op', sizeIdx === i ? 'active' : '']"
          v-for="(op, i) in sizeOps"
          :key="op"
          @click="changeOp(i)"
        >
          {{ op }}
        </div>
      </div>
    </div>

    <div class="attr font horizontal">
      <div class="select-wrapper">
        <div class="title">字体</div>
        <select-block
          class="select"
          :options="fontfamily"
          width="110px"
        ></select-block>
      </div>
      <div class="select-wrapper">
        <div class="title">字号</div>
        <select-block
          class="select"
          :options="fontsize"
          width="110px"
          :initIdx="2"
        ></select-block>
      </div>
    </div>
    <div class="attr layout">
      <div class="title">布局</div>
      <div class="ops horizontal">
        <div
          :class="['op', layoutIdx === i ? 'active' : '']"
          v-for="(op, i) in layoutOps"
          :key="op"
          @click="changeLayoutOp(i)"
        >
          <i class="el-icon-s-fold icon"></i>
          {{ op }}
        </div>
      </div>
    </div>

    <div class="margin attr horizontal">
      <div class="select-wrapper">
        <div class="title">行距</div>
        <select-block
          class="select"
          :options="linemargin"
          width="110px"
          :initIdx="7"
        ></select-block>
      </div>
      <div class="select-wrapper">
        <div class="title">页边距</div>
        <select-block
          class="select"
          :options="pagemargin"
          width="110px"
          :initIdx="1"
        ></select-block>
      </div>
    </div>

    <div class="theme attr">
      <div class="title">主题</div>
      <div class="ops horizontal">
        <div
          class="theme-op fcenter"
          v-for="(op, i) in themeOps"
          :key="op"
          :style="`background:rgb(${op});`"
          @click="changeThemeOp(i)"
        >
          <i
            class="el-icon-check theme-icon"
            :style="themeIdx === i ? '' : 'display:none;'"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SelectBlock } from '../../../../components/common/select'
export default {
  components: { SelectBlock },
  data() {
    return {
      isOnePage: true,

      sizeIdx: 0,
      layoutIdx: 0,
      themeIdx: 0,
      sizeOps: ['A4', 'Letter Size'],
      layoutOps: ['居左对齐', '剧中对齐'],
      themeOps: [
        '64,64,64',
        '179,179,179',
        '220,33,39',
        '225,127,0',
        '84,132,237',
        '167,87,229',
        '81,183,73',
      ],

      fontfamily: [
        { name: '微软雅黑', txt: '微软雅黑', style: 'color:#606266;' },
        { name: '黑体', txt: '黑体', style: 'color:#606060;' },
        { name: '宋体', txt: '宋体', style: 'color:red;' },
        { name: '楷体', txt: '楷体', style: 'color:blue;' },
        { name: '仿宋', txt: '仿宋', style: 'color:lightgreen;' },
      ],
      fontsize: [...Array(19).keys()].slice(10).map(v => {
        return { name: v, txt: v + 'pt', style: '' }
      }),
      linemargin: [...Array(29).keys()].slice(12).map(v => {
        return { name: v, txt: v, style: '' }
      }),
      pagemargin: [...Array(26).keys()]
        .filter(v => v % 5 === 0 && v > 0)
        .map(v => {
          return { name: v, txt: v, style: '' }
        }),
    }
  },
  methods: {
    changeOp(i) {
      this.sizeIdx = i
    },
    changeLayoutOp(i) {
      this.layoutIdx = i
    },
    changeThemeOp(i) {
      this.themeIdx = i
    },
  },
}
</script>

<style lang="less" scoped>
.style-wrapper {
  width: 100%;
  padding: 0 40px 10px 40px;
  box-sizing: border-box;
  height: calc(100vh - 56px - 52px - 20px);
  overflow-y: scroll;
}
.attr {
  margin: 22px 0 14px;
  color: #aeb2bd;
  line-height: 36px;
}
.btns {
  margin-top: 30px;
  justify-content: space-between;
  color: #fff;
  font-size: 14px;
  .one-page,
  .sort {
    box-sizing: border-box;
    width: 110px;
    line-height: 36px;
    border-radius: 5px;
  }
  .one-page {
    background: #f64;
  }
  .sort {
    background: #4183ff;
  }
}

.horizontal {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.op {
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  border: solid 1px #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
}

.icon {
  margin-right: 3px;
}
.active {
  color: #f64;
  border: solid 1px #f64;
}

.select-wrapper {
  display: flex;
  flex-direction: column;
  width: 110px;
}

.theme-op {
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 50%;
  flex: none;
  .theme-icon {
    color: #fff;
  }
}
</style>
