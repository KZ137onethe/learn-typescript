# learn-typescript

## 参考

1. [重学TypeScript](https://time.geekbang.org/course/intro/100761001?tab=catalog)

2. [重学TypeScript - 课程仓库](https://github.com/aimingoo/jike2)

## 介绍

👏这是一个学习并且实践类型体操去玩的一个typescript仓库

## 训练场

**挑战内容**：

1. [type-challenges](https://github.com/type-challenges/type-challenges)

2. 手写一遍[type-fast](https://github.com/sindresorhus/type-fest)

## 踩坑记录

1. `tsconfig.json`的extends继承另一个json时，继承部分不应包含与路径相关的属性

   如：`compilerOptions`中的`typeRoots`、`types`、`rootDir`、`outDir`、`baseUrl`等等

   因为：

   1. TypeScript 的所有路径配置都是**相对于包含该配置的 json 文件**
   2. 继承时不会自动调整路径
