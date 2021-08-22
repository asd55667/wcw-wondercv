const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',

  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:8081',
    //     changeOrigin: true,
    //     secure: false,
    //     pathRewrite: {
    //       '^/': '/',
    //     },
    //     headers: {
    //       Connection: 'keep-alive',
    //     },
    //   },
    //   '/fonts': 'http://localhost:8081',
    // },
    proxy: 'http://localhost:8081',
  },

  configureWebpack: {
    resolve: {
      alias: {
        home$: path.resolve(__dirname, 'src/views/modules/home'),
        editor$: path.resolve(__dirname, 'src/views/modules/editor'),
      },
    },
    externals: {
      html2canvas: 'html2canvas',
    },
    // plugins: [
    //   new PrerenderSPAPlugin({
    //     staticDir: path.join(__dirname, 'dist'),
    //     routes: ['/cvs/wcw/editor'],
    //     renderer: new Renderer({
    //       inject: {},
    //       // headless: false,
    //       renderAfterDocumentEvent: 'render-event',
    //       args: ['--no-sandbox', '--disable-setuid-sandbox'],
    //       executablePath: '/Users/Study/python/chromedriver',
    //     }),
    //   }),
    // ],
  },

  chainWebpack: config => {
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js');
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        nprogress: 'NProgress',
        'vue-quill-editor': 'VueQuillEditor',
        quill: 'quill',
        vuex: 'Vuex',
      });
      config.plugin('html').tap(args => {
        args[0].isProd = true;
        return args;
      });
    });

    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main.js');
      config.plugin('html').tap(args => {
        args[0].isProd = false;
        return args;
      });
    });
  },
};
