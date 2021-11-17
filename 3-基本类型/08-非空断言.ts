// message!    意为: message一定不为空
function printMessage1(message?: string) {

  console.log(message!.length)
}


printMessage1('hello world')
printMessage1()