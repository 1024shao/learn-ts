function greeter(person) {
    return 'hello' + person.firstName + person.lastName;
}
var user = {
    firstName: 'vu',
    lastNam: 'Json'
};
console.log(greeter(user));
