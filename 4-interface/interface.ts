interface Person {
  readonly sex: string; //只读属性
  name: string; //必传属性
  age?: number; //非必传属性 ?
  [propName: string]: any; //其它属性
  say(): string; //方法
}
const getPersonNane = (person: Person): void => {
  console.log(person.name);
};
const setPersonNane = (person: Person, name: string): void => {
  person.name = name;
};
const p1: Person = {
  sex: "女",
  name: "lz",
  otner: "xxx",
  say() {
    return "hello lz";
  },
};
getPersonNane(p1);
//继承
interface Teacher extends Person {
  teach(): string;
}
//应用:类应用接口，类里边必须具备 必传属性
class User implements Person {
  sex = "女";
  name = "lz";
  say() {
    return "hello lz";
  }
}
//定义函数类型
interface SayHi {
  (word: string): string;
}
const say: SayHi = (word: string) => {
  return "lz";
};