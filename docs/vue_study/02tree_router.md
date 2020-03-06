### 组件树
自己调用自己，注意点：必须有name属性，可以通过name属性访问到自己

### Router
- 解析路由配置，生成map
- 监听URL变化
- 时间监听的hashchange事件
- 声明注册router-link,router-view
- 模式匹配是怎么做到的(path-to-regexp)


实现插件
- this.$router在哪里挂载的
- 声明$route
- 注册组件
- init
```javascript
// 为了避免Vue打包到vue-router里面 ，通过传参方式
let Vue
Vuerouter.install=(_Uue,options)={
  // 保存构造函数
  Vue=_Vue
   //为什么通过mixins挂载，仔细体会一下，此处拿不到Vue的实例
  Vue.mixin({
    beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
       //这里能拿到Vue的实例，方便拿到路由器实例
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })

  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)
}
```

- current保存当前的url地址，只要url发生变化，相关的会重新render
- 纯粹的h函数写法  h('a',{attrs:{}},['hello']) //h('tag',dataObject,children)
