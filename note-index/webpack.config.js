/*
 * @Author: bill Lin_k_Bill@163.com
 * @Date: 2022-12-18 14:18:15
 * @LastEditors: bill Lin_k_Bill@163.com
 * @LastEditTime: 2022-12-18 15:39:28
 * @FilePath: /webpack-loader-note/note-index/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const OutLogPlugin = require('../OutLogPlugin')
module.exports = {
  mode: 'none',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OutLogPlugin({
      outFileName: 'buildInfo'
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: path.resolve('../company-loader'),
        options: {
          sign: 'self-component@2022',
        },
      }, ],
    }, ],
  },
}
