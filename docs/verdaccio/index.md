<!--
 * @Copyright: Copyright (c) 2019 Zybang, All rights reserved
 * @Name: name
 * @Description: description
 * @Author: liujianwei(liujianwei@zuoyebang.com)
 * @LastEditors  : liujianwei
 * @LastEditTime : 2020-01-10 18:00:29
 * @LastEditContent: 初始化文件
 -->
 ### 官方文档
 [文档](https://verdaccio.org/docs/zh-CN/what-is-verdaccio)
### docker下面安装verdaccio

```bash
#创建一个容器
docker pull verdaccio/verdaccio
# 运行容器
> $ docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio                      

# 将会看到
 warn --- config file  - /verdaccio/conf/config.yaml
 warn --- Verdaccio started
 warn --- Plugin successfully loaded: verdaccio-htpasswd
 warn --- Plugin successfully loaded: verdaccio-audit
 warn --- http address - http://0.0.0.0:4873/ - verdaccio/4.4.1

# 开地址http://localhost:4873/ 将会看到包管理的页面（不截图了），并且所有的操作终端里都会详细的记录：
```
 ### 查看配置
```bash
# 进入容器
docker exec -it verdaccio /bin/sh
# 找到配置文件/verdaccio/conf/config.yaml
```
#### 配置文件预览
配置文件的功能，可以查看[官方文档](https://verdaccio.org/docs/zh-CN/what-is-verdaccio)
```bash
storage: ./storage
auth:
  htpasswd:
    file: ./htpasswd
uplinks:
  npmjs:
    url: https://registry.npmjs.org/
packages:
  '@*/*':
    access: $all
    publish: $authenticated
    proxy: npmjs
  '**':
    proxy: npmjs
logs:
```
### 客户端配置
安装 nrm 进行 包管理器的切换（切换 npm 和 verdaccio）
```bash
npm install -g nrm
```

### 参考链接
- [通过verdaccio搭建私有的包管理器](https://github.com/huangshuwei/blog/issues/15)   
- [Docker](https://www.cnblogs.com/cblogs/p/dockerCommand.html)
