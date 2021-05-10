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

### [写 Node.js 代码，从学会调试开始](https://mp.weixin.qq.com/s/7PNE3nBhpQOTN4stChvWzQ)
- node调试技巧

### 资料收集
- [Font Awesome使用方法](https://www.cnblogs.com/zhaowy/p/8400244.html)
- [从生产到消费，基于物料的前端开发链路](https://developer.aliyun.com/article/772938)
- [年度文章集合 | 最全微前端集合](https://juejin.cn/post/6844904030720770055)

## 网络知识
### [IP地址分类，内网和外网的区别](https://blog.csdn.net/obession/article/details/47978815)
```
在IP地址3种主要类型里，各保留了3个区域作为私有地址，其地址范围如下： 
A类地址：10.0.0.0～10.255.255.255 
B类地址：172.16.0.0～172.31.255.255 
C类地址：192.168.0.0～192.168.255.255
```

### [本地dns服务器到底是什么？](https://www.zhihu.com/question/48085305)
感觉直接叫本地域名服务器有一定的歧义，还是“本地区的域名服务器”更加易于理解
```
在通过浏览器缓存及host文件都无法解析域名的情况下，OS会将这个域名发送给计算机网络配置中DNS对应的地址（LDNS），即本地区的域名服务器。这个DNS通常都提供给你本地互联网接入的一个DNS解析服务，假如是在学校接入的互联网，那么这个本地区的域名服务器基本上是在学校中；如果是在小区接入的互联网，那么这个本地区的域名服务器就是提供给你接入互联网的应用服务上，也就是电信或联通。
```