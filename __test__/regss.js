/*
 * @Desc:
 * @FilePath: /firewood/__test__/regss.js
 * @Author: liujianwei1
 * @Date: 2021-04-13 16:43:13
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

let str = "/welcome4/ddd/23423"
// str = "welcome4/ddd/23423"

let ret = str.replace(/^\//, '')

console.log(ret, str)