---
title: 프론트엔드 면접 예상질문
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

[📚Move](<#📚카테고리-(Category)>)
