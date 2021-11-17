// 访问器

class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  set name(newName) {
    this._name = newName
  }

  get name() {
    return this._name
  }
}

let p = new Person('张三')
console.log(p.name)
p.name = 'Liu'
export { }