<template>
  <div
    :class="carouselClasses"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <ul
      v-if="indicatorPosition !== 'none'"
      :class="indicatorsClasses"
      class="tab-top"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'el-carousel__indicator',
          'tab-item',
          'el-carousel__indicator--' + direction,
          { 'is-active': index === activeIndex },
        ]"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
      >
        <!-- <button class="el-carousel__button"> -->
        <!-- <span v-if="hasLabel">{{ item.label.id }}</span> -->
        <!-- </button> -->
        <div class="tab-item-left">
          <img
            src="https://files.wondercv.com/homepage-pc/tab_icon_1.png"
            alt
          />
        </div>
        <div class="tab-item-right">
          <span>{{ item.label.title }}</span>
          <span>{{ item.label.subtitle }}</span>
        </div>
        <img
          class="tab-arrow"
          :style="`display:${item.label.id === 4 ? 'none' : 'inline'};`"
          :src="item.label.src"
          alt
        />
      </li>
    </ul>

    <div class="el-carousel__container" :style="{ height: height }">
      <transition v-if="arrowDisplay" name="carousel-arrow-left">
        <button
          type="button"
          v-show="(arrow === 'always' || hover) && (loop || activeIndex > 0)"
          @mouseenter="handleButtonEnter('left')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex - 1)"
          class="el-carousel__arrow el-carousel__arrow--left"
        >
          <i class="el-icon-arrow-left"></i>
        </button>
      </transition>
      <transition v-if="arrowDisplay" name="carousel-arrow-right">
        <button
          type="button"
          v-show="
            (arrow === 'always' || hover) &&
              (loop || activeIndex < items.length - 1)
          "
          @mouseenter="handleButtonEnter('right')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex + 1)"
          class="el-carousel__arrow el-carousel__arrow--right"
        >
          <i class="el-icon-arrow-right"></i>
        </button>
      </transition>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import throttle from 'throttle-debounce/throttle'
import {
  addResizeListener,
  removeResizeListener,
} from '../../../utils/resize-event'

export default {
  name: 'Swiper',
  props: {
    initialIndex: {
      type: Number,
      default: 0,
    },
    height: String,
    trigger: {
      type: String,
      default: 'hover',
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    indicatorPosition: String,
    indicator: {
      type: Boolean,
      default: true,
    },
    arrow: {
      type: String,
      default: 'hover',
    },
    type: String,
    loop: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1
      },
    },
  },

  data() {
    return {
      items: [],
      activeIndex: -1,
      containerWidth: 0,
      timer: null,
      hover: false,
    }
  },

  computed: {
    arrowDisplay() {
      return this.arrow !== 'never' && this.direction !== 'vertical'
    },

    hasLabel() {
      return this.items.some(item => item.label.toString().length > 0)
    },

    carouselClasses() {
      const classes = ['el-carousel', 'el-carousel--' + this.direction]
      if (this.type === 'card') {
        classes.push('el-carousel--card')
      }
      return classes
    },

    indicatorsClasses() {
      const classes = [
        'el-carousel__indicators',
        'el-carousel__indicators--' + this.direction,
      ]
      if (this.hasLabel) {
        classes.push('el-carousel__indicators--labels')
      }
      if (this.indicatorPosition === 'outside' || this.type === 'card') {
        classes.push('el-carousel__indicators--outside')
      }
      return classes
    },
  },

  watch: {
    items(val) {
      if (val.length > 0) this.setActiveItem(this.initialIndex)
    },

    activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal)
      if (oldVal > -1) {
        this.$emit('change', val, oldVal)
      }
    },

    autoplay(val) {
      val ? this.startTimer() : this.pauseTimer()
    },

    loop() {
      this.setActiveItem(this.activeIndex)
    },
  },

  methods: {
    handleMouseEnter() {
      this.hover = true
      this.pauseTimer()
    },

    handleMouseLeave() {
      this.hover = false
      this.startTimer()
    },

    itemInStage(item, index) {
      const length = this.items.length
      if (
        (index === length - 1 && item.inStage && this.items[0].active) ||
        (item.inStage && this.items[index + 1] && this.items[index + 1].active)
      ) {
        return 'left'
      } else if (
        (index === 0 && item.inStage && this.items[length - 1].active) ||
        (item.inStage && this.items[index - 1] && this.items[index - 1].active)
      ) {
        return 'right'
      }
      return false
    },

    handleButtonEnter(arrow) {
      if (this.direction === 'vertical') return
      this.items.forEach((item, index) => {
        if (arrow === this.itemInStage(item, index)) {
          item.hover = true
        }
      })
    },

    handleButtonLeave() {
      if (this.direction === 'vertical') return
      this.items.forEach(item => {
        item.hover = false
      })
    },

    updateItems() {
      this.items = this.$children.filter(
        child => child.$options.name === 'SwiperItem',
      )
    },

    resetItemPosition(oldIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex)
      })
    },

    playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++
      } else if (this.loop) {
        this.activeIndex = 0
      }
    },

    pauseTimer() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },

    startTimer() {
      if (this.interval <= 0 || !this.autoplay || this.timer) return
      this.timer = setInterval(this.playSlides, this.interval)
    },

    setActiveItem(index) {
      if (typeof index === 'string') {
        const filteredItems = this.items.filter(item => item.name === index)
        if (filteredItems.length > 0) {
          index = this.items.indexOf(filteredItems[0])
        }
      }
      index = Number(index)
      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('[Element Warn][Carousel]index must be an integer.')
        return
      }
      const length = this.items.length
      const oldIndex = this.activeIndex
      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0
      } else if (index >= length) {
        this.activeIndex = this.loop ? 0 : length - 1
      } else {
        this.activeIndex = index
      }
      if (oldIndex === this.activeIndex) {
        this.resetItemPosition(oldIndex)
      }
    },

    prev() {
      this.setActiveItem(this.activeIndex - 1)
    },

    next() {
      this.setActiveItem(this.activeIndex + 1)
    },

    handleIndicatorClick(index) {
      this.activeIndex = index
    },

    handleIndicatorHover(index) {
      if (this.trigger === 'hover' && index !== this.activeIndex) {
        this.activeIndex = index
      }
    },
  },

  created() {
    this.throttledArrowClick = throttle(300, true, index => {
      this.setActiveItem(index)
    })
    this.throttledIndicatorHover = throttle(300, index => {
      this.handleIndicatorHover(index)
    })
  },

  mounted() {
    this.updateItems()
    this.$nextTick(() => {
      addResizeListener(this.$el, this.resetItemPosition)
      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex
      }
      this.startTimer()
    })
  },

  beforeDestroy() {
    if (this.$el) removeResizeListener(this.$el, this.resetItemPosition)
    this.pauseTimer()
  },
}
</script>

<style lang="less" scoped>
.el-carousel__indicators {
  .el-carousel__button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
}
.el-carousel {
  position: relative;
}
.el-carousel--horizontal {
  overflow-x: hidden;
}
.el-carousel--vertical {
  overflow-y: hidden;
}
.el-carousel__container {
  position: relative;
  height: 300px;
}
.el-carousel__arrow {
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  height: 36px;
  width: 36px;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 50%;
  background-color: rgba(31, 45, 61, 0.11);
  color: #fff;
  position: absolute;
  top: 50%;
  z-index: 10;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  font-size: 12px;
}
.el-carousel__arrow--left {
  left: 16px;
}
.el-carousel__arrow--right {
  right: 16px;
}
.el-carousel__arrow:hover {
  background-color: rgba(31, 45, 61, 0.23);
}
.el-carousel__arrow i {
  cursor: pointer;
}
.el-carousel__indicators {
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 2;
}
.el-carousel__indicators--horizontal {
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.el-carousel__indicators--vertical {
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.el-carousel__indicators--outside {
  bottom: 26px;
  text-align: center;
  position: static;
  -webkit-transform: none;
  transform: none;
}
.el-carousel__indicators--outside .el-carousel__indicator:hover button {
  opacity: 0.64;
}
.el-carousel__indicators--outside button {
  background-color: #c0c4cc;
  opacity: 0.24;
}
.el-carousel__indicators--labels {
  left: 0;
  right: 0;
  -webkit-transform: none;
  transform: none;
  text-align: center;
}
.el-carousel__indicators--labels .el-carousel__button {
  height: auto;
  width: auto;
  padding: 2px 18px;
  font-size: 12px;
}
.el-carousel__indicators--labels .el-carousel__indicator {
  padding: 6px 4px;
}
.el-carousel__indicator {
  background-color: transparent;
  cursor: pointer;
}
.el-carousel__indicator:hover button {
  opacity: 0.72;
  background: #f64;
}
.el-carousel__indicator--horizontal {
  display: inline-block;
  padding: 12px 4px;
}
.el-carousel__indicator--vertical {
  padding: 4px 12px;
}
.el-carousel__indicator--vertical .el-carousel__button {
  width: 2px;
  height: 15px;
}
.el-carousel__indicator.is-active button {
  opacity: 1;
  background: #f64;
}
.el-carousel__button {
  display: block;
  opacity: 0.48;
  width: 30px;
  height: 2px;
  background-color: #fff;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.carousel-arrow-left-enter,
.carousel-arrow-left-leave-active {
  -webkit-transform: translateY(-50%) translateX(-10px);
  transform: translateY(-50%) translateX(-10px);
  opacity: 0;
}
.carousel-arrow-right-enter,
.carousel-arrow-right-leave-active {
  -webkit-transform: translateY(-50%) translateX(10px);
  transform: translateY(-50%) translateX(10px);
  opacity: 0;
}

.tab-top {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 114px;
  box-sizing: border-box;
  padding: 0 63px;
  margin: 0 0 30px;
  .tab-item {
    position: relative;
    display: flex;
    padding: 30px 0 40px 0;
    cursor: pointer;
    .tab-item-left {
      margin-right: 10px;
      margin-top: 4px;
      img {
        height: 20px;
        width: 20px;
      }
    }
    .tab-item-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      span:first-child {
        margin-bottom: 10px;
        font-size: 20px;
        color: #262a30;
        font-weight: 500;
      }
      span:last-child {
        color: #959ba3;
        font-weight: 400;
      }
    }
    .tab-arrow {
      position: absolute;
      margin-top: 4px;
      right: -14px;
      width: 59px;
      height: 14px;
    }
  }
  .is-active::before {
    content: '';
    position: absolute;
    width: 95%;
    height: 3px;
    left: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #f64;
  }
}
</style>
