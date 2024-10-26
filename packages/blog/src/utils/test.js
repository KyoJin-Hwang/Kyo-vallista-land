const Example = new Promise((resolve, reject) => {
  // 비동기 시작
  fetch('https://jsonplaceholder.typicode.com/todos/100')
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status)
      }
      // JSON 형태로 변환 후 아래의 then으로 넘겨준다.
      return response.json()
    })
    .then((data) => {
      resolve(data) // fetch 요청 성공 데이터
    })
    .catch((error) => {
      reject(`${error.message} 에러가 났어!`) // fetch 요청 실패 데이터
    })
})

Example.then((data) => {
  // 위에 함수에서의 resolve값
  console.log('Resolve 값 : ', data)
}).catch((error) => {
  console.log(error) // 에러가 났어! 메시지 출력
})
