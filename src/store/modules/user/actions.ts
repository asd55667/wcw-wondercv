import { nextTick } from 'vue';

import type { UserInfo } from '#/store';
import { getUserInfo, updateBasic } from '@/api';

export const actions: any = {
  async authLogin(user: UserInfo) {
    this.user = user;

    const uid = window.localStorage.getItem('uid');
    if (!uid) return;

    const res = await getUserInfo(uid);
    this.info = res.data;
  },

  logout() {
    this.user = {};
    this.info = {};
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('refresh_token');
    window.localStorage.removeItem('uid');
  },

  // refresh exist item's update time, push new item to bucket
  async updateExperience(payload: any) {
    const {
      info,
      info: { basic },
    } = this;
    const { tag, item } = payload;

    const { id } = this.remains.filter((v: any) => v.tag === tag)[0];
    if (!basic.imported.includes(id)) basic.imported.push(id);

    const idx = info[tag].indexOf(item);
    if (idx !== -1) info[tag][idx].update = new Date();
    else {
      item.update = new Date();
      info[tag].push(item);
    }

    const uid = window.localStorage.getItem('uid');
    if (!uid) return;
    updateBasic(uid, this.info.basic);
  },

  async updateAvatar(payload: any) {
    this.info.basic.user.avatar = payload;
    const uid = window.localStorage.getItem('uid');

    // console.log(state.info.basic);
    nextTick(() => {
      if (uid) updateBasic(uid, this.info.basic);
      // console.log(1, this.info.basic);
    });
  },

  // remove item from bucket
  delModuleItem(idx: number) {
    const { imported } = this.info.basic;
    // const tag = this.remains[imported[idx] - 1].tag
    // this.info[tag].forEach(v => (v.ref = false))
    imported.splice(idx, 1);
  },

  resetModules(imported: number[]) {
    this.info.basic.imported = imported;
  },

  // update all
  manageExperience(payload: any) {
    const { tag, content } = payload;
    const { imported } = this.info.basic;

    // any(ref) === 1, imported exp; all(ref) == 0 , pop imported exp
    const idx = this.remains.filter((v: any) => v.tag === tag)[0].id;
    const importIdx = imported.indexOf(idx);
    let count = 0;

    for (const item of content) {
      if (item.ref) {
        if (importIdx === -1) {
          imported.push(idx);
          break;
        }
      } else count += 1;
    }

    // remove empty bucket
    if (importIdx !== -1 && count === content.length) imported.splice(importIdx, 1);
    this.info[tag] = content;
  },
};
