/*
 * @Author: bill Lin_k_Bill@163.com
 * @Date: 2022-12-18 14:15:40
 * @LastEditors: bill Lin_k_Bill@163.com
 * @LastEditTime: 2022-12-18 14:17:26
 * @FilePath: /webpack-loader-note/company-loader/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = function (source) {
  const options = this.getOptions() // 获取 webpack 配置中传来的 option
  this.callback(null, addSign(source, options.sign))
  return
}

function addSign(content, sign) {
  return `/** ${sign} */\n${content}`
}
