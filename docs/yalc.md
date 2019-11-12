### yalc 
[yalc官网文档地址](https://github.com/whitecolor/yalc) 
### yalc出现的原因 
在开发和创作多个程序包（私有程序包或公共程序包）时，通常会发现自己需要在本地环境中使用`其他最新的未发布的npm包`，而无需将这些程序包发布到远程注册表中。NPM和Yarn使用类似的符号链接程序包（npm/yarn link）解决了这个问题。尽管这可能在许多情况可行，但它经常带来讨厌的约束和相关性解析，文件系统之间符号链接互操作性等问题。

### 安装
```bash
npm i yalc -g
# 或者
yarn global add yalc
```

### 常用命令

npm包端
```bash
# 自动更新
yalc publish --push 
# 清除
yalc installations clean <my-package>
# 展示包信息
yalc installations show  <my-package>
```

项目端
```bash
# 添加包
yalc add <my-package>
# 删除包
yalc remove <my-package>
# 更新包 如果 yalc publish --push ，会自动更新项目中的包，不需要执行该命令
yalc update <my-package>
```