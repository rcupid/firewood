/*
 * @Desc:
 * @FilePath: /firewood/__test__/aa.js
 * @Author: liujianwei1
 * @Date: 2021-04-29 13:28:04
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

try {
  console.log(1)
  setTimeout(() => {
    console.log(2)
  }, 3000)
} catch (error) {

} finally {
  console.log(3)
}