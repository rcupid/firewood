/*
 * @Copyright: Copyright (c) 2019 Zybang, All rights reserved
 * @Name: name
 * @Description: description
 * @Author: liujianwei(liujianwei@zuoyebang.com)
 * @LastEditors: liujianwei
 * @LastEditTime: 2019-08-27 19:56:23
 * @LastEditContent: 初始化文件
 */
let arr = [1, 2, 3, 4, 5]
let x = 2, y = 4
arr.splice(x - 1, 1, ...arr.splice(y - 1, 1, arr[x - 1]))
console.log(arr)