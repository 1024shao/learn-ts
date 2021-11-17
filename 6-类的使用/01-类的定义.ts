class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log(this.name + '在吃饭')
  }
}

let p = new Person('吴海鑫', 20)
p.eating()