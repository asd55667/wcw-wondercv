import type { UserConfig, ConfigEnv } from 'vite';

import { loadEnv } from 'vite';
import { resolve } from 'path';

// import moment from 'moment';
// import pkg from './package.json';

import { createVitePlugins } from './plugins';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// const { dependencies, devDependencies, name, version } = pkg;
// const __APP_INFO__ = {
//   pkg: { dependencies, devDependencies, name, version },

//   lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
// };

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  const isBuild = command === 'build';

  return {
    base: env.VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: `${pathResolve('src')}/`,
        },
        {
          find: /#\//,
          replacement: `${pathResolve('types')}/`,
        },
      ],
    },
    server: {
      // Listening on all local IPs
      host: true,
      port: +env.VITE_PORT,
      // Load proxy configuration from .env
      // proxy: createProxy(VITE_PROXY),
      cors: true,
      proxy: {
        //
        '/login': 'http://localhost:8081',
      },
    },

    plugins: createVitePlugins(env.viteEnv, isBuild),
  };
};
