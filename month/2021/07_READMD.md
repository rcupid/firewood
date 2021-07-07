<!--
 * @Desc: 
 * @FilePath: /firewood/month/2021/07_READMD.md
 * @Author: liujianwei1
 * @Date: 2021-07-05 18:01:39
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->


### [dockerfile 与 docker-compose的区别](https://blog.csdn.net/DDFFR/article/details/77049118)
- dockerfile  构建镜像
- docker-compose  容器编排 构建项目使用

### [koa-bodyparser原理](https://www.jianshu.com/p/6f4bc9c77c9e)
- 处理了req.on('data')，req.on('end')

### [koa设置跨域访问以及跨域验证cookie](https://www.jianshu.com/p/440358339aa3)
- koa-cros
```javascript
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin); // 很奇怪的是，使用 * 会出现一些其他问题
  ctx.set('Access-Control-Allow-Headers', 'content-type');
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
  ctx.set('Access-Control-Allow-Credentials', true);
  await next();
});
```

### 鉴权的方式
- C 端都不需要鉴权
- 验证登录态
- 通过jwt
- 自定义鉴权 通过参数md5 携带到下游
- 1.不需要登录的接口,只能用 ip 限频率
- 2.可以给接口在前端加一些签名校验,虽然是防君子不防小人,但在减小流量上还是有一些用的
- 2.如果是考虑到服务器负载影响其他接口,可以把登录后的接口和不需要登录的接口分开部署.保证登录后的接口稳定

### [Swagger是什么？Swagger怎么用？](http://c.biancheng.net/view/5532.html)
  