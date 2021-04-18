/*
 * @Desc: 
 * @FilePath: /firewood/__test__/11.js
 * @Author: liujianwei1
 * @Date: 2021-03-21 10:38:22
 * @LastEditors: liujianwei1
 * @LastEditTime: 2021-04-08 20:47:46
 * @Reference Desc: 
 */
let arr = [1, 2, 3, 4, 5]
let ret = 0
for (const outer of arr) {
  if (ret === 2) {
    break
  }
  console.log(`outer=${outer}`)
  for (const inner of arr) {
    console.log(`inner=${inner}`)
    if (inner === 2) {
      ret = 2
      break
    }
  }
}