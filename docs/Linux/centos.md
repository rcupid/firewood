<!--
 * @Name: name
 * @Description: description
 * @Author: cupid(cupid@163.com)
 * @LastEditors  : cupid
 * @LastEditTime : 2020-01-17 15:58:29
 * @LastEditContent: 
 -->

### VirtualBox安装CentOS7
之前Centos6.8密码忘记了，重新安装了一个Centos7，中间碰到几个问题。记录一下  
 [傻瓜式安装](https://www.cnblogs.com/xyinjie/p/9437049.html) 参考地址

 ### 配置静态IP
 [参考文档](http://blog.itpub.net/31360515/viewspace-2154855/)    
 查看自己的IP地址，子网掩码 默认网关
 ```bash
 # windows 
ifconfig
 ```
 vi /etc/sysconfig/network-scripts
 ```bash
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=enp0s3
UUID=96ef603f-2c72-4d63-94bd-aaaca0b4c771
DEVICE=enp0s3
#!
ONBOOT=yes
#! 
IPADDR=172.21.23.172
# ！
NETMASK=255.255.255.0
GATEWAY=172.21.23.1
#！
DNS1=114.114.114.114
 ```

 #### 重启网络

 ```bash
 # 新版
 systemctl start network
 # 老版本
 service network start

 ```

 ### 设置DNS
 如果不设置dns，会连接不到外网
 
 vi /etc/resolv.conf

 ```bash
 nameserver 114.114.114.114
 ```

### 测试
```bash
# 外网
ping www.zuoyebang.com
# 内网
ping 172.21.23.170
```

### 中文乱码
程序员，建议用English ，如果想用中文 参考[中文乱码](https://www.cnblogs.com/lywJ/p/10710460.html)  

可以使用下面的命名查看系统是否安装了英文安装包。
```bash
# locale -a |grep "en_US"

[root@localhost network-scripts]# locale -a | grep 'en_US'
en_US
en_US.gb18030
en_US.gb2312
en_US.gbk
en_US.utf8
```
没有输出，说明没有安装，输入下面的命令安装：
```bash
yum groupinstall "fonts" -y
```
vim /etc/locale.conf

```bash
LANG=en_US.UTF-8
LC_CTYPE="en_US.UTF-8"
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_COLLATE="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_MESSAGES="en_US.UTF-8"
LC_PAPER="en_US.UTF-8"
LC_NAME="en_US.UTF-8"
LC_ADDRESS="en_US.UTF-8"
LC_TELEPHONE="en_US.UTF-8"
LC_MEASUREMENT="en_US.UTF-8"
LC_IDENTIFICATION="en_US.UTF-8"
LC_ALL=
```
 source   /etc/locale.conf

 #### 测试
 ```bash
 date
 ``` 

 ### vim:command not found
 ```bash
 yum -y install vim*
 ```




