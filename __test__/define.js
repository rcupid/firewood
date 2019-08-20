/*
 * @Copyright: Copyright (c) 2019 Zybang, All rights reserved
 * @Name: name
 * @Description: description
 * @Author: liujianwei(liujianwei@zuoyebang.com)
 * @LastEditors: liujianwei
 * @LastEditTime: 2019-08-20 10:18:39
 * @LastEditContent: 初始化文件
 */

var o = {}; // 创建一个新对象

// 在对象中添加一个属性与数据描述符的示例
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: false
});
// 对象o拥有了属性a，值为37

//configurable:false 下面会报错,因为配置不可更改
/**
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});

 */

//enumerable:false 不可枚举，现象是，console.log()打印不出来
//writable:false 为false时候 o.a=1;不起作用


// 在对象中添加一个属性与存取描述符的示例
var bValue;
Object.defineProperty(o, "b", {
  get: function () {
    return bValue;
  },
  set: function (newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true
});
o.a = 1;
o.b = 38;
console.log(o);

