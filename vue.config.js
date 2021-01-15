const path = require('path')

module.exports = {
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
  publicPath: './',
}
