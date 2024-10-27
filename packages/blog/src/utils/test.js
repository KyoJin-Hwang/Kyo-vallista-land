// then 방식

const thenApi = () => {
  fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
    .then((res) => {
      return res.json()
    })
    .then((data) => console.log(data))
}

// async / await 방식
const asyncApi = async () => {
  const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${num}`)
  const data = await res.json()
  console.log(data)
}
