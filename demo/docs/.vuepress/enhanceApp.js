/*
 * @Author: ShawnPhang
 * @Date: 2021-12-21 13:58:24
 * @Description: 配置文件
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2022-05-18 15:34:26
 * @site: book.palxp.com
 */
import VueRouter from 'vue-router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Modal from '@palvue/modal'
import TreeSelector from '@palvue/tree-selector'
export default function ({ Vue, router }) {
  Vue.use(Antd)
  Vue.use(Modal)
  router = new VueRouter({
    ...router.options,
    // mode: 'hash'
  })

  Vue.use(TreeSelector)
}
