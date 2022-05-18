/*
 * @Author: ShawnPhang
 * @Date: 2021-12-20 18:38:39
 * @Description: webpack扩展
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2022-05-18 15:48:52
 * @site: book.palxp.com
 */
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';


module.exports = {
  title: 'Vue2组件库',
  themeConfig: {
    nav: [{
      text: '组件',
      link: '/default/'
    }, {
      text: 'Github',
      link: 'https://github.com/palxiao/vue2-component-library'
    }],
    sidebar: [{
      title: '组件',
      collapsable: false,
      children: ['/default/', '/modal/', "/tree-selector/"]
    }]
  },
  base: isProduction ? '/vue2-component-library/' : '/',
  chainWebpack: config => {
    const pkgPath = path.resolve(__dirname, '../../../', 'packages');
    config.resolve.modules.add(pkgPath).add('node_modules');
    config.resolve.alias.set('@palvue', pkgPath);
  },
  markdown: {
    plugins: ['task-lists']
  }
};