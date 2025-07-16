// * any 类型
function f1(a: any) {
  a.b(); // OK
}

function f2(a: unknown) {
  // @ts-expect-error: “a”的类型为“未知”。
  a.b();
}

// * unknown 类型
let name1: unknown = '123'
// @ts-expect-error: 不能将类型“unknown”分配给类型“string”。
let name2: string = name1
// 这样就没问题 any类型是可以的
let name3: any = '123'
let name4: string = name3