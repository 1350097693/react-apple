const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const prodConfig = {
  mode: 'production',
  plugins: [
     // 分离html，并且引入打包好的js文件
     new htmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    // 清除上一次打包的文件
    new CleanWebpackPlugin(),
  ]
};

module.exports = merge(prodConfig, baseConfig);
 