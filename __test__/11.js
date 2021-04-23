
// 数据存储
const cache = {
  data: {},
  set (key, data) {
    this.data[key] = data
  },
  get (key) {
    return this.data[key]
  },
  clear (key) {
    delete this.data[key]
  }
}

const key = "94207a19c6eff58128da2f92f32f61cc"
cache.set(key, 1)
setTimeout(() => {
  cache.clear(key)
  console.log(cache)
}, 3000)