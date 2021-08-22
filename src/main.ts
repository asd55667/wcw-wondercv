import { createApp } from 'vue';
import { setupRouter } from '@/router';
import App from './App.vue';

import { registerGlobComp } from '@/components/registerGlobComp';

import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

setupRouter(app);

registerGlobComp(app);

app.mount('#app');
