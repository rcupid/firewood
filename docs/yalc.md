### yalc 
[yalc](https://github.com/whitecolor/yalc)

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