---
title: 얕은복사와 깊은복사
tags:
  - Javascript 심화
image: ./assets/0.png
date: 2024-11-09 14:30:00
draft: false
series: Javascript 심화
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>
<br/>

## 📌 얕은복사 와 깊은복사

- 얕은복사와 깊은복사는 Javscript의 참조형 데이터 에서만 유효하다.

- 얕은복사(Shallow Copy) : 참조형의 1차원 데이터만 복사
- 깊은복사(Deep Copy) : 참조형의 모든 차원 데이터를 복사

`얕은복사 예시`

```javascript {numberLines}
// 여기에서의 M? 은  Memory 예시 입니다.
// 얕은복사 예제

// M1 = {x : 1} 저장
let a = { x: 1 }

// M2 = {x : 1} 저장
// 새로운 객체 생성
// let b = { ...a }
let b = Object.assign({}, a)

// M2 값 변경
b.x = 4

// { x : 1 } M1
console.log(a)

// { x : 4 } M2
console.log(b)
```

`얕은복사 예시2`

```javascript {numberLines}
// 여기에서의 M? 은  Memory 예시 입니다.

// M1 = { x: { y: 1 } } 저장
let a = { x: { y: 1 } }

// M2 = { x: { y: 1 } } 저장 (얕은 복사)
let b = { ...a }

// 얕은 복사로 인해 b.x와 a.x가 같은 객체를 가리킴
b.x.y = 4

// M1, M2 둘 다 값이 변한다.
console.log(a.x.y) // 4
console.log(b.x.y) // 4

// false: 최상위 객체는 새로 생성되어 다름
console.log(a === b)

// true: 얕은 복사로 인해 x는 동일한 객체를 가리킴
console.log(a.x === b.x)
console.log(a.x.y === b.x.y)
```

`깊은복사 예시`

```javascript {numberLines}
// 여기에서의 M? 은  Memory 예시 입니다.

// 원본 객체 생성
let a = { x: { y: 1 } }

// JSON 방식으로 깊은 복사 수행
let b = JSON.parse(JSON.stringify(a))

// 깊은 복사가 되었으므로 b.x.y를 변경해도 a.x.y에는 영향을 주지 않음
b.x.y = 4

// a와 b의 x.y 값이 다르게 출력됨
console.log(a.x.y) // 1 (원본 값 유지)
console.log(b.x.y) // 4 (복사본의 값만 변경)

// 최상위 객체도 서로 다름
console.log(a === b) // false

// 깊은 복사로 인해 중첩된 객체도 서로 다름
console.log(a.x === b.x) // false
```
