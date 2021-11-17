// message!    意为: message一定不为空
function printMessage(message?: string) {

  console.log(message?.length)
  console.log('continue')
}


printMessage()