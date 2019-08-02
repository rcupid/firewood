### Vuex

Vuex 中属性，在业务中具体使用的时候报错，提示找不到

```javascript
import { mapGetters, mapAction } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userInfo']),
    userName() {
      this.userInfo.userName //error，会提示this 下面没有 userInfo属性
    }
  }
}
```

解决方案,安装`vuex-class`,`vue-class-component` ，使用`Class` 风格装饰器

- [vuex-class](https://www.npmjs.com/package/vuex-class)
- [vuex-class-component](https://www.npmjs.com/package/vue-class-component)

```javascript
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
@Component
export class MyComp extends Vue {
  @State('foo') stateFoo: string
  @State(state => state.bar) stateBar: string
  @Getter('foo') getterFoo: any
  @Action('foo') actionFoo: any
  @Mutation('foo') mutationFoo: any

  @State foo
  @Getter bar
  @Action baz

  created() {
    this.stateFoo // -> store.state.foo
    this.stateBar // -> store.state.bar
    this.getterFoo // -> store.getters.foo
    this.actionFoo({ value: true }) // -> store.dispatch('foo', { value: true })
  }
}
```

### Vue.prototype 添加全局属性或者方法

在`Vue.prototype`添加全局属性或者方法，提示`this`下面不存在该属性后者方法

解决方案：Vue 官网提供了[增强类型以配合插件使用的解决方案](https://cn.vuejs.org/v2/guide/typescript.html#%E5%A2%9E%E5%BC%BA%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%85%8D%E5%90%88%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8)
配置完毕后，需要重启一下 IDE(比如：vscode)，因为新增的.d.ts 文件，IDE 无感知，重启之后才可以
