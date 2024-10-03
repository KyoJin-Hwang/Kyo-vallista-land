---
title: 기술면접 예상 질문 (HTML)
tags:
  - 프론트엔드
image: ./assets/0.png
date: 2024-09-30 19:10:00
draft: false
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📌 HTML](#📌-HTML)
  - [🦴 doctype이 무엇을 하는 것인가요?](#<strong>🦴-doctype이-무엇을-하는-것인가요?</strong>)
  - [🦴 meta 태그에 대해서 알고 있나요?](#<strong>🦴-meta-태그에-대해서-알고-있나요?</strong>)
  - [🦴 meta 태그의 요소에 대해서 아는대로 말해보세요](#<strong>🦴-meta-태그의-요소에-대해서-아는대로-말해보세요</strong>)
  - [🦴 meta 태그로 SEO 에 가장 큰 영향을 미치는것은?](#<strong>🦴-meta-태그로-SEO-에-가장-큰-영향을-미치는것은?</strong>)
  - [🦴 form 태그 method에는 어떤것이 있나요? or form 태그의 전송방식의 종류는?](#<strong>🦴-form-태그-method에는-어떤것이-있나요?-or-form-태그의-전송방식의-종류는?</strong>)
  - [🦴 HTML5에서 추가된 그래픽 요소는?](#<strong>🦴-HTML5에서-추가된-그래픽-요소는?</strong>)
  - [🦴 HTML5에서 추가된 대표적인 시멘틱 태그는?](#<strong>🦴-HTML5에서-추가된-대표적인-시멘틱-태그는?</strong>)
  - [🦴 올바른 시멘틱 태그를 사용하는 이유는?](#<strong>🦴-올바른-시멘틱-태그를-사용하는-이유는?</strong>)
  - [🦴 SEO란?](#<strong>🦴-SEO란?</strong>)
  - [🦴 section 태그와 article 태그의 차이점은?](#<strong>🦴-section-태그와-article-태그의-차이점은?</strong>)
  - [🦴 button 태그의 default tpye은?](#<strong>🦴-button-태그의-default-tpye은?</strong>)
  - [🦴 script 태그와 link 태그의 위치로 적절한 위치와 그 이유는?](#<strong>🦴-script-태그와-link-태그의-위치로-적절한-위치와-그-이유는?</strong>)
  - [🦴 img 태그에서 alt 속성을 사용하는 이유는?](#<strong>🦴-img-태그에서-alt-속성을-사용하는-이유는?</strong>)
  - [🦴 html에서 lang의 용도는 무엇인가요?](#<strong>🦴-html에서-lang의-용도는-무엇인가요?</strong>)
  - [🦴 다국어 페이지를 제공하는 여러방법에 대해서 설명](#<strong>🦴-다국어-페이지를-제공하는-여러방법에-대해서-설명</strong>)
  - [🦴 브라우저 렌더링 과정을 설명해주세요.](#<strong>🦴-브라우저-렌더링-과정을-설명해주세요.</strong>)
  - [🦴 Reflow와 Repaint 설명해주세요.](#<strong>🦴-Reflow와-Repaint-설명해주세요.</strong>)
  - [🦴 <script>, <script async>와 <script defer> 차이점을 설명해주세요.](#<strong>🦴-<code><script></code>,-<code><script-async></code>와-<code><script-defer></code>-차이점을-설명해주세요.</strong>)
  - [🦴 data-속성은 무엇을 하는 것인가요? 사용했을 때 이점은 무엇인가요?](#<strong>🦴-data-속성은-무엇을-하는-것인가요?-사용했을-때-이점은-무엇인가요?</strong>)
  - [🦴 Progressive rendering이란 무엇인가요?](#<strong>🦴-Progressive-rendering이란-무엇인가요?</strong>)

## 📌 Computer Science

### **🔓 CORS란 무엇인가요?**

- 약어 : Cross-Origin Resource Sharing ( 교차 출처 리소스 공유)
- 악의적인 웹 사이트가 사용자의 브라우저를 통해 다른 사이트에 요청을 보내 사용자 정보를 훔치는 공격을 막기 위해 동일 출처 정책이 도입되었습니다. 하지만, CORS를 통해 서버는 명시적으로 안전한 출처에 대해 교차 출처 요청을 허용할 수 있습니다.

### **🍪 Cookie, SessionStorage, LocalStorage의 차이점을 설명**

**생성 방법**

- 쿠키는 서버 측에서 Set-Cookie 헤더를 사용하거나 브라우저에서 직접 생성할 수 있다.
- local과 session은 클라이언트(브라우저)에서 자바 스크립트를 사용하여 생성한다.

**데이터 만료**

- 쿠키는 수동으로 설정한다.
- local은 영구적이며 session은 브라우저 탭을 닫을 때 만료된다.

**브라우저 전체에서 지속**

- Local에서만 가능하다.
- 쿠키는 만료 설정 여부에 따라 다르다.

**용량**

- 쿠키 (4kb)
- local/session (5MB)

**접근성**

- session만 같은 탭에서 지속되며
- 쿠키와 local은 모든 윈도우에서 접근 가능하다.

## 📌 HTML

### **🦴 doctype이 무엇을 하는 것인가요?**

- document type의 약어이다.
- 웹 페이지의 `최상단에 DOCTYPE을 선언`하여 웹 페이지가 어떤 버전의 `HTML, XHTML을 사용하는지 명시`한다.
- `HTML5 이전버전을 폐지하지 않는 이유` : 과거에 작성된, 웹 자료의 보존이 필요하기 때문에 유지하고 있다고 한다.

### **🦴 meta 태그에 대해서 알고 있나요?**

- 메타데이터는 문서에 대한 추가 정보를 제공하며, 브라우저나 검색 엔진(SEO) 등이 문서를 해석하고 처리할 때 활용
- `<head>` 태그 안에 사용되는 태그
- **http-equiv="항목 명"**
  - 웹 브라우저 서버에 명령을 내리는 속성
  - name 속성을 대신해 사용할 수 있음
  - html 문서가 응답 헤더와 함께 서버로부터 웹 브라우저에 전송되었을때만 의미를 가짐
  - content 속성의 정보, 값을 위한 HTTP header를 제공
- **name="정보 이름"**
  - meta 정보의 이름을 지정
  - 여러개 meta 정보의 이름을 정할 수 있으며, 지정하지 않으면 http-equiv와 같은 기능
- **content="정보 값"**
  - meta 정보의 내용을 지정
  - name 속성과 http-equiv와 연관된 값을 줌

### **🦴 meta 태그의 요소에 대해서 아는대로 말해보세요**

`keywords`

- 검색엔진에 의해 검색되는 단어 지정

```html {numberLines}
<meta name="keywords" content="HTML" />
```

`title`

- 홈페이지 제목

```html {numberLines}
<meta name="title" content="Owen | 블로그" />
```

`Description`

- 검색 결과에 표시되는 문자 지정

```html {numberLines}
<meta name="Description" content="안녕하세요. OWEN의 개발 블로그 입니다." />
```

`robots`

- 검색 로봇 제어
  - noindex: 검색 결과에 이 페이지를 표시 하지 않는다.
  - nofollow: 이 페이지의 링크를 따라가지 않는다.
  - noarchive: 검색 결과에 저장된 페이지 링크를 표시하지 않는다.
  - All(기본값): 색인 생성이나 게재에 대한 제한이 없음, 기본값이므로 명시적으로 표시해도 효과 없음
  - Non: noindex, nofollow와 같음
  - index: 그 페이지를 수집대상으로 한다.
  - Follow: 그 페이지를 포함해 링크가 걸린 곳을 수집대상으로 한다.

```html {numberLines}
<meta name="robots" content="noindex, nofollow" />
```

`charset`

- 문자 코드의 종류 설정
- UTF-8 인코딩하는 방식을 선언하는 이유는 글자 깨짐 현상을 방지하기 위함이다.

```html {numberLines}
<meta charset="UTF-8" />
```

`refresh`

- 새로 고침, 입력한 주소로 n초 후 이동

```html {numberLines}
<!-- 360초마다 새로고침 -->
<meta http-equiv="refresh" content="360" />

<!-- 네이버 주소로 3초 후 이동 -->
<meta http-equiv="refresh" content="3;url=http://naver.com" />
```

`og`

- 콘텐츠의 요약내용이 SNS에 게시되는데 최적화된 데이터를 가지고 갈 수 있도록 설정

```html {numberLines}
<meta property="og:title" content="콘텐츠 제목" />
<meta property="og:url" content="웹페이지 URL" />
<meta property="og:type" content="웹페이지 타입(blog, website 등)" />
<meta property="og:image" content="표시되는 이미지" />
<meta property="og:title" content="웹사이트 이름" />
<meta property="og:description" content="웹페이지 설명" />
```

`expires`

- 캐시 만료일

```html {numberLines}
<meta http-equiv="Expires" content="Mon, 30 Sep 2024 19:15:23 GMT" />
```

`viewport`

- 웹페이지의 반응형 디자인을 설정하는 데 사용됩니다. 주로 모바일 디바이스에서 페이지의 확대/축소 설정을 정의합니다.

```html {numberLines}
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### **🦴 meta 태그로 SEO 에 가장 큰 영향을 미치는것은?**

- title, description, robots이며, 이들은 SEO 성능에 직접적인 영향을 미친다.

### **🦴 form 태그 method에는 어떤것이 있나요? or form 태그의 전송방식의 종류는?**

- GET, POST

### **🦴 HTML5에서 추가된 그래픽 요소는?**

- `<SVG>, <Canvas>`

### **🦴 HTML5에서 추가된 대표적인 시멘틱 태그는?**

- `<header>` : 도입부에 해당하는 콘텐츠를 가지고 있는 부분을 의미합니다. 웹페이지 로고 등이 들어갑니다.
- `<nav>` : HTML 문서 사이를 탐색할 수 있는 링크의 집합을 정의합니다. 메뉴바로 주로 사용됩니다.
- `<main>` : HTML 문서의 핵심적인 내용이 들어있는 부분을 의미합니다. 쇼핑몰 같은 경우 상품목록들이 있는 부분입니다.
- `<section>` : 제목을 가지고 있으며, HTML 문서의 전체적인 내용과 관련이 있는 콘텐츠의 집합입니다.
- `<article>` : 독립적인 하나의 콘텐츠 영역입니다. 웹사이트의 나머지 부분과는 별도로 읽을 수 있어야합니다.

### **🦴 올바른 시멘틱 태그를 사용하는 이유는?**

- 시맨틱 태그를 활용하면 코드를 읽기 쉽게 만들 뿐만 아니라, SEO에 유리하며 웹 접근성에도 이점을 가집니다.

### **🦴 SEO란?**

- SEO(검색 엔진 최적화, Search Engine Optimization)는 웹 사이트가 검색 엔진에서 잘 인식되도록 최적화하는 작업
- 웹 사이트의 노출 순위를 높이고, 더 많은 트래픽을 유도

### **🦴 section 태그와 article 태그의 차이점은?**

- section
  - 문서 내에서 논리적으로 관련된 내용의 그룹을 구분할 때 사용
  - 장, 섹션, 구역 나눌때 사용
- articel
  - 독립적이고 완결된 콘텐츠를 나타낼 때 사용
  - 뉴스기사, 블로그, 게시물

### **🦴 button 태그의 default tpye은?**

- submit

### **🦴 script 태그와 link 태그의 위치로 적절한 위치와 그 이유는?**

**script 태그**

- `<body>` 태그 닫히기 직전 또는 `<head>` 태그안에 넣어야하는 경우는 defer or async를 사용하여 랜더링 차단 방지를 한다.
- `<body>` 태그 닫히기 직전에 하는 이유는 HTML 랜더링을 중단 하기때문이다.
- defer : HTML 파싱이 끝날 때까지 스크립트를 다운로드한 후 실행한다.
- async : 독립적인 스크립트에 적합하다.

**link 태그**

- `<head>` 태그 안에 위치시키는 것이 가장 적절합니다.
- HTML 파일과 동시에 CSS 파일을 점진적으로 렌더링될 수 있기 떄문이다.
- 사이트 성능 점수의 사이트 최적화

### **🦴 img 태그에서 alt 속성을 사용하는 이유는?**

- 시각적으로 불편하신분들이 스크린 리더를 사용할 때 alt 속성의 내용이 보여진다. `(웹 접근성 향상)`
- 웹페이지의 검색엔진 순위 향상.
- 이미지가 어떤 이유 떄문에 로딩 되지 않을때 대체 텍스트.

### **🦴 html에서 lang의 용도는 무엇인가요?**

- 스크린 리더가 웹페이지의 언어를 인식하고, 해당 언어에 맞는 음성을 제공
- 크롬 브라우저에 있는 자동 번역 기능을 사용할 때, 웹페이지의 언어를 자동으로 감지하여 번역
- 검색 엔진이 웹페이지의 언어를 인식하고, 해당 언어로 검색 결과를 제공

### **🦴 다국어 페이지를 제공하는 여러방법에 대해서 설명**

**첫번째 방법** : 하위 도메인(Subdomain) 또는 디렉토리(Subdirectory)를 사용

- 장점
  - 각 언어별로 독립적인 URL을 가질 수 있어 검색 엔진 최적화(SEO)에 유리하다.
- 단점
  - 모든 언어 버전을 유지 관리하는 데 추가적인 노력이 필요할 수 있다.
- 예시
  - 하위도메인 : 영어 버전은 `en.example.com` 한국어 버전은 `ko.example.com`
  - 디렉토리 : 영어 페이지는 `example.com/en/` 한국어 페이지는 `example.com/ko/`

<br/>

**두번째 방법** : URL 파라미터 사용

- 장점
  - URL 구조를 간단하게 유지할 수 있으며, 다국어 설정을 쉽게 전환할 수 있다.
- 단점
  - SEO 측면에서 덜 유리할 수 있으며, 사용자 친화성이 떨어질 수 있다.
- 예시
  - example.com?lang=en , example.com?lang=ko

**세번째 방법** : 언어 선택 드롭다운 메뉴

- 장점
  - 사용자에게 언어 선택권을 주어 더 나은 경험을 제공하며, SEO에도 유리하다.
- 단점
  - 페이지 로딩 시에 언어를 다시 선택해야 하는 번거로움이 있을 수 있다.

### **🦴 브라우저 렌더링 과정을 설명해주세요.**

- html 파싱 → DOM tree 생성 → Css파싱 → CSSOM tree 생성 → (DOM tree + CSSOM tree)Render tree 생성 → 레이아웃 → 페인트

### **🦴 Reflow와 Repaint 설명해주세요.**

**Reflow**

- HTML요소의 크기나 위치 등의 레이아웃 수치가 변하면 해당 요소의 영향을 받는 자식 노드나 부모 노드들을 포함하여 Layout(Reflow)과정을 다시 수행 하는 과정
  - `Layout 과정` : 뷰포트 내에서 요소들이 어떻게 배치되는지를 결정하는 과정
- 예시
  - 페이지 초기 렌더링 시 (최초 Layout 과정)
  - 브라우저 리사이징 시 (Viewport 크기 변경)
  - 노드 추가 또는 제거
  - DOM 노드의 위치 변경
  - DOM 노드의 크기 변경(margin, padding, border, width, height 등..)
  - 요소의 위치, 크기 변경
  - 폰트 변경과 이미지 크기 변경

**Repaint**

- Reflow만 수행되면 실제 화면에는 반영되지 않기 때문에 다시 Painting이 일어나야 한다. 이 과정을 Repaint라고 한다.
  - `Painting` : 레이아웃 단계에서 계산된 위치와 크기를 기반으로 실제로 화면에 픽셀을 그리는 과정.
- Reflow가 발생하지 않아도 background-color 나 opacity 같이 레이아웃에 영향을 주지 않는 스타일 속성이 변했을 때는 reflow 없이 repaint만 일어난다.

### **🦴 `<script>`, `<script async>`와 `<script defer>` 차이점을 설명해주세요.**

| 속성                         | 다운로드 시점     | 실행 시점                  | HTML 파싱 중단     |
| ---------------------------- | ----------------- | -------------------------- | ------------------ |
| `<script>` in `<head>`       | 즉시              | 다운로드 완료 후 즉시 실행 | 중단됨             |
| `<script>` in `<body>` 끝    | HTML 파싱 완료 후 | 다운로드 완료 후 즉시 실행 | 중단되지 않음      |
| `<script async>` in `<head>` | 병렬로 다운로드   | 다운로드 완료 후 즉시 실행 | 중단됨 (즉시 실행) |
| `<script defer>` in `<head>` | 병렬로 다운로드   | HTML 파싱이 완료된 후 실행 | 중단되지 않음      |

### **🦴 data-속성은 무엇을 하는 것인가요? 사용했을 때 이점은 무엇인가요?**

- data- 속성은 커스텀 데이터를 쉽게 접근할 수 있게 해 주며, HTML과 자바스크립트 간의 데이터 통신을 간단하게 처리할 수 있다.

### **🦴 Progressive rendering이란 무엇인가요?**

- 콘텐츠를 가능한 빠르게 표시하기 위해 웹 페이지의 성능을 향상시키는데 사용되는 기술.
- 대규모 웹사이트나 네트워크 속도가 느린환경에서 사용하기 적합.
- 예시
  - Lazy Loading
  - 스켈레톤 UI

[📚Move](<#📚카테고리-(Category)>)
