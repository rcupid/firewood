### $attrs $listeners 巧妙用法
子类
```javascript
<template>
  <div class="input-wrapper">
    <input
      :value="value"
      v-bind="$attrs"
      @input="onInput"
    >
  </div>
</template>
<script>
export default {
  //如果为true ，外层div上面也会被添加上type和placeholder.为false则被禁止掉，只有通过$attrs这个特性才生效
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number]
    }
  },
  methods: {
    onInput (ev) {
      this.$emit('input', ev.target.value)
    }
  }
}
</script>
```
父亲调用
```javascript
<template>
  <div class="hello">
    <!-- 第一种写法 -->
    <ci-input v-model="name" type="text"  placeholder="请输入" />
    <!-- 第二种 写法原理 -->
    <ci-input
      :value="name"
      type="text"
      placeholder="请输入"
      @input="onInput"
    />
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
import CiInput from '@/components/ci-input.vue'
export default {
  name: 'HelloWorld',
  components: {
    CiInput
  },
  props: {
    msg: String
  },
  mounted () {
    console.log(this)
  },
  methods: {
    onInput (value) {
      this.name = value
    }
  }
}
</script>
```

### 隔代相传
A组件
```javascript
<template>
 <div>
   <child-dom
    :foo="foo"
    :coo="coo"
     @upRocket="reciveRocket"
   >
   </child-dom>
 </div>
</template>
<script>
 import childDom from "@/components/ChildDom.vue";
 export default {
   name:'demoNo',
   data() {
     return {
       foo:"Hello, world",
        coo:"Hello,rui"
    }
  },
 components:{childDom},
 methods:{
   reciveRocket(){
      console.log("reciveRocket success")
   }
 }
}
</script>
```

B组件
```javascript
<template>
  <div>
    <p>foo:{{foo}}</p>
    <p>attrs:{{$attrs}}</p>
    <childDomChild
      v-bind="$attrs"
      v-on="$listeners"
    ></childDomChild>
  </div>
</template>
<script>
import childDomChild from './childDomChild'
export default {
  name: 'child-dom',
  props: ['foo'],
  inheritAttrs: false
}
</script>
```

C组件
```javascript
<template>
  <div>
    <p>coo:{{coo}}</p>
    <button @click="startUpRocket">我要发射火箭</button>
  </div>
</template>
<script>
export default {
  name: 'childDomChild',
  props: ['coo'],
  methods: {
    startUpRocket () {
      this.$emit('upRocket')
      console.log('startUpRocket')
    }
  }
}
</script>
```


### 总结
- $attrs 特性集合，已经声明的props不会再$attrs里面出现，未声明的用 v-bind="$attrs" 展开.
- 子类的inheritAttrs默认为true.子类是可以继承，父类提供的所有attribute的键值对。如果设置false，则禁止继承，只有通过$attrs特性才可以继承

inheritAttrs：true    
[inheritAttrs:true](../../images/20190927081537.png)  
inheritAttrs：false   
[inheritAttrs:false](../../images/20190927081638.png)  
