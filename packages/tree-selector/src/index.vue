<!--
 * @Author: ShawnPhang
 * @Date: 2021-12-21 17:47:25
 * @Description: 树形人员选择器
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2022-05-18 15:06:51
 * @site: book.palxp.com
-->
<template>
  <div class="container">
    <el-tree ref="tree" :data="data" show-checkbox :render-after-expand="false" :node-key="nodeKey"> </el-tree>
  </div>
</template>

<script>
import elTree from 'element-ui/packages/tree'
import 'element-ui/packages/theme-chalk/src/tree.scss'
import 'element-ui/packages/theme-chalk/src/icon.scss'
export default {
  name: 'TreeSelector',
  components: {
    elTree,
  },
  props: {
    // nodeKey
    nodeKey: {
      default: 'id',
    },
  },
  data() {
    return {
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
            },
            {
              id: 6,
              label: '二级 2-2',
            },
          ],
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
            },
            {
              id: 8,
              label: '二级 3-2',
            },
          ],
        },
      ],
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="less" scoped>
// @import url('~element-ui/packages/theme-chalk/src/tree.scss');
// @import url('~element-ui/packages/theme-chalk/src/icon.scss');
@import url('./style.less');
</style>
