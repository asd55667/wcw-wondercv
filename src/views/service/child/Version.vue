<template>
  <div class="versions pr">
    <div
      :class="['case pr transition', versionIdx === i ? 'active' : '']"
      v-for="i in 3"
      :key="i"
      @mouseenter="versionIdx = i"
    >
      <div class="content pa">
        <div class="top pa transition">
          <div class="title pa">实习版</div>
          <div class="subtitle pa">适用于求职实习机会的在校生</div>
        </div>
        <div class="icon"></div>
        <div class="txt">
          <p class="pr">
            <i class="el-icon-check"></i>
            显著提升互联网及商科求职成功率
          </p>
          <p class="pr">
            <i class="el-icon-check"></i>
            零经验和实习大牛，都可以帮到你
          </p>
          <p class="pr">
            <i class="el-icon-check"></i>
            往期用户平均2-3天收到面试邀请
          </p>
        </div>
      </div>
      <img
        class="avatar pa transition"
        src="https://files.wondercv.com/pc/mentor/caseIcon1.png"
        alt="实习版"
      />
      <div class="activeContent pa">
        <div class="desc">
          <p>
            无论你是否零经验在找第一份实习，还是不知道哪些是关键信息哪些可以不用写，在这里你都可以得到最匹配自身和岗位的简历。
          </p>
          <p>
            站在用人方的角度为你撰写简历，往期用户平均投递后2-3天收到面试邀请
          </p>
        </div>
        <a href="" class="btn pa">立即优化</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      versionIdx: 1,
    }
  },
}
</script>

<style lang="less" scoped>
.versions {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1032px;
  height: 500px;
  margin: 180px auto 0;
  .case {
    height: 418px;
    background-color: #f8f8f8;
    box-sizing: border-box;
    width: 306px;
    overflow: hidden;
    .content {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      .top {
        padding-top: 48px;
        z-index: 2;
        left: 0;
        right: 0;
        top: 0;
        height: 60px;
        .title {
          line-height: 28x;
          margin-bottom: 14px;
          padding-left: 114px;
        }
        .subtitle {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          line-height: 18px;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 700;
          color: #9c9c9c;
        }
      }
      .icon {
        width: 100px;
        height: 216px;
        margin: 36px auto;
      }
      .txt {
        opacity: 1;
        line-height: 28px;
        padding-left: 32px;
        color: #404040;
        p {
          font-size: 14px;
          margin: 0;
          i {
            font-weight: 1000;
            color: #ff4f4c;
            margin-right: 12px;
          }
        }
      }
    }
    .avatar {
      width: 100px;
      height: 100px;
      top: 144px;
      left: 50%;
      margin-left: -50px;
      z-index: 2;
    }
    .activeContent {
      top: 176px;
      left: 48px;
      width: 324px;
      opacity: 0;
      .desc {
        line-height: 22px;
        margin-bottom: 48px;
        color: #404040;
        p {
          margin-bottom: 22px;
        }
      }
    }
  }
}
.active {
  position: relative;
  width: 420px !important;
  height: 468px !important;
  background-color: #fff !important;
  box-shadow: 0 10px 36px 0 hsla(0, 0%, 86.7%, 0.5);
  border-radius: 8px;
  background: none;
  // padding-top: 56px;
  margin-top: -25px;
  overflow: hidden;
  box-sizing: border-box;
  .top {
    padding-top: 56px !important;
    margin-left: 176px !important;
    .title {
      padding-left: 0 !important;
    }
    .subtitle {
      left: 0 !important;
      transform: translateX(0) !important;
    }
  }
  .txt {
    opacity: 0 !important;
  }
  .avatar {
    left: 48px !important;
    top: 36px !important;
    margin-left: 0 !important;
  }
  .activeContent {
    opacity: 1 !important;
  }
}
.transition {
  transition: all 0.3s;
}
</style>
