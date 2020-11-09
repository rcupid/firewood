var lengthOfLongestSubstring = function (s) {
  var res = 0,
    i = 0
  var temp = []
  while (i < s.length) {
    if (temp.indexOf(s[i]) === -1) {
      temp.push(s[i])
    } else {
      temp.shift()
      continue
    }
    res = Math.max(res, temp.length)
    i++
  }
  return res

  // 下面这种方法不可以的原因是 什么
  // if (!s) {
  //   return 0
  // }
  // let arr = []
  // let max = 0
  // for (const iterator of s) {
  //   if (arr.indexOf(iterator) === -1) {
  //     arr.push(iterator)
  //   } else {
  //     arr.shift()
  //     continue
  //   }
  //   max = Math.max(max, arr.length)
  // }
  // return max
}

var lengthOfLongestSubstring1 = function (s) {
  if (!s) {
    return 0
  }
  let max = 0
  let arr = []

  for (let index = 0, len = s.length; index < len;) {
    const element = s[index]
    const position = arr.indexOf(element)
    if (position === -1) {
      arr.push(element)
    } else {
      arr.splice(0, position + 1)
      continue
    }
    max = Math.max(max, arr.length)
    index++
  }
  return max
}


lengthOfLongestSubstring('aab')