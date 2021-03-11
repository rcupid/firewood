/**
 * 深拷贝
 */
function deepCopy (obj) {
  let r = {}// Object.create(null)
  Object.keys(obj).forEach((key) => {
    const value = obj[key]
    if (value && typeof value === 'object') {
      r[key] = deepCopy(value)
    } else {
      r[key] = value
    }
  })
  // console.log(r);
  return r
}

function deepCopy2 (obj) {
  // 创建一个新对象
  let result = {}
  let keys = Object.keys(obj),
    key = null,
    temp = null;

  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    temp = obj[key];
    // 如果字段的值也是一个对象则递归操作
    if (temp && typeof temp === 'object') {
      result[key] = deepCopy(temp);
    } else {
      // 否则直接赋值给新对象
      result[key] = temp;
    }
  }
  return result;
}

let a = {
  a: 1,
  b: 2,
  c: () => {
    console.log(1);
  },
  d: {
    name: 1,
    age: 19
  }
}

let c = deepCopy(a)
a.d.name = "cupid"
console.log(a);
console.log(c);


