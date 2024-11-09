---
title: 불변성과 가변성
tags:
  - Javascript 심화
image: ./assets/0.png
date: 2024-11-05 14:30:00
draft: false
series: Javascript 심화
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>
<br/>

## 📌 불변성과 가변성

- 불변성(Immutability)
  - 생성된 데이터가 메모리에서 변경되지 않는다.
- 가변성(Mutability)
  - 생성된 데이터가 메모리에서 변경될 수 있다.
- 자바스크립트에서의 원시형은 `불변성`, 참조형은 `가변성`을 가지고있다.

`불변성 예시`

```javascript {numberLines}
// 여기에서의 M? 은  Memory 예시 입니다.

// M1 = 1 저장
let a = 1

// a를 할당하므로 M1 을 바라봄
// 현재 값 : 1
let b = a

// M2에 2를 추가한다.
// a와 같지않고 M2 를 바라보게된다.
// 현재 값 : 2
b = 2

console.log(a)
// M1 : 1
console.log(b)
// M2 : 2
```

`가변성 예시`

```javascript {numberLines}
// 여기에서의 M? 은  Memory 예시 입니다.
// 각 변수에서의 한개의 할당 예시

// M1 = {x : 1} 저장
let a = { x: 1 }

// a를 할당하므로 M1 을 함께 바라봄
// 현재값 {x : 1}
let b = a

// M1의 값을 변경
// M1 : {x : 2}
b.x = 2

// M1 : 결과값: {x : 2}
console.log(a)
console.log(b)

// M1의 값을 변경
// M1 : {x : 7}
a.x = 7

// M1 : 결과값: {x : 7}
console.log(a)
console.log(b)
```

`가변성 예시2`

```javascript {numberLines}
// 여기에서의 M? 은  Memory 예시 입니다.
// 각 변수에 할당하는 예시

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
```
