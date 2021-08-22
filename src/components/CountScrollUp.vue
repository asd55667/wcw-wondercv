<template>
  <span class="count-scroll-up">
    <span>
      <span
        class="number-item"
        v-for="(item, index) in computeNumber"
        :key="index"
      >
        <span class="">
          <span
            ref="numberItem"
            class=""
            :style="{
              transform: `translate(-50%, -${item[0]}0%)`,
              transition: `transform ${item[2]}s ease-in-out`,
            }"
            >{{ rollNum }}</span
          >
        </span>
        <!-- <div>{{ item }}</div> -->
      </span>
    </span>
  </span>
  <!-- <div class="cmp">1239</div> -->
</template>

<script>
// [用CSS3实现无限循环的无缝滚动](https://www.xiabingbao.com/css3/2017/07/03/css3-infinite-scroll.html)
// [你可能需要这样的大屏数字滚动效果](https://juejin.cn/post/6844903901355835406)
export default {
  props: {
    startVal: {
      type: Number,
      default: 4,
      default: 8924,
    },
    endVal: {
      type: Number,
      default: 946,
      default: 3,
    },
  },
  data() {
    return {
      //
      computeNumber: [[0, 0]],
      rollNum: '0123456789',
      lastVal: 0,
      hz: 16,
    };
  },
  computed: {},
  methods: {
    trans(startVal, endVal) {
      const arr = this.computeArr(startVal, endVal);
      arr.forEach(item => (item[0] = item[1]));
      this.computeNumber = arr;
      this.lastVal = endVal;
    },

    // 1234 => [1,2,3,4]
    d2a(digit) {
      let arr = [];
      let rem = 0;
      if (!digit) return [0];
      while (digit) {
        rem = digit % 10;
        digit /= 10;
        digit = ~~digit;
        arr.unshift(rem);
      }
      return arr;
    },

    // 123, 456 => [1, 4] [2, 5], [3,6]   [old, new, time]
    computeArr(start, end) {
      let larr = this.d2a(start),
        rarr = this.d2a(end);
      let ln = larr.length,
        rn = rarr.length,
        arr = [];

      let i = start > end ? 5 : 0.5;
      while (ln && rn) {
        arr.unshift([
          larr[ln - 1],
          rarr[rn - 1],
          start > end ? (i /= 2) : (i *= 2),
        ]);
        ln--;
        rn--;
      }
      while (ln) {
        arr.unshift([larr[ln - 1], 0, start > end ? (i /= 2) : (i *= 2)]);
        ln--;
      }
      while (rn) {
        arr.unshift([0, rarr[rn - 1], start > end ? (i /= 2) : (i *= 2)]);
        rn--;
      }
      // console.log(arr)
      return arr;
    },
  },
  watch: {
    endVal(val) {
      const self = this;
      setTimeout(() => {
        self.trans(self.lastVal, val);
      });
    },
  },
  created() {
    const { trans, startVal, endVal } = this;
    this.computeNumber = this.computeArr(startVal, endVal);
    setTimeout(() => {
      trans(startVal, endVal);
    });
  },
};
</script>

<style lang="less" scoped>
.number-item {
  width: 0.6em;
  height: 1.25em;
  //   background: pink;
  //   border: solid 1px pink;
  display: inline-block;

  & > span {
    position: relative;
    vertical-align: middle;
    text-align: center;
    // margin-top: 4px;

    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    // background: pink;
    overflow: hidden;
    & > span {
      position: absolute;
      top: 0;
      left: 50%;
      letter-spacing: 11px;
    }
  }
}

.cmp {
  position: absolute;
  top: 0;
  left: 0;
  color: red;
  background: lightgreen;
  z-index: -1;
}
</style>
