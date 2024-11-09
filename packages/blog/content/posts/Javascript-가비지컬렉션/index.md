---
title: 가비지컬렉션
tags:
  - Javascript 심화
image: ./assets/0.png
date: 2024-11-09 15:30:00
draft: false
series: Javascript 심화
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>
<br/>

## 📌 가비지컬렉션

- 자바스크립트의 메모리 관리방법이다.
- 자바스크립트의 엔진이 자동으로, 데이터가 할당된 메모리에서 더 이상 사용되지 않는
  데이터를 해제하는 것.
- 가비지컬렉션은 개발자 직접 관여 할수없다.

`예시`

```javascript {numberLines}
// M1 저장
// M1 : { x : M2 }

// M2는 x의 값 저장
// M2 : 1

let a = { x: 1 }
let b = a

// M3 저장
// M3 : 2
b.x = 2

// M1의 x 는 M2 를 바라보지않고 M3를 바라본다.

// M1 : { x : M3 }
console.log(a) // 결과값 : { x : 2}
console.log(b) // 결과값 : { x : 2}

// M2의 1의 값은 M3 의 값으로 인해 사용되지 않는 데이터로 판단하여 해제된다.
```
