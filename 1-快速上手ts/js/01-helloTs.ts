function greeter(person: string): string {
  return 'hello' + person
}

let user: string = 'Vujson'

console.log(greeter(user))

// 将ts转化为js    命令 tsc 文件名     tsc是一个编译器