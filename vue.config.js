const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
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
    proxy: {
      '/': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/': '/',
        },
        headers: {
          Connection: 'keep-alive',
        },
      },
    },
    // proxy: 'http://localhost:8081',
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
  },

  chainWebpack: config => {
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        nprogress: 'NProgress',
        'vue-quill-editor': 'VueQuillEditor',
        quill: 'quill',
        vuex: 'Vuex',
      })
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })

    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main.js')
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  },
}
