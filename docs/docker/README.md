<!--
 * @Name: name
 * @Description: description
 * @Author: cupid(cupid@163.com)
 * @LastEditors  : cupid
 * @LastEditTime : 2020-01-13 11:53:09
 * @LastEditContent: 
 -->
###
```bash
pm2 start app.yml
# 在线监控
# 开机启动
```                

### docker 安装mysql
[Mac下Docker安装MySql、操作MySql](https://www.jianshu.com/p/d211fec2f34a)  
[mac下利用docker部署个Mysql](https://www.jianshu.com/p/83ecd99cf3eb)  
[Mac Docker 安装 MySQL](https://www.kefaming.com/9910.html)  
[2019-01-11亲测Navicat Premium for Mac破解](https://www.jianshu.com/p/add76d51931c)  
[Docker常用命令汇总，和常用操作举例](https://www.cnblogs.com/cblogs/p/dockerCommand.html)
[centos安装mysql](https://juejin.im/post/6844903870053761037)

[新版myql授权用户](https://techlog.cn/article/list/10183260)
[navicat连接阿里云ESC里的数据库](https://developer.aliyun.com/article/656996)

```bash
docker run --name mysqlserver -e MYSQL_ROOT_PASSWORD=root -d -i -p 3306:3306  mysql
docker run -p 3306:3306 --name qmm-mysql -v ~/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=669988  -d mysql:5.6
# 创建容器时，最后mysql:5.6表示mysql镜像的版本，可以写，表示指定该版本；如果不写也可以，docker会自动在本地检测有没有最新的，如果没有会自动去docker hub上去下载。

# run                 运行一个docker容器
# --name           后面这个是生成的容器的名字qmm-mysql
# -p 3306:3306  表示这个容器中使用3306（第二个）映射到本机的端口号也为3306（第一个） 
# -e MYSQL_ROOT_PASSWORD=123456  初始化root用户的密码
# -d                   表示使用守护进程运行，即服务挂在后台

$ docker run --name nest-demo-project -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql

$ docker exec -it 6d5388599bda /bin/bash

mysql -u root -p  123456;
#密码：123456 // 123456是密码

mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '1234561';
```

### 全站的思维脑图
# node-demo


### docker 安装redis
[Docker安装redis](https://www.jianshu.com/p/2f95680f21c5)
[Docker创建redis容器](https://www.cnblogs.com/yanghe123/p/10960535.html)

```bash
docker run -d -p 6379:6379 -v $PWD/conf/redis.conf:/usr/local/etc/redis/redis.conf -v $PWD/data:/data --name myredis docker.io/redis redis-server /usr/local/etc/redis/redis.conf --appendonly yes
# -d：表示后台运行，不加-d执行上面的命令你就会看到redis启动的日志信息了
# --appendonly yes：表示redis开启持久化策略
# -v：表示挂载路径，$PWD表示当前目录下，冒号左面的表示我们宿主机的挂载目录，也就是我们虚拟机所在的文件路径，冒号右边则表是的是redis容器在容器内部的路径，上面的命令我分别挂载了redis.conf(redis的配置文件)，如需使用配置文件的方式启动redis，这里则需要加上，还有redis存放数据所在的目录

docker run -d --restart=always -v $PWD/conf/redis.conf:/usr/local/etc/redis/redis.conf -v $PWD/data:/data --name myredis -p 6379:6379 --requirepass "123456" redis 
# -d 　　　　　　　　　 后台进行
# --retsart=always 自动重启
# -v /data:/data 宿主机/data目录挂载到容器/data目录
# --name　　　　　　　 容器名设置为myredis
# -p　　　　　　　　　　映射端口号
# --requirepass "123456" 设置密码123456


# 下载redis桌面可视化工具连接测试：https://redisdesktop.com/
sudo docker run --rm-i -t -v /home/hyzhou/docker:/data:rw ubuntu:14.04 /bin/bash

# 将本机的/home/hyzhou/docker，挂载到镜像中的/data目录
```
### docker 安装gitlab
[docker 安装使用gitlab  非常完整](https://www.cnblogs.com/shijunjie/p/10488859.html)
[docker下gitlab安装配置使用(完整版)](https://www.jianshu.com/p/080a962c35b6)
[docker安装配置gitlab详细过程](https://www.cnblogs.com/zuxing/articles/9329152.html)
```bash
# gitlab-ce为稳定版本，后面不填写版本则默认pull最新latest版本
$ docker pull gitlab/gitlab-ce

$ docker run -d  -p 443:443 -p 8090:80 -p 222:22 --name gitlab  -v $PWD/gitlab/config:/etc/gitlab -v $PWD/gitlab/logs:/var/log/gitlab -v $PWD/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce
# -d：后台运行
# -p：将容器内部端口向外映射
# --name：命名容器名称
# --restart=always 不然个自动重启
# -v：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录
```
grep 'linx' filename
docker ps查看进程

在Linux中使用vi打开文件时如何显示行号，及跳转到指定行
vi 文件名，打开文件后

如果要显示所有行号，使用 :set nu

如果要显示当前行号，使用 :nu

如果要跳转到指定行，使用 :行号

例如，跳转到第10行，使用 :10

```bash
docker run -d \
--hostname gitlab.example.com \
--name gitlab \
--restart always \
-p 8082:443 -p 8083:80 -p 8084:22 \
-v /etc/localtime:/etc/localtime:ro \
-v /usr/local/gitlab_data/gitlab/config:/etc/gitlab \
-v /usr/local/gitlab_data/gitlab/logs:/var/log/gitlab \
-v /usr/local/gitlab_data/gitlab/data:/var/opt/gitlab \
gitlab/gitlab-ce:latest

docker run -d  -p 8881:443 -p 8882:80 -p 8883:22 --name gitlab --hostname 192.168.0.101  -v $PWD/gitlab/config:/etc/gitlab -v $PWD/gitlab/logs:/var/log/gitlab -v $PWD/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce
#解释：
　　#-d 指定后台运行
　　#--hostname 指定主机名
　　#--name 指定容器名
　　#-p 端口映射
　　#--restart always  指定容器停止后的重启策略: 容器退出时总是重启
　　# -v 指定挂载存储卷
```
 - 短号的映射一定要对 


 ### [docker安装gitlab-runner](https://www.cnblogs.com/zzhaolei/p/11063345.html)
 ### [gitlab-runner](https://docs.gitlab.com/runner/install/docker.html)
 ### [gitlab-runner](https://www.cnblogs.com/roluodev/p/12251472.html)
 ```bash
 docker run -d --name gitlab-runner   \
  -v $PWD/gitlab-runner/config:/etc/gitlab-runner \
  -v $PWD/gitlab-runner/run/docker.sock:/var/run/docker.sock \
  gitlab/gitlab-runner:latest

docker run --rm -t -i -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register

docker exec -it gitlab-runner gitlab-runner register
http://192.168.0.101:8882
 ```