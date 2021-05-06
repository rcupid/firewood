<!--
 * @Desc: 
 * @FilePath: /firewood/month/2021/05_README.md
 * @Author: liujianwei1
 * @Date: 2021-05-06 11:42:46
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->

### [在Vue中使用JSX的正确姿势](https://zhuanlan.zhihu.com/p/37920151)
- Vue的属性有三种 props，普通属性 attrs,Dom属性 domProps。通过正则表达式区分，所以属性，不要on开头
- onXXX的均被认为是事件，nativeOnXXX是原生事件，domPropsXXX是Dom属性
- class,staticClass,style,key,ref,refInFor,slot,scopedSlots这些被认为是顶级属性，至于我们属性声明的props，以及html属性attrs，不需要加前缀，插件会将其统一分类到attrs属性下，然后在运行阶段根据是否在props声明来决定属性归属(即属于props还是attrs)。