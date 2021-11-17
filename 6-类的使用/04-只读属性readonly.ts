class Person {
  // 只读属性可以在constructor中进行修改
  public readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

export { }