
# 前端vue2组件库

### Start
```
npm run init
```
进入 `bin/script/cp` 修改发布文档的配置，这里使用githubPages演示，docs分支为静态目录

### Ready

使用时需要切换好npm源，建议使用nrm

```
nrm use npm
```

### Run

增加组件:

```
npm run add
```

组件会自动创建在`packages`目录下

运行演示: 
```
yarn dev / npm run dev
```

自动生成组件api文档
```
yarn api / npm run api
```

### 按规范提交你的代码

```
yarn c / yarn commit
npm run c / npm run commit
```
查看组件库版本记录：
```
yarn clog / npm run clog
```

### 编译组件

```npm run build```

### 发布组件

```npm run lp```

### 编译并发布文档

```yarn docs:deploy / npm run docs:deploy```
