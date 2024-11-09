var globalVar = '전역 변수' // 전역 변수

function outerFunction() {
  var outerVar = '외부 함수 변수' // 외부 함수 변수

  function innerFunction() {
    var innerVar = '내부 함수 변수' // 내부 함수 변수
    console.log(innerVar) // 내부 함수에서 "내부 함수 변수" 출력
    console.log(outerVar) // 외부 함수에서 "외부 함수 변수" 출력
    console.log(globalVar) // 전역에서 "전역 변수" 출력
  }

  innerFunction() // innerFunction을 호출
}

outerFunction() // outerFunction을 호출
