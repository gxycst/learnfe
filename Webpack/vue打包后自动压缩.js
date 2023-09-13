const FileManagerWebpackPlugin = require('filemanager-webpack-plugin')
function getNowTimeStr() {
  var myDate = new Date(); //实例一个时间对象；
  return `${myDate.getFullYear()}${myDate.getMonth() + 1}${myDate.getDate()}${myDate.getHours()}${myDate.getMinutes()}${myDate.getSeconds()}`
}
module.exports = {
  configureWebpack: config => {
    config.devtool = 'source-map';
    if (process.env.NODE_ENV !== 'devserver') {
      config.plugins.push(
        new FileManagerWebpackPlugin({
          events: {
            onEnd: {
              mkdir: ['./dist'],
              delete: [
                './dist/*.dist.zip', // 删除之前已经存在的压缩包
              ],
              archive: [
                { source: './dist', destination: './dist/' + process.env.NODE_ENV + '-' + getNowTimeStr() + '.dist.zip' },
              ]
            }
          },
        })
      )
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '中国建设银行'
        return args
      })
  },

  productionSourceMap: false,
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `
              @import "@/assets/style/variables.scss";
              @import "@/assets/style/mixin.scss";
              @import "@/assets/style/reset.scss";
              @import "@/assets/style/extend.scss";
              `
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100, // 换算的基数1920/100
            minPixelValue: 2,
            propList: ['*']
          })
        ]
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    open: true
  }
}
