
const add = require('./add')

/**
 * 创建一个测试的入口
 * @param {String} desc  描述
 * @param {Function} fn 需要执行的函数
 */
function test(desc, fn) {
  try {
    fn()
    console.log(`${desc}--测试通过`)
  } catch (error) {
    console.error(`${desc}--测试未通过，错误信息：${error}`)
  }
}

/**
 * 断言函数
 * 什么是断言？
 * @param {String}} result 执行结果
 */
function expect(result) {
  return {
    toBe: (want) => {
      if (result !== want) {
        throw new Error(`预期结果：${want}，实际得到的结果${result}`)
      }
    }
  }
}

//
test('数字相加', () => {
  expect(add(1, 2)).toBe(3)
})
test('字符串相加', () => {
  expect(add('1', 2)).toBe(3)
})
test('字符串相加', () => {
  expect(add('1', '2')).toBe(3)
})

test('字符串相加', () => {
  expect(add('a', 'b')).toBe(3)
})

//测试代码就是 尽可能覆盖的测试各种场景，统计输出结果是否符合预期