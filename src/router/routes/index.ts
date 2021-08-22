import type { RouteRecordRaw } from 'vue-router';

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/Login.vue'),
  meta: {
    title: 'routes.login',
  },
};

export const EditorRoute: RouteRecordRaw = {
  path: '/cvs',
  name: 'Editor',
  component: () => import('@/views/editor/index.vue'),
  meta: {
    title: 'routes.cvs',
  },
};
