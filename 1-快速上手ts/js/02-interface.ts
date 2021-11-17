interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'hello' + person.firstName + person.lastName
}

let user = {
  firstName: 'vu',
  lastName: 'Json'
}
console.log(greeter(user))