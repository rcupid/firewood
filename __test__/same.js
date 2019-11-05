

class RequestProxy {
  constructor() {
    //缓存方法
    this.cachePromise = {}
    this.cacheResponseData = {}
  }

  /**
   *  get方法
   * @param {*} url 
   */
  async get (url) {
    return new Promise((resolve, reject) => {
      if (!this.cachePromise(url)) {
        this.cachePromise[url] = this.createPromise(url)
      }
      //返回数据
      const data = await this.cachePromise[url]
      resolve(data)
    })
  }

  createPromise (url) {
    return new Promise((resolve, reject) => {
      if (!this.cacheResponseData[url]) {
        //mock ajax data
        setTimeout(() => {
          //返回数据
          const data = "responseData"
          this.cacheResponseData[url] =
            resolve(this.cacheResponseData[url])
        }, 1000)
      } else {
        resolve(this.cacheResponseData[url])
      }
    })
  }
}

const instance = new RequestProxy()

instance.get('/a/b').then((data) => {
  console.log(data)
})