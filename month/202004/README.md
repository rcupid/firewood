### [Parcel开箱即用](https://parceljs.org/getting_started.html)
开箱即用很方便

### [vue template compiler模版解析模块源码解析](https://blog.csdn.net/u014787301/article/details/85842963)
- vue解析的步骤，[HTMLparser](http://erik.eae.net/simplehtmlparser/)解析器

vue template compiler包含三个处理步骤，按顺序排列如下：
- parser：模版解释器，功能为从HTML模版转换为AST
- optimizer：AST优化，处理静态不参与重复渲染的模版片段，对比虚拟dom
- codegen：代码生成器。基于AST，生成js函数，延迟到运行时运行，生成纯HTML。

### [前端性能优化：细说浏览器渲染的重排与重绘](http://www.imooc.com/article/45936)
- 浏览器渲染HTML的步骤
- 什么是重排，重绘，以及之间关系

### [http缓存](https://mp.weixin.qq.com/s/vI2bxaFsFSB5rGC4Bkr8vQ)
- expires,响应头，绝对时间  200  from cache
- cache-control 响应头，相对时间 200  from cache
- Last-Modified(响应头)/If-Modified-Since(请求头)
- Etag(响应头)/If-None-Math(请求头)

