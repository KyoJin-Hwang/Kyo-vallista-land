// 여기에서의 M? 은  Memory 예시 입니다.

// M1 = {x : 1} 저장
const a = { x: 1 }

// M2 = {x : 1} 저장
let b = { x: 1 }

// M1 값 변경
a.x = 3

// M2 값 변경
b.x = 4

// M1 : 결과값: {x : 3}
console.log(a)

// M2 : 결과값: {x : 4}
console.log(b)
