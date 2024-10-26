const test = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve('resolve 보낼게~')
    } else {
      reject('reject 보낼게~')
    }
  })
}
test(true)
  .then((val) => {
    console.log(val)
    console.log('resolve 성공이다잉')
  })
  .catch((err) => {
    console.error(err)
    console.error('reject 받았네...')
  })
  .finally(() => {
    console.log('난 finally 어떠한 경우에도 마지막에 실행!')
  })
