import type { App } from 'vue';

import {
  // Need
  Button,
  Input,
  Layout,
  Carousel,
  Form,
  Popover,
  Divider,
} from 'ant-design-vue';

const compList = [
  //
  Button,
  Input,
  Layout,
  Carousel,
  Form,
  Popover,
  Divider,
];

export function registerGlobComp(app: App) {
  compList.forEach((component) => {
    // app.component(component.name || component.displayName, component);
    app.use(component);
  });
}
