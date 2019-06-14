### 查看远程仓库
```bash
$ git remote -v
origin  https://github.com/rcupid/firewood.git (fetch)
origin  https://github.com/rcupid/firewood.git (push)
```
详细信息
```bash
$ git remote show origin
* remote origin
  Fetch URL: https://github.com/rcupid/firewood.git
  Push  URL: https://github.com/rcupid/firewood.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (fast-forwardable)
```

### 添加远程仓库
添加远程仓库的格式
```bash
git remote add <shorname> <url>
```
例如：
``` bash
$ git remote
origin

# 添加一个pb的名称
$ git remote add pb https://github.com/paulboone/ticgit

# 一个本地仓库可以添加多个远程仓库
$ git remote -v
origin	https://github.com/schacon/ticgit (fetch)
origin	https://github.com/schacon/ticgit (push)
pb	https://github.com/paulboone/ticgit (fetch)
pb	https://github.com/paulboone/ticgit (push)
```

### 从远程仓库中抓取与拉取
``` bash
git fetch [remote-name] [branch-name]
# 或
git pull [remote-name] [branch-name]
```

### 重命名
如果想要重命名引用的名字可以运行 git remote rename 去修改一个远程仓库的简写名。 例如，想要将 pb 重命名为 paul，可以用 git remote rename 这样做：
```bash
$ git remote rename pb paul
$ git remote
origin
paul
```
同样也会修改你的远程分支名字

### 移除远程分支名称
```
$ git remote rm paul
$ git remote
origin

```

### 打标签
```bash
# 列出标签
git tag

# 展示标签详细星系
git show v1.1

# 查找标签
git tag -l `v1.8`

# 附注标签 annotated
git tag -a v1.1 -m 'version is name'

# 轻量标签 
git tag 

# 推送标签
git push origin --tags
# 或
git push origin v1.1
```

