---
title: 기술면접 예상 질문(CSS)
tags:
  - Tech Interview
image: ./assets/0.png
date: 2024-10-02 18:10:00
draft: false
series: FE기술면접
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📌 CSS](#📌-CSS)
  - [🎨 Cascading이란?](#<strong>🎨-Cascading이란?</strong>)
  - [🎨 display 설명해 주세요.](#<strong>🎨-display-설명해-주세요.</strong>)
  - [🎨 css 변수 선언 및 호출하는 방법을 설명해 주세요.](#<strong>🎨-css-변수-선언-및-호출하는-방법을-설명해-주세요.</strong>)
  - [🎨 position에 대하여 설명해 주세요.](#<strong>🎨-position에-대하여-설명해-주세요.</strong>)
  - [🎨 절대단위와 상대단위 차이](#<strong>🎨-절대단위와-상대단위-차이</strong>)
  - [🎨 px em rem 차이](#<strong>🎨-px-em-rem-차이</strong>)
  - [🎨 reset.css 사용하는이유?](#<strong>🎨-reset.css-사용하는이유?</strong>)
  - [🎨 Floats가 어떻게 동작하는지 설명해주세요.](#<strong>🎨-Floats가-어떻게-동작하는지-설명해주세요.</strong>)
  - [🎨 padding과 margin의 차이는?](#<strong>🎨-padding과-margin의-차이는?</strong>)
  - [🎨 box model 이란?](#<strong>🎨-box-model-이란?</strong>)
  - [🎨 box-sizing 속성에 대해서 설명해주세요.](#<strong>🎨-box-sizing-속성에-대해서-설명해주세요.</strong>)
  - [🎨 { box-sizing: border-box }은 무엇이고 사용했을때 이점은 무엇인가요?](#<strong>🎨-{-box-sizing:-border-box-}은-무엇이고-사용했을때-이점은-무엇인가요?</strong>)
  - [🎨 inline과 inline-block의 차이점은 무엇인가요?](#<strong>🎨-inline과-inline-block의-차이점은-무엇인가요?</strong>)
  - [🎨 z-index를 설명해주세요.](#<strong>🎨-z-index를-설명해주세요.</strong>)
  - [🎨 CSS in JS의 장단점에 대해서 설명해 주세요](#<strong>🎨-CSS-in-JS의-장단점에-대해서-설명해-주세요</strong>)
  - [🎨 Flex와 Grid의 차이점](#<strong>🎨-Flex와-Grid의-차이점</strong>)
  - [🎨 반응형 웹 3요소](#<strong>🎨-반응형-웹-3요소</strong>)
  - [🎨 CSS 적용 우선순위](#<strong>🎨-CSS-적용-우선순위</strong>)

## 📌 CSS

### **🎨 Cascading이란?**

**정의**

- 스타일 규칙 및 선언이 어떻게 적용되는지에 대한 규칙 및 우선 순위를 정의하는 프로세스이다.

**순서**

- 중요도(Importance): !important로 선언된 스타일 규칙은 다른 모든 규칙보다 우선순위가 높습니다.
- 명시도(Specificity): 구체적인(특정한) 선택자가 높은 우선순위를 갖습니다. 예를 들어, ID 선택자가 클래스 선택자보다 높은 우선순위를 갖습니다.
- 소스 순서(Source Order): 동일한 특성 값과 특정성을 가지는 규칙은 마지막에 선언된 규칙이 먼저 선언된 규칙을 덮어씁니다. 즉, 나중에 선언된 규칙이 우선순위가 높습니다.

### **🎨 display 설명해 주세요.**

**block**

- 요소를 블록 수준 상자로 표시합니다. 요소는 새로운 줄에서 시작하며, 가능한 최대 가로 너비를 차지하고 수직으로 쌓입니다.
- 블록 요소는 width, height, margin, padding 등의 속성을 사용하여 크기와 간격을 조정할 수 있습니다.
- `<div>, <p>, <h1>`과 같은 요소들은 기본적으로 블록 요소입니다.

**inline**

- 요소를 인라인 수준 상자로 표시합니다. 요소는 새로운 줄에서 시작하지 않고, 필요한 만큼의 너비만 차지하며, 수평으로 나란히 배치됩니다.
- 인라인 요소는 width, height, margin-top, margin-bottom 등의 세로 방향 속성을 조정할 수 없습니다.
- `<span>, <a>, <strong>` 과 같은 요소들은 기본적으로 인라인 요소입니다.

**inline-block**

- 요소를 인라인 수준 상자로 표시하지만, 블록 수준 요소처럼 width, height, margin, padding 등의 속성을 사용하여 크기와 간격을 조정할 수 있습니다. 즉, 인라인 요소와 유사한 수평 배치를 유지하면서 블록 요소의 특성을 가집니다.

**none**

- 요소를 화면에서 완전히 숨깁니다. 해당 요소는 레이아웃에 차지하는 공간이 없으며, 표시되지 않습니다. 주로 JavaScript를 통해 동적으로 요소를 숨기는 데 사용됩니다.

**grid, flex**

- 복잡한 레이아웃을 구성하기 위해 그리드나 플렉스 박스 모델을 사용할 수 있는 속성 값입니다.
- display: grid는 요소를 그리드 컨테이너로 설정
- display: flex는 요소를 플렉스 컨테이너로 설정
- 이러한 값은 요소들을 유연하게 배치하고 정렬하는 데 사용됩니다.

### **🎨 css 변수 선언 및 호출하는 방법을 설명해 주세요.**

**선언 방법**

- --을 붙여주고 변수이름을 선언한다.

**`예시`**

```css {numberLines}
:root {
  --primary-color: #8b008b;
  /* 웹사이트의 주된 색상으로 짙은 보라색(#8B008B)을 --primary-color라는 변수 이름으로 저장한다. */
}
p {
  color: var(--primary-color);
  /* var(변수이름)를 이용해서 --primary-color 변수의 값이 필요한 곳에 삽입한다. */
}
```

### **🎨 position에 대하여 설명해 주세요.**

**static**

- 기본값으로 일반적인 문서 흐름에 따라 배치한다.
- z-index 속성이 아무런 영향도 주지 않는다.

**relative**

- 일반적인 문서 흐름에서 top,right,bottom,left 등의 값을 통해 오프셋을 적용한다. 이는 다른 요소에 영향을 주지 않는다.
- 페이지 레이아웃에서 요소가 차지하는 공간은 static일 때와 같다.

**absolute**

- 문서 흐름에서 요소를 제거하고, 가장 가까운 위치가 지정된 부모요소에 대해 상대적으로 배치한다.
- 최종 위치는 top, right, bottom, left 값이 지정

**fixed**

- 문서 흐름에서 요소를 제거하고, viewport의 초기 컨테이닝 블록을 기준으로 배치한다.
- fixed는 항상 새로운 stacking context를 생성한다.
- 최종 위치는 top, right, bottom, left 값이 지정

> `Stacking context` : 웹 요소의 쌓임 순서를 정의

**sticky**

- 일반적인 문서 흐름에 따라 배치하고, 스크롤 될 때, 자신의 부모의 범위 안에서만 고정되어있다.
- 자신의 부모 위치가 뷰포인트에서 벗어나면 일반적인 흐름을 따른다.
- sticky는 top, right, bottom, left 속성중 하나이상을 필수로 사용

### **🎨 절대단위와 상대단위 차이**

|          | 절대 단위                               | 상대 단위                    |
| -------- | --------------------------------------- | ---------------------------- |
| **정의** | 고정된 크기로 항상 일정함               | 기준에 따라 크기가 변동함    |
| **예시** | px, pt, cm, mm, in                      | em, rem, %, vw, vh           |
| **특징** | 반응형 웹 디자인에서는 잘 사용되지 않음 | 다양한 화면 크기에 적응 가능 |

<br/>

**결론**

- 절대 단위는 고정적인 크기를 요구할 때 사용
- 상대 단위는 유동적인 크기를 필요로 할 때 사용.

### **🎨 px em rem 차이**

**px**

- 절대 단위로, 화면의 픽셀 수를 기준으로 함.
- 해상도에 관계없이 고정된 크기를 제공.

**em**

- 상대 단위로, 현재 요소의 폰트 크기를 기준으로 함.
- 예: 부모 요소의 폰트 크기가 16px일 때 1.5em은 24px에 해당.

**rem**

- 상대 단위로, 루트 요소(일반적으로 <html> 태그)의 폰트 크기를 기준으로 함.
- 모든 요소에서 일관된 크기를 유지하여 반응형 디자인에 유용.

**% (백분율)**

- 상대 단위로, 부모 요소의 크기에 대한 비율을 나타냄.
- 예: 부모 요소의 너비가 200px일 때 50%는 100px에 해당.

### **🎨 reset.css 사용하는이유?**

- 브라우저 기본 스타일을 모두 제거하여 모든 요소가 동일한 기본 스타일을 가지도록 합니다.
- 프로젝트에 참여한 모든 개발자가 동일한 출발점에서 스타일을 적용할 수 있게 해줍니다.

### **🎨 Floats가 어떻게 동작하는지 설명해주세요.**

- 요소를 페이지의 왼쪽 또는 오른쪽으로 띄워 배치하고, 그 주위에 다른 콘텐츠가 흐르게 만드는 데 사용됩니다.
- 주로 레이아웃을 잡거나 이미지를 텍스트에 맞춰 정렬하는 데 사용됩니다.

**주의사항**

- 요소의 위치를 고정시키는 position 프로퍼티의 absolute를 사용하면 안된다.
- float 속성이 relative한 위치 지정을 하기 때문에 position: absolute 속성이 적용되지 않기 때문이다.

### **🎨 padding과 margin의 차이는?**

- margin은 대상의 외부 여백을 의미하고, padding은 대상의 내부 여백을 의미한다.

### **🎨 box model 이란?**

- HTML element가 웹 페이지에서 차지하는 공간을 정의한 모델
- content, padding, border, margin 이 있다.

### **🎨 box-sizing 속성에 대해서 설명해주세요.**

**content-box**

- 기본값이다.
- 전체너비를 Content의 width를 포함한 padding,border을 더한 값 (height 동일)
- Content Box Width = width + padding + border

**border-box**

- 전체너비가 Content의 width와 padding, border를 더한 값으로 고정되어있다.
- Content Box Width = width - (padding \* 2) - (border \* 2)
<iframe height="350" style="width: 100%;" scrolling="no" title="CSS Test" src="https://codepen.io/owencold/embed/VwobVgB?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/owencold/pen/VwobVgB">
  CSS Test</a> by Owen (<a href="https://codepen.io/owencold">@owencold</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### **🎨 { box-sizing: border-box }은 무엇이고 사용했을때 이점은 무엇인가요?**

- 패딩이나 보더 값이 늘어나도 박스 자체의 크기가 변하지 않고 컨텐츠의 영역이 줄어들어 일정한 박스 사이즈를 유지할 수 있음.

### **🎨 inline과 inline-block의 차이점은 무엇인가요?**

**inline**

- 가로폭을 전부 차지 하지 않고 상위 태그 옆으로 붙는 특징이 있습니다.
- width와 height값을 지정해도 크기는 변하지 않습니다.

**inline-block**

- 가로폭을 전부 차지하지 않고, width와 height 값을 가질 수 있습니다.

### **🎨 z-index를 설명해주세요.**

- 요소들의 쌓이는 우선순위를 결정하는 CSS 속성이며 position 속성 값이 static이 아닌 요소만 적용됩니다. 그리고 z-index 값이 높을수록 요소는 위에 위치하게 됩니다

### **🎨 CSS in JS의 장단점에 대해서 설명해 주세요**

**장점**

- 컴포넌트 단위의 스타일링: 컴포넌트에 적용될 스타일을 같은 파일 내에서 정의하고 관리할 수 있습니다.
- 자바스크립트를 활용: 자바스크립트가 제공하는 모든 기능(반복문, 함수 등)을 사용할 수 있습니다.
- 동적인 스타일링: props나 state에 따라 상황에 맞는 스타일을 적용할 수 있습니다.

**단점**

- 런타임 오버헤드: 자바스크립트 코드가 실행되며 CSS로 변환되기 때문에 큰 애플리케이션에서는 성능이 저하될 수 있습니다.
- 파일 크기 증가: 자바스크립트 파일에 CSS가 포함되기 때문에 최종 번들 크기가 증가합니다.

### **🎨 Flex와 Grid의 차이점**

- **Flex 설명**

  - 한 방향 레이아웃 시스템 1차원
  - 작은 화면에서 레이아웃이 변경되어야 할 때
  - 요소가 동일한 크기여야 하거나, 부모 요소의 크기에 맞추어 크기를 조절해야 할 때

- **Flex 예시**
  - 네비게이션 바, 버튼, 입력 폼 등과 같은 작은 요소
  - 모바일 기기에서 사용자 인터페이스를 만들 때 Flexbox를 사용하여 간단하게 반응형 레이아웃

<iframe height="400" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/owencold/embed/ZEgKPKb?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/owencold/pen/ZEgKPKb">
  Untitled</a> by Owen (<a href="https://codepen.io/owencold">@owencold</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<br />
<br />

- **Grid 설명**

  - 두 방향 레이아웃 시스템 2차원
  - 복잡한 디자인 레이아웃을 만들어야 할 때
  - 레이아웃의 각 부분에 대한 제어가 필요할 때

- **Grid 예시**
  - 기사 페이지, 이미지 갤러리, 제품 목록, 뉴스 피드

<iframe height="420" style="width: 100%;" scrolling="no" title="CSS Grid Test" src="https://codepen.io/owencold/embed/MWNmxjW?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/owencold/pen/MWNmxjW">
  CSS Grid Test</a> by Owen (<a href="https://codepen.io/owencold">@owencold</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### **🎨 반응형 웹 3요소**

1. 유연한 그리드 (Flexible Grid)

   - 웹 페이지의 레이아웃을 고정된 픽셀 대신 상대적인 단위(주로 % 또는 rem 단위)로 정의하는 그리드 시스템입니다.
   - 이 유연한 그리드는 페이지 요소들이 화면 크기에 따라 비율적으로 확장하거나 축소되게 하여, 다양한 화면 크기에서도 자연스러운 배치를 유지합니다.

2. 유연한 이미지 (Flexible Images)

   - 이미지와 미디어 요소들을 상대적인 크기로 설정해, 화면 크기에 맞춰 자동으로 조정되도록 하는 방식입니다.
   - 일반적으로 max-width: 100%와 같은 CSS 속성을 사용해, 이미지가 부모 요소의 크기를 넘지 않도록 제한합니다. 이를 통해 큰 화면에서는 크게, 작은 화면에서는 자동으로 축소되어 화면에 맞게 표시한다.

3. 미디어 쿼리 (Media Queries)
   - CSS에서 화면 크기, 해상도, 디바이스 종류에 따라 다른 스타일을 적용할 수 있는 조건문입니다.
   - 미디어 쿼리를 사용하면 특정 화면 너비에 맞는 스타일을 정의할 수 있으며, 각 디바이스별로 최적화된 레이아웃을 제공할 수 있습니다. 예를 들어, 데스크탑에서는 복잡한 레이아웃을, 모바일에서는 단순한 레이아웃을 적용할 수 있습니다.

### **🎨 CSS 적용 우선순위**

1. !important (99999점)
2. inline style (1000점)
3. ID 선택자 (100점)
4. Class 선택자 (10점)
5. Tag 선택자 (1점)
6. \*(전체) 선택자 (0점)
7. 동일한 점수 일경우 나중에 적용된 것이 적용된다.

> - 가상클래스 10점 및 가상요소 1점 주의

```css ${numberLines}
/* 예시 1: 태그 선택자 + 가상 클래스 */
p:hover {
  color: blue;
}
/* p(1점) + hover(10점) = 11점 */

/* 대표 : hover, active. focus, nth-child 등등 */
```

```css ${numberLines}
/* 예시 2: 클래스 선택자 + 가상 요소 */
.button::before {
  content: 'Before';
  color: red;
}
/* .button(10점) + before(1점) = 11점 */

/*  대표 : before, after 등등 */
```

### **🎨 반응형과 적응형의 차이**

|                 | 반응형 디자인 (Responsive Design)                   | 적응형 디자인 (Adaptive Design)           |
| --------------- | --------------------------------------------------- | ----------------------------------------- |
| **개념**        | 유동적으로 변화하는 레이아웃                        | 여러 고정된 레이아웃을 사용하는 디자인    |
| **구현 방식**   | CSS 미디어 쿼리를 활용해 자동으로 조정              | 여러 개의 고정된 레이아웃을 제공          |
| **사용자 경험** | 다양한 화면에서 일관된 경험 제공                    | 각 디바이스에 최적화된 경험 제공          |
| **유지보수**    | 하나의 코드베이스로 관리 가능                       | 여러 레이아웃을 유지해야 하므로 관리 복잡 |
| **로딩 속도**   | 일반적으로 느리거나 데이터 전송이 더 필요할 수 있음 | 최적화된 레이아웃 덕분에 빠를 수 있음     |
| **적용 예**     | 모바일, 태블릿, 데스크탑에서 동일한 콘텐츠          | 특정 해상도나 디바이스에 맞는 콘텐츠 표시 |

[📚Move](<#📚카테고리-(Category)>)
