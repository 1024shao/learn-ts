type unionType = string | number
function printId(id: unionType) {
  if (typeof id === 'string') {
    console.log(id.toLocaleUpperCase()) // 确定为string类型
  } else {
    //确定id 为number类型
  }
}


export { }