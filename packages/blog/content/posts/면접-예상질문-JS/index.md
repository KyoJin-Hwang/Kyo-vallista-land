---
title: 기술면접 예상 질문(Javascript)
tags:
  - Tech Interview
image: ./assets/0.png
date: 2024-11-19 18:10:00
draft: false
series: FE기술면접
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📌 Javascript](#📌-HTML)
  - [💡 Sync와 Async의 차이점은?](#<strong>💡-Sync와-Async의-차이점은?</strong>)
  - [💡 Blocking과 Non-Blocking의 차이점은?](#<strong>💡-Blocking과-Non-Blocking의-차이점은?</strong>)
  - [💡 콜백함수란?](#<strong>💡-콜백함수란?</strong>)
  - [💡 콜백지옥과, 콜백지옥 해결방법은?](#<strong>💡-콜백지옥과,-콜백지옥-해결방법은?</strong>)
  - [💡 Event Loop에 대해 설명해 주세요.](#<strong>💡-Event-Loop에-대해-설명해-주세요.</strong>)
  - [💡 Event Delegation에 관해 설명해주세요.](#<strong>💡-Event-Delegation에-관해-설명해주세요.</strong>)
  <!-- - []() -->

## 📌 Javascript

### **💡 Sync와 Async의 차이점은?**

- **Sync**: `작업이 순차적으로 실행되며, 앞의 작업이 완료되어야 다음 작업이 실행됩니다.` 따라서 작업 시간이 길어질 경우 전체 실행이 지연됩니다.
- **Async**: `작업이 동시에 실행되며, 현재 작업이 끝나지 않아도 다른 작업을 진행할 수 있습니다.` 주로 네트워크 요청이나 파일 읽기 등에서 사용되며, 성능과 응답성을 높일 수 있습니다.

### **💡 Blocking과 Non-Blocking의 차이점은?**

- **Blocking** : `작업이 끝날 때까지 다른 작업이 대기해야 하는 방식입니다.` 특정 코드가 실행 중일 때, 해당 작업이 완료될 때까지 프로그램의 흐름이 멈추며, 이후의 코드가 실행되지 않습니다. 주로 `동기(Sync) 방식`에서 나타나며, 작업이 오래 걸릴 경우 전체 응답성이 저하됩니다.

- **Non-Blocking** : `작업이 끝날 때까지 기다리지 않고, 바로 다음 작업을 실행하는 방식입니다.` 특정 코드가 실행되는 동안에도 다른 코드가 동시에 실행될 수 있어 프로그램이 멈추지 않습니다. 주로 `비동기(Async) 방식`에서 나타나며, 서버 요청, 파일 읽기 등 시간이 오래 걸리는 작업에 많이 사용되어 효율성을 높입니다.

### **💡 콜백함수란?**

- 콜백함수는 함수의 매개변수로 다른 함수를 전달하고, 어떠한 이벤트가 발생한 후 매개변수로 전달한 함수가 다시 호출되는 것을 의미합니다.
- 보통 비동기 처리시 콜백함수를 사용합니다.

### **💡 콜백지옥과, 콜백지옥 해결방법은?**

`콜백지옥이란?`

- 함수의 매개 변수로 넘겨지는 콜백 함수가 반복되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상

`해결방법`

- 콜백지옥에 빠지면 가독성이 떨어지기 때문에, Promise나 Async/Await를 이용해 보완할 수 있습니다.

### **💡 Event Loop에 대해 설명해 주세요.**

`개념`

- 자바스크립트의 이벤트 루프는 단일 스레드에서 실행되는 비동기 작업을 처리하는 메커니즘입니다.
- 이벤트 루프는 Call stack, Micro task queue, Macro task queue로 구성됩니다.
- Micro task queue에는 Promise, async/await 과 같은 작업.
- Macro task queue(Task Queue)에는 Web API (setInterval, setTimeout)와 같은 작업.

`작동 방식`

- 이벤트 루프는 Call stack을 확인하고, Call stack이 비어있는 경우 Micro task queue의 작업을 Call stack으로 옮깁니다. 그리고 Micro task queue가 비어있는 경우, Macro task queue의 작업을 Call stack으로 옮기고 처리합니다.

### **💡 Event Delegation에 관해 설명해주세요.**

`개념`

- Event Delegation (이벤트 위임)
- 상위 요소에 이벤트 리스너를 추가하여, 자식 요소의 이벤트를 처리하는 기법입니다.

`작동방식`

- 이벤트 버블링을 이용하여, 특정 자식 요소에서 발생한 이벤트가 부모 요소로 전파되도록 하고, 부모 요소에서 이벤트가 발생한 대상(target)을 확인하여 처리합니다.

`장점과 단점`

- 장점
  - 메모리 절약 : 부모 요소에 하나의 리스너만 추가하므로 메모리 사용이 줄어듭니다.
  - 유지보수 용이 : 이벤트 처리 로직을 수정할 때 한 곳만 수정하면 되어서 유지보수가 쉬워집니다.
  - 동적 요소 처리 : 동적으로 추가된 요소들에 대해 별도로 리스너를 추가할 필요가 없습니다.
- 단점
  - 이벤트 타겟 식별필요 : event.target을 사용하여 조건문을 통해 필터링해야 합니다. 코드가 복잡해질 수 있습니다.
  - 깊이 있는 요소 처리어려움 : 특정 요소에만 적용하려면 코드가 복잡해질 수 있습니다.
  - 상위 요소 이벤트 버블링 영향 : 자식 요소들이 의도치 않게 부모의 이벤트 리스너에 의해 처리될 수 있습니다.

`예시코드`

```html {numberLines}
<ul id="parent">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const parent = document.getElementById('parent')

  // 부모 요소에만 이벤트 리스너를 추가
  parent.addEventListener('click', (event) => {
    // 클릭한 요소가 li 요소인지 확인
    if (event.target.tagName === 'LI') {
      console.log(`Clicked on: ${event.target.textContent}`)
    }
  })
</script>
```

<!-- ### **💡 ** -->

[📚Move](<#📚카테고리-(Category)>)
