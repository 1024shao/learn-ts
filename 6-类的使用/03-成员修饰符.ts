// public 公共的   类实例对象,继承类都可以访问
// private 私有的  只能在类中访问,实例对象无法访问
// protect 受保护的 只能在类和继承类中访问
// 一般 private 修饰的属性 会加上_   例如 private _name:string


class Person {
  private  name: string
  protected age: number = 10
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  public setName(name: string) {
    this.name = name
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age)
  }

}
let p = new Person('刘', 20)
// console.log(p.name)  //无法读取name属性,因为name为私有保护属性
let stu = new Student('王', 20)
// stu.name
export { }