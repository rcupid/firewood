### GET:Runtime Only和Runtime + Compiler
- (Runtime Only和Runtime + Compiler)[http://nferzhuang.com/vue%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90%E5%87%86%E5%A4%87-runtime-only%E5%92%8Cruntime-compiler/]

- 先判断是否有template属性
- 如果没有，则直接通过el中的html代码作为模版
- 如果有，判断是否是字符串(非字符串的形式暂不讨论)
- 是字符串的情况下，是否以#字符开头
- 如果是，则获取对应id的innerHTML作为模版
- 如果不是以#字符开头，则直接作为作为模版

### GET：el不能挂在到body和html上面
原因：在render阶段,通过`createElement`创建了`<div id="app"></div>`(创建的标签，已经添加了各种属性和方法)之后，替换掉`index.html`中的`<div id="app"></div>` 标签。`index.html`中的`<div id="app"></div>`起到了“占位”的作用



### $mount部分
```javascript
// public mount method
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}
```

### GET:template模板最终都最被转成render
```javascript
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el
  if (!vm.$options.render) {
    //GET:如果没有render函数，创建一个render函数
    vm.$options.render = createEmptyVNode
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        )
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        )
      }
    }
  }
  callHook(vm, 'beforeMount')

  let updateComponent
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = () => {
      const name = vm._name
      const id = vm._uid
      const startTag = `vue-perf-start:${id}`
      const endTag = `vue-perf-end:${id}`

      mark(startTag)
      const vnode = vm._render()
      mark(endTag)
      measure(`vue ${name} render`, startTag, endTag)

      mark(startTag)
      vm._update(vnode, hydrating)
      mark(endTag)
      measure(`vue ${name} patch`, startTag, endTag)
    }
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
  hydrating = false

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
```