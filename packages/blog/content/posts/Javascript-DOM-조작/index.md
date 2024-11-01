---
title: Javascript DOM 조작
tags:
  - Javascript 기초 정리
image: ./assets/0.png
date: 2024-10-27 16:00:00
draft: false
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📌 검색 및 탐색](#📌-검색-및-탐색)
- [📌 생성, 조회, 수정](#📌-생성,-조회,-수정)
<!-- - [📌 크기와 좌표](#📌-크기와-좌표) -->

## 📌 검색 및 탐색

### 💡 DOM 요소 선택

| 메서드/프로퍼티                              | 설명                                                           |
| -------------------------------------------- | -------------------------------------------------------------- |
| `document.getElementById(id)`                | 주어진 `id`를 가진 단일 요소를 반환.                           |
| `document.getElementsByClassName(className)` | 주어진 클래스 이름을 가진 모든 요소를 HTMLCollection으로 반환. |
| `document.getElementsByTagName(tagName)`     | 주어진 태그 이름을 가진 모든 요소를 HTMLCollection으로 반환.   |
| `document.querySelector(selector)`           | 주어진 CSS 선택자에 맞는 첫 번째 요소를 반환.                  |
| `document.querySelectorAll(selector)`        | 주어진 CSS 선택자에 맞는 모든 요소를 NodeList로 반환.          |

<br/>

`사용 예시`

```javascript {numberLines}
// ID로 요소 선택
const header = document.getElementById('header')

// 클래스 이름으로 요소 선택
const items = document.getElementsByClassName('item') // HTMLCollection

// 태그 이름으로 요소 선택
const paragraphs = document.getElementsByTagName('p') // HTMLCollection

// CSS 선택자로 첫 번째 요소 선택
const firstItem = document.querySelector('.item') // 첫 번째 .item 클래스 요소

// CSS 선택자로 모든 요소 선택
const allItems = document.querySelectorAll('.item') // NodeList
```

[📚Move](<#📚카테고리-(Category)>)

## 📌 생성, 조회, 수정

### 💡 DOM 조작 메서드와 속성

| 메서드                     | 설명                                                        |
| -------------------------- | ----------------------------------------------------------- |
| `document.createElement()` | 메모리에만 존재하는 새로운 HTML 요소를 생성해서 반환합니다. |
| `document.prepend()`       | 선택된 노드 요소의 첫 번째 위치에 새로운 요소를 추가합니다. |
| `document.append()`        | 선택된 노드 요소의 마지막 위치에 새로운 요소를 추가합니다.  |
| `document.remove()`        | 요소를 제거한다.                                            |
| `N.textContent`            | 노드의 텍스트를 얻거나 변경한다.                            |
| `E.innerHTML`              | 요소의 새로운 HTML을 얻거나, HTML 내용의 문자를 얻는다.     |

<br/>

`사용 예시`

<br/>

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/owencold/embed/oNKEBqR?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/owencold/pen/oNKEBqR">
  Untitled</a> by Owen (<a href="https://codepen.io/owencold">@owencold</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 💡 HTML 요소의 속성과 사용 설명

| 속성          | 설명                                   |
| ------------- | -------------------------------------- |
| `data-속성`   | 요소의 data-속성 값을 얻거나 지정한다. |
| `E.tagName`   | 요소의 태그 이름을 반환한다.           |
| `E.id`        | 요소의 id를 얻거나 지정한다.           |
| `E.className` | 요소의 class를 얻거나 지정한다.        |

<br/>

`사용 예시`

<br/>

<iframe height="300" style="width: 100%;" scrolling="no" title="js data-set Test" src="https://codepen.io/owencold/embed/zYgRZEO?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/owencold/pen/zYgRZEO">
  js data-set Test</a> by Owen (<a href="https://codepen.io/owencold">@owencold</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 💡 ClassList 및 style 사용법

| 메서드                  | 설명                                                    |
| ----------------------- | ------------------------------------------------------- |
| `E.add(className)`      | 지정한 클래스를 요소의 클래스 목록에 추가합니다.        |
| `E.remove(className)`   | 지정한 클래스를 요소의 클래스 목록에서 제거합니다.      |
| `E.toggle(className)`   | 지정한 클래스가 있으면 제거하고, 없으면 추가합니다.     |
| `E.contains(className)` | 지정한 클래스가 요소의 클래스 목록에 있는지 확인합니다. |
| `E.style.property`      | 요소의 CSS 스타일 속성을 설정하거나 반환합니다.         |

<br/>

`사용 예시`

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/owencold/embed/mdNXWgp?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/owencold/pen/mdNXWgp">
  Untitled</a> by Owen (<a href="https://codepen.io/owencold">@owencold</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 💡 getAttribute() 및 setAttribute()

| 메서드                             | 설명                                    |
| ---------------------------------- | --------------------------------------- |
| `E.getAttribute(attribute)`        | 지정한 속성의 값을 반환합니다.          |
| `E.setAttribute(attribute, value)` | 지정한 속성을 설정하고 값을 지정합니다. |

<br/>

`사용 예시`

<br/>

<iframe height="300" style="width: 100%;" scrolling="no" title="attribute Test" src="https://codepen.io/owencold/embed/NWQyjbV?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/owencold/pen/NWQyjbV">
  attribute Test</a> by Owen (<a href="https://codepen.io/owencold">@owencold</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

[📚Move](<#📚카테고리-(Category)>)

<!-- ## 📌 크기와 좌표

[📚Move](<#📚카테고리-(Category)>) -->
