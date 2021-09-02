import { defineStore } from 'pinia';
// import { store } from '/@/store';

import type { UserInfo, CvInfo, CvModule } from '#/store';

import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';

type UserState = {
  user: UserInfo;
  info: CvInfo;
  remains: CvModule[];
};

export const userStore = defineStore({
  id: 'user',
  state: (): UserState => state,
  getters,
  actions,
});
