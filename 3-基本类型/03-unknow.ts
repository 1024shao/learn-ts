
function foo() {
  return 123
}
function bar() {
  return '123345'
}

// unknown 只能赋值给其他unknown类型
//any类型可以赋值给任何类型
let result: unknown
let test: any = 1234
let test2: string = test
// let test3: string = result //提示错误
let test4: unknown = result
if (true) {
  result = foo()
} else {
  result = bar()
}
