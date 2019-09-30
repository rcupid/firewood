### dispatch 和broadcast

```javascript
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  },
  //自定义
  dispatch2(componentName, eventName, params) {
    let parent = this.$parent || this.$root;
    let name= parent.$options.componentName
    //条件说明：
    // 1.老爹存在 并且老爹的名字和要寻找的名字不一样，则继续寻找
    // 结束场景：
    // 1.老爹不寻在
    // 2.找到了

    while (parent&&(!name||name!==componentName)) {
      parent = parent.$parent;
      if(parent){
        name=parent.$options.componentName
      }
    }

    if(parent){
       parent.$emit.apply(parent, [eventName].concat(params));
    }
  },
  //自定义
  boradcast2(eventName, params) {
    boradcast2.apply(this, [eventName].concat(params));
  }
};
//自定义
function boradcast2(eventName, params) {
  this.$children.forEach((item) => {
    item.$emit.apply(item, [eventName].concat(params));
    //GET:这里很巧妙的讲this和item绑定起来
    boradcast2.apply(item, [eventName].concat(params));
  });
}
```
