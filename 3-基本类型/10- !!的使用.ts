let message: string | null = null
let content = message ?? '你好'
let content2 = message || '好'
console.log(content)
console.log(content2)