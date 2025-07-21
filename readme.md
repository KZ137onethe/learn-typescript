# learn-typescript

## 踩坑记录

1. `tsconfig.json`的extends继承另一个json时，继承部分不应包含与路径相关的属性

   如：`compilerOptions`中的`typeRoots`、`types`、`rootDir`、`outDir`、`baseUrl`等等

2. 