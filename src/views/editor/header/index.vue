<template>
  <div class="pc-nav">
    <!-- <h2>{{ this.$route.params.usrid }}</h2> -->
    <Header>
      <div class="left" slot="left">
        <router-link :to="{ path: '/cvs' }" class="mycv">
          <i class="el-icon-arrow-left"></i>
          <div>我的简历</div>
        </router-link>
        <div class="edit">
          <span class="name">吴承炜</span>
          <i class="iconfont icon-bianji"></i>
        </div>
      </div>
      <div class="middle" slot="middle">
        <div style="display:inline-flex;">
          <hide>
            <div slot="content">
              此刻有
              <CountUp
                class="number"
                :startVal="Number(8127)"
                :endVal="peoples"
              ></CountUp>
              <!-- <span class="number">{{ peoples }}</span>  -->
              位求职者在超级简历陪你
            </div>
            <div slot="hide" class="discuss">
              <h1>加入校友群讨论</h1>
              <span class="desc">你有 264 个校友已加入超级校友群</span>
              <img
                src="https://files.wondercv.com/image/app-download-group.png"
                alt=""
              />
              <span class="desc1">扫码下载APP 获取校友内推资源</span>
            </div>
          </hide>
        </div>
      </div>

      <div class="right" slot="right">
        <div class="btn-wrap">
          <div class="translation" @click="translation">翻译</div>
          <hide class="send">
            <div slot="content" class="hover-icon">
              发送
            </div>
            <div slot="hide" class="share-wrap">
              <share-cv @sendToEmail="sendToEmail($event)"></share-cv>
            </div>
          </hide>
          <hide class="more">
            <div slot="content" class="hover-icon">
              <i class="el-icon-more"></i>
            </div>
            <div slot="hide">
              <div class="cv-option">
                <div
                  class="cv-list"
                  v-for="item in options"
                  :key="item.name"
                  @click="optionFunc($event, item.id)"
                >
                  <i class="el-icon-delete"></i>{{ item.name }}
                </div>
              </div>
            </div>
          </hide>
        </div>
      </div>
    </Header>
  </div>
</template>

<script>
import Header from '@/layout/Header';
import Hide from '@/views/common/Hide';
import ShareCv from './pendant/ShareCv';

import CountUp from '@/components/CountUp';

import { cloneNode } from '@/utils';

import {
  mapState as mapUserState,
  mapGetters as mapUserGetters,
  mapActions as mapUserActions,
  mapMutations as mapUserMutations,
} from '@/store/helper/user';

import { sendEmail, getFont } from '@/api';

export default {
  components: {
    Header,
    Hide,
    ShareCv,
    CountUp,
  },
  data() {
    return {
      options: [
        { name: '下载文件', id: 1 },
        { name: '打印简历', id: 2 },
        { name: '复制简历', id: 3 },
        { name: '删除', id: 4 },
      ],
      peoples: 1,
      font: 'FZLTCXHJW-normal.js',
    };
  },
  created() {
    // this.downloadCV()
    this.getUserCount();
    getFont(this.font);
  },
  methods: {
    translation() {
      console.log('translate');
    },

    optionFunc(e, id) {
      switch (id) {
        case 1:
          this.downloadCV();
          break;
        case 2:
          this.printCV();
          break;
        case 3:
          this.copyCV();
          break;
        case 4:
          this.deleteCV();
          break;
      }
    },

    generateResumeNode() {
      const resume = cloneNode(document.querySelector('#resume'), false);
      if (!this.info.basic.user.avatar.src) {
        const avatar = resume.querySelector('.avatar');
        avatar.parentNode.removeChild(avatar);
      }
      resume.style.transform = `scale(${(595 / 793) * 1.16})`;
      // resume.style.width = '595px'
      // resume.style.height = '841px'
      const cv = document.querySelector('.cv');
      const height = getComputedStyle(cv, null).height.slice(0, -2);
      resume.style.height = `${+height * 2}px`;
      resume.style.fontFamily = `${this.font.split('-')[0]}`;
      // resume.style.fontFamily = 'WeiRuanYaHei'

      resume.style.letterSpacing = `${1.4}px`;
      return resume;
    },

    sendToEmail(payload) {
      const { email, filename } = payload;
      const resume = this.generateResumeNode();
      let pdf = new window.jspdf.jsPDF('p', 'pt', 'a4', true);

      const msg = this.$message;
      pdf.html(resume, {
        callback: async function(pdf) {
          // const cv = pdf.output('arraybuffer')
          const cv = pdf.output();
          const res = await sendEmail({ cv, email, filename });
          if (res.status !== 200) return msg.error(`发送失败`);
          else {
            msg.success(`${res.data.msg}`);
          }
        },
      });
    },

    downloadCV() {
      const resume = this.generateResumeNode();
      let pdf = new window.jspdf.jsPDF('p', 'pt', 'a4', true);
      // console.log(pdf.getFontList())
      pdf.html(resume, {
        callback: function(pdf) {
          pdf.save('wcw.pdf');
        },
      });
    },

    printCV() {
      window.printJS({
        printable: 'resume',
        type: 'html',
        honorColor: true,
        targetStyles: ['*'],
      });
    },
    copyCV() {},
    deleteCV() {},

    getUserCount() {
      const self = this;
      var socket = io('http://localhost:8081', {
        withCredential: true,
        // transports: ['websocket'],
        // upgrade: false,
      });
      socket.on('getUserCount', function(cnt) {
        self.peoples = cnt;
      });
    },
  },
  computed: {
    ...mapUserState(['info']),
  },
  watch: {
    peoples(newCnt, oldCnt) {},
  },
};
</script>

<style lang="less" scoped>
.pc-nav {
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  background-color: #202329;
  box-sizing: border-box;
  user-select: none;
}
.left {
  line-height: 32px;
  left: 0;
  top: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #efefef;
  .mycv {
    display: flex;
    align-items: center;
    margin-right: 50px;
  }
  .edit {
    .name {
      margin-right: 5px;
    }
  }
  .mycv {
    color: #efefef;
  }
  .mycv:hover,
  .edit:hover {
    color: #fff;
  }
}

.middle {
  color: #efefef;
  // line-height: 56px;
  // left: 50%;
  // transform: translateX(-50%);
  // padding-right: 50px;
  // display: flex;
  // flex: 1;
  .number {
    color: #ff6644;
  }
}
.middle:hover {
  color: #fff;
  .number {
    font-weight: 500;
  }
}

.right {
  display: flex;
  // align-items: center;

  .translation,
  .send,
  .more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 26px;
    padding: 1px 6px;

    border-radius: 15px;
    font-size: 14px;
    color: #fff;
  }
  .translation,
  .more {
    border: 1px solid #797b7e;
    background: #202329;
  }
  .translation:hover,
  .more:hover {
    border: 1px solid #fff;
  }
  .send {
    background-color: #f64;
    border: 1px solid #f64;
    margin: 0 0 0 16px;
    margin-right: 10px;
  }
  .send:hover {
    background-color: #ff856a;
    border: 1px solid #ff856a;
  }
  .hover-icon {
    line-height: 56px;
    width: 55px;
  }
}

.discuss {
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 340px;
  padding: 26px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.13);
  flex-direction: column;
  align-items: center;
  display: flex;
  h1 {
    color: #404040;
    line-height: 32px;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 4px;
  }
  .desc {
    font-weight: 400;
    color: #9c9c9c;
    line-height: 22px;
    margin-bottom: 22px;
    font-size: 14px;
  }
  img {
    width: 176px;
    height: 176px;
    margin-bottom: 10px;
  }
  .desc1 {
    font-weight: 400;
    color: #9c9c9c;
    line-height: 20px;
    font-size: 14px;
  }
}
.share-wrap {
  width: 457px;
  height: 261px;

  position: absolute;
  right: -50px;
  top: 44px;
}

.cv-option {
  width: 170px;
  background: #f9f9f9;
  border-radius: 4px;
  position: absolute;
  bottom: -14px;
  left: 50%;
  display: inline;
  box-shadow: 0 2px 12px 0 hsla(0, 0%, 50.2%, 0.12);
  overflow: hidden;
  transform: translate(-50%, 100%);
  .cv-list {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    height: 53px;
    background: #fff;
    color: #404040;
    font-size: 14px;
    position: relative;
    line-height: 53px;
    text-align: left;
    padding: 10px 0;
    box-sizing: border-box;
  }
  .cv-list::after {
    position: absolute;
    display: block;
    content: '';
    background: rgb(228, 228, 228);
    height: 1px;
    width: 128px;
    bottom: 0;
  }
  .cv-list:last-child::after {
    display: none;
  }
  .cv-list:hover {
    background: #f9f9f9;
  }
}
</style>
