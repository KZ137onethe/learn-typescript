# learn-typescript

> 

## 踩坑记录

1. `tsconfig.json`的extends继承另一个json时，继承部分不应包含与路径相关的属性

   如：`compilerOptions`中的`typeRoots`、`types`、`rootDir`、`outDir`、`baseUrl`等等

   因为：

   1. TypeScript 的所有路径配置都是**相对于包含该配置的 json 文件**
   2. 继承时不会自动调整路径


