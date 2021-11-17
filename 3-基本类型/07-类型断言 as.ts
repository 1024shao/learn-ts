
// const img = document.getElementById('why') as HTMLImageElement

// img.src = '具体地址'

class Person {

}

class Student extends Person {
  study() {
    console.log('学生在学习')
  }
}

function sayHello(p: Person) {
  (p as Student).study()
}

const stu = new Student()
sayHello(stu)
