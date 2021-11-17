# TS

### 1.介绍

​	ts是js的一个超集合

<strong>1<strong>

### 2. 安装 TypeScript

命令行运行如下命令，全局安装 TypeScript：

```bash
npm install -g typescript
```

安装完成后，在控制台运行如下命令，检查安装是否成功(3.x)：

```bash
tsc -V
```

编译ts并在node中执行:

```bash
npm install ts-node tslib @types/node -g
```

### 3. 第一个 TypeScript 程序

#### [#](https://24kcs.github.io/vue3_study/chapter1/03_HelloWorld.html#编写-ts-程序)编写 TS 程序

src/helloworld.ts

```typescript
function greeter (person) {
  return 'Hello, ' + person
}

let user = 'Yee'

console.log(greeter(user))
```

#### [#](https://24kcs.github.io/vue3_study/chapter1/03_HelloWorld.html#手动编译代码)手动编译代码

我们使用了 `.ts` 扩展名，但是这段代码仅仅是 JavaScript 而已。

在命令行上，运行 TypeScript 编译器：

```bash
tsc helloworld.ts
```

输出结果为一个 `helloworld.js` 文件，它包含了和输入文件中相同的 JavsScript 代码。

在命令行上，通过 Node.js 运行这段代码：

```bash
node helloworld.js
```

或者使用ts-node

```bash
ts-node .\01-helloTs.ts
```

控制台输出：

```text
Hello, Yee
```

生成自动检测文件

```bash
tslint --init
```

#### [#](https://24kcs.github.io/vue3_study/chapter1/03_HelloWorld.html#vscode自动编译)vscode自动编译

```
1). 生成配置文件tsconfig.json
    tsc --init
2). 修改tsconfig.json配置
    "outDir": "./js",
    "strict": false,
3). 启动监视任务:
    终端 -> 运行任务 -> 监视tsconfig.json
```



# 基础讲解

### TS基础类型和对象类型

```ts
//基础类型 null,undefined,symbol,boolean,void
const count: number = 123;
const myName: string = "lizhao";
//对象类型
class Person {}
const teacher: {
  name: string;
} = {
  name: "lizhao",
};
const nums: number[] = [1, 2, 3];
const person: Person = new Person();
const getTotal: () => number = () => {
  return 123;
};
```

### 类型注解和类型推断

类型注解，我们来告诉ts变量是什么类型；
类型推断，ts会自动去尝试分析变量的类型；
如果ts能够自动分析变量类型，我们就说明也不需要做了，如果无法分析变量类型，我们就需要使用类型注解。

### 函数类型相关

```ts
//普通参数
function fun(p1: number, p2: number) {
  return p1 + p2;
}
fun(1, 2);
//结构参数
function fun1({ p1, p2 }: { p1: number; p2: number }) {
  return p1 + p2;
}
fun1({ p1: 1, p2: 2 });
//返回值类型
function fun2(p1: number, p2: number): number {
  return p1 + p2;
}
fun2(1, 2);
function fun3(p1: number, p2: number): void {
  console.log(p1 + p2);
}
function fun4(p1: number, p2: number): never {
  throw new Error();
}
//以下几种写法都可以
const fun5_1 = (p1: number, p2: number): number => {
  return p1 + p2;
};
const fun5_2: (p1: number, p2: number) => number = (p1, p2) => {
  return p1 + p2;
};
```

### 数组和元祖

```ts
// 数组
const arr: (string | number)[] = [1, 2, "1"];
//type 类型别名
type user = { name: string; age: number };
const arr1: user[] = [{ name: "lz", age: 18 }];
class Teacher {
  name: string;
  age: number;
}
const objectArr:Teacher[]=[
  new Teacher(),
  {
    name: 'lz',
    age: 18
  }
]
// 元组
const info: [string, number] = ["lizhao", 18];
const infoList: [string, number][] = [
  ["lizhao", 18],
  ["lizhao", 19],
];
```

### interface接口

```ts
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
```

### 类

```ts
class Person {
  name = "li";
  getName() {
    return this.name;
  }
}
//子类可以继承父类,可以重写父类方法，子类用super可以调用父类的方法。
class Teacher extends Person {
  getName() {
    return super.getName() + "zhao";
  }
}
const p1 = new Teacher();
console.log(p1.getName());
```

### 类的访问属性和constructo

```ts
//private,protected,publick访问类型
// publick允许在类内外调用
// protected允许在类内和继承的子类中使用
// private只能在类内用
//constructor
class Person {
  //传统写法
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // 简便写法
  constructor(public name: string) {}
}
const p1 = new Person("lz");
//子类继承父类的时候，子类如果有constructor，constructor里必须调用super(),不论父类是否有constructor。
class Teacher extends Person {
  constructor(name: string, public age: number) {
    super(name);
  }
}
const t1 = new Teacher("lz1", 18);
console.log(p1);
console.log(t1);
```

### getter setter

```ts
class Person {
  constructor(private _name: string) {}
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
}
const p1 = new Person("lz");
console.log(p1.name);
```

### 单例模式

```ts
class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo("lz");
    }
    return this.instance;
  }
}
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);
```

### readonly

限制一个public属性只能读不能改

```ts
class Demo {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const demo1 = new Demo("dell");
```

### 抽象类

抽象类，把公共的基础的东西抽象出来

```ts
abstract class Geom {
  width: number = 12;
  getType() {
    return "Geom";
  }
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea() {
    return this.width * 12;
  }
}

const c1 = new Circle();
console.log(c1.getArea());
```

### interface继承简化代码

```ts
interface Person {
  name: string;
}
interface Teacher extends Person {
  age: number;
}
interface Student extends Person {
  sex: string;
}
const teacher: Teacher = { name: "lz", age: 18 };
const student: Student = { name: "lz", sex: "女" };

const getUserInfo = (user: Person) => {
  console.log(user.name);
};
```

### 泛型

可以把泛型看做一个占位符，在使用的时候，在动态的填入类型值。

```ts
//例1：
function echo<T>(arg: T): T {
  return arg;
}
const str = echo("str");
const num = echo(123);
//例2：接口
interface Obj<T, U> {
  key: T;
  val: U;
}
const obj: Obj<number, string> = {
  key: 1,
  val: "234",
};
//Array也是一个interface，Array<number>是interface搭配泛型的用法
let arr: Array<number> = [1, 2, 3];
//例3：函数
interface Plus<T> {
  (a: T, b: T): T;
}
const plusNum: Plus<number> = (a: number, b: number) => {
  return a + b;
};
const plusStr: Plus<string> = (a: string, b: string) => {
  return a + b;
};
console.log(plusNum(1, 2));
console.log(plusStr("1", "2"));
```

### 约束泛型

用extends来约束泛型

```ts
interface withLength {
  length: number;
}
function echoWithLength<T extends withLength>(arg: T) {
  return arg.length;
}
const str = echoWithLength({ length: 2 });
```

### 类型别名

```ts
type user = { name: string; age: number };
const arr1: user[] = [{ name: "lz", age: 18 }];
```

### 类型断言

```ts
function getLength(input: string | number): number {
  if ((<string>input).length) {
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}
```