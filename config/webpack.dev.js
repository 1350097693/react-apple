const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const Webpack = require('webpack')

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    // static允许我们在DevServer下访问该目录的静态资源
    // static: './dist',
    // 热更新
    hot: true,
    // 是否开启代码压缩
    // compress: true,
    // 启动的端口
    port: 3001,
    historyApiFallback: {
      index: '/index.html'
    },
  },
  plugins:[
    new Webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(devConfig, baseConfig);
