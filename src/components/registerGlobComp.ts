import type { App } from 'vue';

import {
  // Need
  Button,
  Input,
  Layout,
  Carousel,
  Form,
} from 'ant-design-vue';

const compList = [Button.Group];

export function registerGlobComp(app: App) {
  compList.forEach((component) => {
    app.component(component.name || component.displayName, component);
  });

  app.use(Input).use(Button).use(Carousel).use(Form).use(Layout);
}
