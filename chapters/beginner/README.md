# 初级类型篇

### 我们为什么要用TypeScript

### 怎样标注类型？

**类型标注**

1. 基本使用

   ```typescript
   let x: number = 1;
   ```

2. 断言语法

   ``````typescript
   let y = 1 as number;
   ``````

**声明方式**

六种声明方式

```typescript
let x1: number = 1;
const x2: number = 2;
var x3: number = 3;
function foo(): number {
  return 1;
}

class MyClass {}

// import ...
```

**表达式（除了声明语句外，其他都可以看作表达式）**

**类型断言**

> expression as type
>
> value as type

**类型标注的原则**

1. 界面上必须清楚标注
2. 能不标注的地方，那就不要去标注
3. 能用 const 的地方，尽量用 const
4. 尽量不使用 as

### TS与JS相关的那些类型
