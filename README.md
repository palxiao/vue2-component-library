
# 前端vue2组件库

[在线预览](https://palxiao.github.io/vue2-component-library/)

### Start
```
npm run init
```
进入 `bin/script/cp` 修改发布文档的配置，这里使用githubPages演示，docs分支为静态目录
demo/docs/.vuepress/enhanceApp.js 修改发布路由
bin/add.js 修改你的包作用域

### Ready

使用时需要切换好npm源，建议使用nrm

```
nrm use npm
```

### 开始创建你的组件

增加组件:

```
npm run add
```

组件会自动创建在`packages`目录下

运行演示: 
```
yarn dev / npm run dev
```

修改组件后运行命令自动生成api文档
```
yarn api / npm run api
```

### 提交你的代码

```
yarn c / yarn commit / npm run c
```
查看组件库版本记录：
```
yarn clog / npm run clog
```

### 编译组件

```npm run build```

### 发布组件

```npm run lp```

### 编译并发布在线文档

```yarn docs:deploy / npm run docs:deploy```
