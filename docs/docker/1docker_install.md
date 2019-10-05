### 申请阿里云主机
[使用SSH密钥对连接Linux实例](https://helpcdn.aliyun.com/document_detail/51798.html?spm=a2c4g.11186623.4.3.15e15937AZ8cHf)

```bash
# 如有需要可先卸载可能存在的旧版本：
$ sudo apt-get remove docker docker-engine docker-ce docker.io


# 更新apt包索引：
$ sudo apt-get update


# 安装以下包以使apt可以通过HTTPS使用存储库（repository）：
$ sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common


# 添加Docker官方的GPG密钥：
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -


# 使用下面的命令来设置stable存储库：
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"


# 再更新一下apt包索引：
$ sudo apt-get update


# 安装最新版本的Docker CE：
$ sudo apt-get install -y docker-ce


# 在生产系统上，可能会需要应该安装一个特定版本的Docker CE，而不是总是使用最新版本：

# 列出可用的版本：
$ apt-cache madison docker-ce
 
# 选择要安装的特定版本，第二列是版本字符串，第三列是存储库名称，它指示包来自哪个存储库，以及扩展它的稳定性级别。
# 要安装一个特定的版本，将版本字符串附加到包名中，并通过等号(=)分隔它们：
$ sudo apt-get install docker-ce=<VERSION>

# 验证docker

# 查看docker服务是否启动：
$ systemctl status docker

# 若未启动，则启动docker服务：
$ sudo systemctl enable docker
$ sudo systemctl start docker

# 经典的hello world：
$ sudo docker run hello-world
```

