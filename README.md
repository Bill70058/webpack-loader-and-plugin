<!--
 * @Author: bill Lin_k_Bill@163.com
 * @Date: 2022-12-18 14:39:05
 * @LastEditors: bill Lin_k_Bill@163.com
 * @LastEditTime: 2022-12-18 16:00:57
 * @FilePath: /webpack-loader-note/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## webpack：loader和plugin实现

[参考文章](https://juejin.cn/post/6976052326947618853#heading-13)

关于[手动搭建webpack](https://github.com/Bill70058/webpack-note)

### 文件结构
- company-loader: 实现自定义的loader
- OutLogPlugin：实现自定义的plugin
- note-index: 主文件，demo引入实现

### 命令
> 进入主文件note-index

``cd note-index``
> 下载依赖

``npm i ``
> 打包

``npm run build``

### 引入loader依赖

这里直接引入了本地文件，通过path.revolve找到文件地址，也可以通过``npm link``将依赖暴露到全局再到目标文件夹内引入，但是这种方式每次更新依赖都要重新引入一次，太麻烦，所以这里直接引入本地文件