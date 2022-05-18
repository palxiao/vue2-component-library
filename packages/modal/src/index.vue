
<template>
  <div class="zk-modal">
    <a-modal v-bind="$attrs" :id="modalId" ref="modalmain" v-model="zkVisible" :class="['zk-modal-main', className]" :centered="centered" :dialogClass="'zk-dialog ' + $attrs.dialogClass || ''" v-on="$listeners">
      <div ref="modalContent" class="zk-modal-content" :style="{ ...$attrs.bodyStyle }">
        <!-- transformHeight 考虑footer高度  -->
        <div ref="content" class="zk-modal-content-child">
          <slot></slot>
        </div>
      </div>
      <!-- 标题 -->
      <slot slot="title" name="title"></slot>
      <slot slot="footer" name="footer"></slot>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'ZkModal',
  // v-model绑定对应的方法，和修改的方法
  model: {
    prop: 'visible',
    event: 'toggleVisible',
  },
  props: {
    top: {
      type: Number | String,
      default: 'auto',
    },
    left: {
      type: Number | String,
      default: 'auto',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
    height: {
      type: Number | String,
      default: 'auto',
    },
    // 弹窗最大高度
    maxHeight: {
      type: Number | String,
      default: '100%',
    },
  },
  data() {
    return {
      isMounted: false,
      getContentHeight: false,
      centered: false,
      modalId: this.initModalId(),
    }
  },

  computed: {
    // 用于和 v-modal 绑定
    zkVisible: {
      get() {
        this.$nextTick(() => {
          // isMounted 用于触发 computed 的更新
          if (this.visible) {
            setTimeout(() => {
              this.getContentHeight = false
              this.isMounted = true
            }, 0)
          } else {
            // 动画时间持续300毫秒后重置样式
            setTimeout(() => {
              this.getContentHeight = false
              this.isMounted = false
            }, 300)
          }
        })
        return this.visible
      },
      set(val) {
        // 通过内部 v-model 尝试修改父组件的值，如果父组件的值没改变，那么弹窗也不会关闭
        // 该功能用于实现 a-modal :visible 的功能
        this.$emit('toggleVisible', val)
      },
    },
  },

  methods: {
    initModalId() {
      const rand = Math.random().toString()
      return 'zkmodal' + Number(rand.substr(3, rand.length) + Date.now()).toString(36)
    },

    // 根据传入高度，页面高度，弹窗头部和底部高度，计算相对的距离
    calcHeight(height, documentHeight, headHeight, footerHeight) {
      let propMaxHeight = height
      let unit = 'px'
      let computedHeight = ''
      if (typeof height === 'string') {
        propMaxHeight = parseFloat(height)
        unit = height.replace(propMaxHeight, '') || 'px'
      }
      switch (unit) {
        case 'px':
          computedHeight = (propMaxHeight - headHeight - footerHeight).toFixed(1) + 'px'
          break
        case '%':
        case 'vh':
          // 计算弹窗的头部和底部占据屏幕的百分比
          // let modalVh = (headHeight + footerHeight) / documentHeight * 100
          // 百分比和vh其实都是根据屏幕定位，最后转换为vh，最大限度支持缩放
          computedHeight = documentHeight * (propMaxHeight / 100) - (headHeight + footerHeight) + 'px'
          break
      }
      return computedHeight
    },
  },
}
</script>

<style lang="less" scoped>
@import url('./style.less');
</style>
