# Modal 模态窗

![Version](https://img.shields.io/npm/v/@palvue/modal)
![Size](https://img.shields.io/bundlephobia/min/@palvue/member-selector?color=%2344cc88)

演示一个使用外部依赖的组件，打包只会包含组件代码，无法独立使用。

## 安装

```bash
npm i @palvue/modal
```

## 引入

```bash
import Modal from '@palvue/modal'
Vue.use(Modal)
```

## 使用

#### 代码演示

<br />

<template>
  <div class="container">
    <a-button @click="show = true">点击打开模态窗</a-button>
    <zk-modal v-model="show" >测试弹窗</zk-modal>
  </div>
</template>

<script>

export default {
  data () {
    return {
      show: false
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.container {}
</style>

<!-- 代码片段 -->

```vue
<template>
  <a-button @click="show = true">点击打开模态窗</a-button>
  <zk-modal v-model="show" />
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {},
  methods: {},
}
</script>
```

<!-- ## API -->

# 组件使用说明 - ZkModal

## Props

<!-- @vuese:ZkModal:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|top|-|—|`false`|auto|
|left|-|—|`false`|auto|
|visible|-|`Boolean`|`false`|false|
|className|-|`String`|`false`|-|
|height|-|—|`false`|auto|
|maxHeight|弹窗最大高度|—|`false`|100%|

<!-- @vuese:ZkModal:props:end -->


## Events

<!-- @vuese:ZkModal:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|toggleVisible|通过内部 v-model 尝试修改父组件的值，如果父组件的值没改变，那么弹窗也不会关闭 该功能用于实现 a-modal :visible 的功能|-|

<!-- @vuese:ZkModal:events:end -->


## Slots

<!-- @vuese:ZkModal:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|
|title|标题|-|
|footer|-|-|

<!-- @vuese:ZkModal:slots:end -->


