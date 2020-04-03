### [Parcel开箱即用](https://parceljs.org/getting_started.html)
开箱即用很方便

### [vue template compiler模版解析模块源码解析](https://blog.csdn.net/u014787301/article/details/85842963)
- vue解析的步骤，[HTMLparser](http://erik.eae.net/simplehtmlparser/)解析器

vue template compiler包含三个处理步骤，按顺序排列如下：
- parser：模版解释器，功能为从HTML模版转换为AST
- optimizer：AST优化，处理静态不参与重复渲染的模版片段，对比虚拟dom
- codegen：代码生成器。基于AST，生成js函数，延迟到运行时运行，生成纯HTML。