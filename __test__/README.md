# 作业帮新物流后台系统--帮助文档

> 在迁移TypeScript中需要处理的问题
### 1. 原项目中，有大量v-if，v-for用在一个组件的写法，影响性能并提示了警告，后面应该改为返回一个computed属性,在属性中进行过滤  
### 2. 目前需要将vue组件内的script标签更改为ts语言，加上装饰器  

### 以上的问题，后续做需求时逐渐接入就可以，因为ts语法检查只会提示类型报错，不影响项目编译运行
<br><br>

> TypeScript开发规范
### 1. 通用的声明文件定义在了/src/types文件夹下
### 2. 写新的组件时，应明确指定变量的数据类型，特别是对象的数据结构
<br><br><br><br>


## 帮助文档
> 项目基于 vue-cli3.0

1.安装 yarn

> **npm install -g yarn**

> **yarn config set registry 'https://registry.npm.taobao.org'**

2.项目初始化

> **yarn install**

3.项目运行

> **yarn dev**

4.使用远程 mock 数据

> **yarn dev**

5.使用测试服务器数据

- **yarn dev testxx**
- 需要手动在 common/service.js 里手动设置 cookie
- 地址目标服务器的后台登录地址

```javascript
// 如果是本地请求测试服务器地址 请修改cookie
let PHPSESSID = "ST-1530792823r6mll81475cbLb9sBe4";
let ZYBUUAP = "UUAP_XHQNWph4W7rzTDfRdTBZZV0dvXkVm1Oexwoxg76eC3Mhlpo5HHUGA_qU0x8fsp2_";
```

6.推送代码到测试服务器

> **yarn build --config testxx**

7.线上部署

> **yarn build**

## 命名规范

1.文件夹命名以中划线命名

> _xxx-xx.vue/css/js_

2.页面中的 class 以下划线命名

> _xxx_xx_

3.函数名和变量名以驼峰命名法命名

> searchForm

4.目录结构

> views 里面 VUE 文件与 static(less),router(路由),components(组件),api(接口请求) 一一对应

5.多层结构

> 采用文件夹结构对应

## 接口请求 service

1.get 示例

```javascript
  this.$service.get(ReportApi.courselist, params)
    .then(res => {
      console.log(res);
    });
  },
```

2.post 示例

```javascript
this.$service.post(API.getEntityBasicData, params).then(res => {
  console.log(res);
});
```

3.特殊情况

> 请求数据不做任何效验直接返回

> 多传递一个参数 1

```javascript
  this.$service.get(ReportApi.courselist, params,1)
    .then(res => {
      console.log(res);
    });
  },
```

## 权限系统对接

### 配置菜单栏

1.物流系统菜单栏

- 原料管理
  - 原料信息管理
- 入库管理
  - 采购管理
  - 采购入库验收
  - 采购入库记录
  - 退货入库验收
  - 退货入库记录
- 出库管理
  - 待发货订单
  - 待打包发货单
  - 打包装箱
  - 发货记录
- 库存管理
  - 原料库存管理
  - 产品库存管理

**涉及到一级菜单、二级菜单的名称或路由配置信息的修改需同步权限系统的配置**

2.配置文件为

```javascript
routeConfig: [
  {
    path: "/in-storage",
    title: "入库管理",
    icon: "el-icon-menu",
    collapse: true,
    asideCollapse: false,
    children: [
      {
        authId: 51,
        authName: "采购管理",
        authUrl: "/in-storage/purchase-manage",
        title: "采购管理",
        path: "/in-storage/purchase-manage"
      },
      {
        authId: 52,
        authName: "采购入库记录",
        authUrl: "/in-storage/purchase-record",
        title: "采购入库记录",
        path: "/in-storage/purchase-record"
      },
      {
        authId: 53,
        authName: "退货入库记录",
        authUrl: "/in-storage/return-storage",
        title: "退货入库记录",
        path: "/in-storage/return-storage"
      },
      {
        authId: 54,
        authName: "采购入库验收",
        authUrl: "/in-storage/purchase-check",
        title: "采购入库验收",
        path: "/in-storage/purchase-check"
      },
      {
        authId: 55,
        authName: "退货入库验收",
        authUrl: "/in-storage/return-check",
        title: "退货入库验收",
        path: "/in-storage/return-check"
      }
    ]
  },
  {
    path: "/category-manage",
    title: "原料管理",
    icon: "el-icon-menu",
    collapse: true,
    asideCollapse: false,
    children: [
      {
        authId: 56,
        authName: "原料信息管理",
        authUrl: "/category-manage/category-manage",
        title: "原料信息管理",
        path: "/category-manage/category-manage"
      }
    ]
  },
  {
    path: "/out-storage",
    title: "出库管理",
    icon: "el-icon-menu",
    collapse: true,
    asideCollapse: false,
    children: [
      {
        authId: 57,
        authName: "打包装箱",
        authUrl: "/out-storage/sorting-loading",
        title: "打包装箱",
        path: "/out-storage/sorting-loading"
      },
      {
        authId: 58,
        authName: "待发货订单",
        authUrl: "/out-storage/shipping-operation",
        title: "待发货订单",
        path: "/out-storage/shipping-operation"
      },
      {
        authId: 59,
        authName: "待打包发货单",
        authUrl: "/out-storage/shipping-status",
        title: "待打包发货单",
        path: "/out-storage/shipping-status"
      },
      {
        authId: 60,
        authName: "发货记录",
        authUrl: "/out-storage/send-record",
        title: "发货记录",
        path: "/out-storage/send-record"
      }
    ]
  },
  {
    path: "/storage-manage",
    title: "库存管理",
    icon: "el-icon-menu",
    collapse: true,
    asideCollapse: false,
    children: [
      {
        authId: 61,
        authName: "原料库存管理",
        authUrl: "/storage-manage/entity-manage",
        title: "原料库存管理",
        path: "/storage-manage/entity-manage"
      },
      {
        authId: 62,
        authName: "产品库存管理",
        authUrl: "/storage-manage/product-manage",
        title: "产品库存管理",
        path: "/storage-manage/product-manage"
      },
      {
        authId: 63,
        authName: "贴码",
        authUrl: "/storage-manage/attachlabel",
        title: "贴码",
        path: "/storage-manage/attachlabel"
      }
    ]
  }
];
```

## npm 与 yarn 对应

- 安装 npm install ---- yarn
- 卸载 npm uninstall ---- yarn remove
- 全局安装 npm install xxx --global ---- yarn global add xxx
- 安装包 npm install xxx -save ---- yarn add xxx
- 开发模式安装包 npm install xxx -save-dev ---- yarn add xxx -dev
- 更新 npm update -save ---- yarn upgrade
- 全局更新 npm update -global ---- yarn global upgrade
- 卸载 npm uninstall ---- yarn remove xx
- 清除缓存 npm cache clean ---- yarn cache clean
- 重装 rm -rf node_modules && npm insatll ---- yarn upgrade

## 代码书写

1. 提倡 es6
2. 页面组件拆分
3. 搜索，查询，表格，翻页，抽屉，弹层已经封装，参考示例页
4. 页面 css 抽离
5. data 与 props 数据过多请单独提出
6. 慎用 vuex
7. env.deveplopment 开发环境配置
8. env.production 生产环境配置

## 公共 JS

> utils.js

## 分支与代码提交

1.新建分支

> **git checkout -b '新分支' origin/dev**

2.提交修改

> **git add .**

> **git commit -m '写详细'**

3.合并分支

> **git merge dev**

4.提交代码

> 打开 gitlab 提交 merge request

> 不允许自己合并代码，必须经过代码 review

5.提测分支

> 基于 dev 分支开启一个自己的分支并在自己的分支上开发相关的业务需求，比如：**git checkout -b [branch]**

> 开发完后把自己的分支代码推送到远程仓库上：**git push origin [branch]**

> 本地自测完毕并保证没问题后切换到 qa_test 分支：**git checkout qa_test**

> 更新 qa_test 测试分支远程最新的代码：**git pull origin qa_test**

> 再切换到自己的分支：**git checkout [branch]**

> 合并 qa_test 分支的最新代码到自己的分支(注意是往自己的分支合并而不是直接往提测分支合并): **git merge qa_test**

> 本地自测完毕并保证没问题后再切换到 qa_test 分支：**git checkout qa_test**

> 合并自己分支的代码到 qa_test 测试分支：**git merge [branch]**

> 推送到 qa_test 测试分支远程仓库：**git push origin qa_test**

6.上线

> 上线前检查当前分支是否最新代码

## last

> 未完待续

> 如有问题，请联系我  *[xiechangchun@zuoyebang.com](xiechangchun@zuoyebang.com)*

