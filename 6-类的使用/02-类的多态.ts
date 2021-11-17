
class Animal {
  action() {
    console.log('animal action')
  }
}
class Dog extends Animal {
  action() {
    console.log('dog action')
  }
}

class Fish extends Animal {
  action() {
    console.log('fish action')
  }
}
// 父类引用指向子类实例对象   能够写出更加通用的代码
function makeAction(animals: Animal[]) {
  animals.forEach(item => {
    item.action()
  })
}

makeAction([new Dog(), new Fish()])