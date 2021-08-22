<script>
// https://codesandbox.io/s/q4lz5p4vr9?file=/src/components/ButtonCounter.vue:0-21
import CountScrollUp from './CountScrollUp';

import {
  requestAnimationFrame,
  cancelAnimationFrame,
} from './requestAnimationFrame.js';

export default {
  name: 'CountUp',
  data() {
    return {
      localStartVal: this.startVal,
      localEndVal: this.endVal,
      displayValue: this.formatNumber(this.startVal),
      printVal: null,
      paused: false,
      localDuration: this.duration,
      startTime: null,
      timestamp: null,
      remaining: null,
      rAF: null,
    };
  },
  props: {
    startVal: {
      type: Number,
      required: false,
      default: 0,
    },
    endVal: {
      type: Number,
      required: false,
      default: 2021,
    },
    duration: {
      type: Number,
      required: false,
      default: 2000,
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true,
    },
    decimals: {
      type: Number,
      required: false,
      default: 0,
      validator(value) {
        return value >= 0;
      },
    },
    decimal: {
      type: String,
      required: false,
      default: '.',
    },
    separator: {
      type: String,
      required: false,
      default: '',
    },
    prefix: {
      type: String,
      required: false,
      default: '',
    },
    suffix: {
      type: String,
      required: false,
      default: '',
    },
    useEasing: {
      type: Boolean,
      required: false,
      default: true,
    },
    easingFn: {
      type: Function,
      default(t, b, c, d) {
        return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
      },
    },
  },
  computed: {
    countDown() {
      return this.startVal > this.endVal;
    },
  },
  methods: {
    start() {
      const { startVal, endVal } = this;

      this.localStartVal = startVal;
      this.startTime = null;
      this.localDuration = this.duration;
      this.paused = false;

      this.gap = Math.abs(startVal - endVal);
      if (this.gap > 10) {
        this.localEndVal =
          endVal > startVal
            ? ~~(endVal / 10) * 10
            : String(this.endVal).length > 1
            ? ~~(endVal / 10) + 10
            : 9;
        this.rAF = requestAnimationFrame(this.count);
      } else {
        this.localEndVal = startVal;
      }
    },
    pauseResume() {
      if (this.paused) {
        this.resume();
        this.paused = false;
      } else {
        this.pause();
        this.paused = true;
      }
    },
    pause() {
      cancelAnimationFrame(this.rAF);
    },
    resume() {
      this.startTime = null;
      this.localDuration = +this.remaining;
      this.localStartVal = +this.printVal;
      requestAnimationFrame(this.count);
    },
    reset() {
      this.startTime = null;
      cancelAnimationFrame(this.rAF);
      this.displayValue = this.formatNumber(this.startVal);
    },
    count(timestamp) {
      if (!this.startTime) this.startTime = timestamp;
      this.timestamp = timestamp;
      const progress = timestamp - this.startTime;
      this.remaining = this.localDuration - progress;

      if (this.useEasing) {
        if (this.countDown) {
          this.printVal =
            this.localStartVal -
            this.easingFn(
              progress,
              0,
              this.localStartVal - this.localEndVal,
              this.localDuration,
            );
        } else {
          this.printVal = this.easingFn(
            progress,
            this.localStartVal,
            this.localEndVal - this.localStartVal,
            this.localDuration,
          );
        }
      } else {
        if (this.countDown) {
          this.printVal =
            this.localStartVal -
            (this.localStartVal - this.localEndVal) *
              (progress / this.localDuration);
        } else {
          this.printVal =
            this.localStartVal +
            (this.localEndVal - this.localStartVal) *
              (progress / this.localDuration);
        }
      }
      if (this.countDown) {
        this.printVal =
          this.printVal < this.localEndVal ? this.localEndVal : this.printVal;
      } else {
        this.printVal =
          this.printVal > this.localEndVal ? this.localEndVal : this.printVal;
      }

      this.displayValue = this.formatNumber(this.printVal);
      if (progress < this.localDuration) {
        this.rAF = requestAnimationFrame(this.count);
      } else {
        this.$emit('callback');
      }
    },
    isNumber(val) {
      return !isNaN(parseFloat(val));
    },
    formatNumber(num) {
      num = num.toFixed(this.decimals);
      num += '';
      const x = num.split('.');
      let x1 = x[0];
      const x2 = x.length > 1 ? this.decimal + x[1] : '';
      const rgx = /(\d+)(\d{3})/;
      if (this.separator && !this.isNumber(this.separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + this.separator + '$2');
        }
      }
      return this.prefix + x1 + x2 + this.suffix;
    },
  },
  mounted() {
    if (this.autoplay) {
      this.start();
    }
    const self = this;
    this.$emit('mountedCallback');
  },
  destroyed() {
    cancelAnimationFrame(this.rAF);
  },

  render(h) {
    return (
      <span>
        {+this.remaining > 0 && this.gap > 10 ? (
          <span>{this.displayValue}</span>
        ) : (
          <CountScrollUp
            startVal={this.localEndVal}
            endVal={this.endVal}
          ></CountScrollUp>
        )}
      </span>
    );
  },
  // },
};
</script>

<style></style>
