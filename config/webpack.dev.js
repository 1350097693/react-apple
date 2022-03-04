const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    // static允许我们在DevServer下访问该目录的静态资源
    // 简单理解来说 当我们启动DevServer时相当于启动了一个本地服务器
    // 这个服务器会同时以static-directory目录作为跟路径启动
    // 这样的话就可以访问到static/directory下的资源了
    // static: {
    //   directory: path.join(__dirname, '../public'),
    // },
    // 热更新
    hot: true,
    // 是否开启代码压缩
    compress: true,
    // 启动的端口
    port: 3001,
    historyApiFallback: {
      index: '/index.html'
    },
  },
};

module.exports = merge(devConfig, baseConfig);
