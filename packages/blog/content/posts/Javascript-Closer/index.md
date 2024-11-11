---
title: 클로저 (Closer)
tags:
  - Javascript 심화
image: ./assets/0.png
date: 2024-11-11 16:30:00
draft: false
series: Javascript 심화
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>
<br/>

## 📌 클로저 (Closer)

<br/>
<br/>

### 🌈 클로저 개념

- 함수가 선언될 때의 렉시컬 환경(Lexical Environment)을 기억하여, 함수가 해당 스코프 밖에서 실행되어도 그 환경에 접근할 수 있게 하는 기능을 말합니다.
- 내부 함수가 외부 함수의 스코프에 접근할 수 있게 해주는 특성입니다.

### 🔥 클로점 장점

- **전역 변수 사용 최소화**
  - 클로저는 필요한 데이터와 변수를 함수 내부에서 관리할 수 있게 하여 전역 변수를 줄이고, 충돌 위험을 최소화합니다.
- **데이터 보존**
  - 외부 함수의 실행이 종료된 후에도 클로저가 참조하고 있는 변수를 유지할 수 있어, 함수 실행 시 상태를 기억하여 데이터를 보존할 수 있습니다.
- **캡슐화 및 정보 은닉**
  - 클로저 내부의 변수는 외부에서 직접 접근할 수 없기 때문에, 캡슐화와 같은 객체 지향의 정보 은닉을 함수 기반 코드에서도 활용할 수 있습니다.
- **모듈화와 재사용성**
  - 관련된 데이터와 기능을 클로저로 묶어 모듈화함으로써, 독립적이고 재사용 가능한 코드 구성을 돕습니다.

### 🔥 클로저 단점

- **메모리 누수 위험**
  - 클로저는 외부 변수의 참조를 유지하므로, 잘못된 사용 시 메모리를 비우지 못하고 점유해 메모리 누수가 발생할 수 있습니다.
- **디버깅의 어려움**
  - 클로저는 실행 시점에 참조하는 변수가 결정되므로, 디버깅이 복잡해질 수 있습니다. 특히 변수가 다중 참조될 경우 문제가 발생할 가능성이 큽니다.
- **성능 저하**
  - 클로저는 함수 실행이 끝난 후에도 참조를 유지하기 때문에 메모리 사용량이 늘어나며, 클로저가 많아질수록 성능에 영향을 줄 수 있습니다.
- **코드 복잡도 증가**
  - 클로저는 내부 구조가 복잡해질 수 있어 코드 가독성을 떨어뜨리고, 유지보수 시에 관리가 어려울 수 있습니다.

`클로저 예시`

```javascript {numberLines}
function createPerson(name) {
  let _name = name
  return {
    getName: function () {
      return _name
    },
    setName: function (name) {
      _name = name
    }
  }
}

const person = createPerson('Owen')
console.log(person.getName()) // 'Owen'
person.setName('Kyo Jin')
console.log(person.getName()) // 'Kyo Jin'
```

`클로저 예시2`

```javascript {numberLines}
// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.

function makeCounter(aux) {
  // 카운트 상태를 유지하기 위한 자유 변수
  let counter = 0

  // 클로저를 반환
  return function () {
    // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    counter = aux(counter)
    return counter
  }
}

// 보조 함수
function increase(n) {
  return ++n
}

// 보조 함수
function decrease(n) {
  return --n
}

// 함수로 함수를 생성한다.
// makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다.

const increaser = makeCounter(increase)
console.log(increaser()) // 1
console.log(increaser()) // 2

// increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
const decreaser = makeCounter(decrease)
console.log(decreaser()) // -1
console.log(decreaser()) // -2
```
