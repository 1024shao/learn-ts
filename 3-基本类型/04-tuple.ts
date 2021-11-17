// tuple 元组   元素类型的的组合

function useState<T>(state: T) {
  let currentState = state
  const changeState = function (state: T) {
    currentState = state
  }
  const tuple: [T, (newState: T) => void] = [currentState, changeState]
  return tuple
}

const [counter, setCounter] = useState(10)

const info: [string, number] = ['12', 23]
console.log(useState('aaa'))

// setCounter(1000)
// console.log(counter)

type MyFunction = () => void

const fun: MyFunction = () => { }