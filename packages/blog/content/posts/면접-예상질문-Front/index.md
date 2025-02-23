---
title: 기술면접 예상 질문(Front)
tags:
  - Tech Interview
image: ./assets/0.png
date: 2024-10-03 19:10:00
draft: false
series: FE기술면접
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📌 Front](#📌-Front)

  - [👨‍💻 CORS란 무엇인가요?](#<strong>👨‍💻-CORS란-무엇인가요?</strong>)
  - [👨‍💻 Cookie, SessionStorage, LocalStorage의 차이점을 설명](#<strong>👨‍💻-Cookie,-SessionStorage,-LocalStorage의-차이점을-설명</strong>)
  - [👨‍💻 Webpack, Babel, Polyfill에 대해 설명해 주세요.](#<strong>👨%E2%80%8D💻-Webpack,-Babel,-Polyfill에-대해-설명해-주세요.</strong>)
  - [👨‍💻 URI과 URL의 차이](#<strong>👨%E2%80%8D💻-URI과-URL의-차이</strong>)
  - [👨‍💻 CI/CD에 대해 설명해 주세요.](#<strong>👨%E2%80%8D💻-CI/CD에-대해-설명해-주세요.</strong>)
  - [👨‍💻 다국어 페이지를 제공하는 여러방법에 대해서 설명](#<strong>👨‍💻-다국어-페이지를-제공하는-여러방법에-대해서-설명</strong>)
  - [👨‍💻 브라우저 렌더링 과정을 설명해주세요.](#<strong>👨‍💻-브라우저-렌더링-과정을-설명해주세요.</strong>)
  - [👨‍💻 브라우저 렌더링 최적화 방법을 설명해주세요.](#<strong>👨‍💻-브라우저-렌더링-최적화-방법을-설명해주세요.</strong>)
  - [👨‍💻 Reflow와 Repaint 설명해주세요.](#<strong>👨‍💻-Reflow와-Repaint-설명해주세요.</strong>)
  - [👨‍💻 SEO란?](#<strong>👨‍💻-SEO란?</strong>)
  - [👨‍💻 Progressive rendering이란 무엇인가요?](#<strong>👨‍💻-Progressive-rendering이란-무엇인가요?</strong>)
  - [👨‍💻 CSS 애니메이션과 Javascript 애니메이션 차이점은?](#<strong>👨%E2%80%8D💻-CSS-애니메이션과-Javascript-애니메이션-차이점은?</strong>)
  - [👨‍💻 크로스 브라우징이란?](#<strong>👨%E2%80%8D💻-크로스-브라우징이란?</strong>)
  - [👨‍💻 REST API란?](#<strong>👨%E2%80%8D💻-REST-API란?</strong>)
  - [👨‍💻 REST API와 RESTful API의 차이는 뭘까?](#<strong>👨%E2%80%8D💻-REST-API와-RESTful-API의-차이는-뭘까?</strong>)

## 📌 Front

### **👨‍💻 CORS란 무엇인가요?**

- 약어 : Cross-Origin Resource Sharing ( 교차 출처 리소스 공유)
- 악의적인 웹 사이트가 사용자의 브라우저를 통해 다른 사이트에 요청을 보내 사용자 정보를 훔치는 공격을 막기 위해 동일 출처 정책이 도입되었습니다. 하지만, CORS를 통해 서버는 명시적으로 안전한 출처에 대해 교차 출처 요청을 허용할 수 있습니다.

### **👨‍💻 Cookie, SessionStorage, LocalStorage의 차이점을 설명**

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

### **👨‍💻 Webpack, Babel, Polyfill에 대해 설명해 주세요.**

**Webpack**

- 웹팩은 Javascript, CSS, Img 등등을 브라우저에서 실행할 수 있는 번들 파일로 변환하는 모듈 번들러입니다.

**Babel**

- 바벨은 최신 자바스크립트 코드를 구형 브라우저에서도 실행할 수 있는 코드로 변환하는 자바스크립트 컴파일러입니다. 또한 Typescript와 같은 다른 언어를 Javascript로 컴파일하는 데 사용됩니다.

**Pollyfill**

- 폴리필은 브라우저가 지원하지 않는 자바스크립트 코드를 지원 가능하도록 변환한 코드 조각을 의미합니다. "충전솜"이라는 의미 그대로 최신 문법과 오래된 브라우저 사이의 간격을 메꾸는 역할을 합니다.

### **👨‍💻 URI과 URL의 차이**

**URI**

- 통합 자원 식별자(Uniform Resource Identifier)
- URI는 인터넷상의 리소스(자원) 자체를 식별하는 고유한 문자열 시퀀스입니다.

**URL**

- 통합 자원 위치(Uniform Resource Location)
- URL은 네트워크상의 리소스(자원)의 위치를 나타내기 위한 규약입니다.

**예시**

URI=식별자, URL=식별자+위치

- https://www.example.com/index.html?page=123

위의 링크에서 index.html의 위치를 표기한 https://www.example.com/index.html 까지는 `URL`입니다.

여기서 query string으로 식별자가 포함된 https://www.example.com/index.html?page=123 은 `URI`입니다.

### **👨‍💻 CI/CD에 대해 설명해 주세요.**

> CI/CD는 "지속적인 통합/지속적인 서비스 제공 또는 배포"의 약자입니다.

**CI(Continuous Integration)**

- 지속적인 통합은 코드 변경사항을 정기적으로 빌드 및 테스트를 거쳐 공유 레포지토리에 통합하는 것을 의미합니다.
- 협업에서 발생할 수 있는 conflict를 수시로 확인하고 해결이 가능하며, 새로운 업데이트의 테스트와 출시 시간을 단축시킬 수 있습니다.

**CD(Continuous Delivery, Continuous Deployment)**

- 지속적인 서비스 제공 또는 배포는 코드 변경사항이 레포지토리뿐만 아니라 사용자 production 환경까지 release 되는 것을 의미합니다.
- CI/CD를 통해서 개발 수정 사항을 반영하는 데 걸리는 시간을 줄이고 품질과 안정성을 개선할 수 있다.

### **👨‍💻 알고있는 테스트 종류와 설명해 주세요.**

프론트엔드에서 테스트 코드란 웹 애플리케이션의 UI가 예상대로 동작하는지를 확인하기 위한 자동화된 테스트를 의미합니다. 일반적으로 단위 테스트, 통합 테스트, e2e 테스트가 있으며, 자주 사용되는 테스팅 라이브러리는 Jest, Mocha, Cypress 등등이 있습니다.

- Unit test(단위 테스트) : 함수 또는 클래시와 같은 개별 구성 요소에 중점을 두고 각 구성요소가 의도한 대로 동작하는지 확인하는 테스트

- Integration test(통합 테스트) : 서로 다른 시스템들의 상호작용이 원활하게 동작하는지 확인하는 테스트

- End-to-end test(종단 간 테스트) : e2e 테스트는 사용자와 웹 애플리케이션 상호 작용을 시뮬레이션하고 UI 및 기능이 예상대로 동작하는지 확인하는 테스트입니다.

프론트엔드에서의 테스트 코드는 개발 초기에 버그를 포착하고 버그 수정과 관련된 시간과 비용을 줄일 수 있으며, 제품의 퀄리티를 향상할 수 있는 장점이 있습니다.

### **👨‍💻 SPA, CSR, SSR에 대하여 설명해주세요.**

**SPA(Single Page Application)**

- 전체 페이지를 다시 로드할 필요 없이 변경된 부분만 동적으로 업데이트하는 애플리케이션을 의미합니다. 새로고침이 발생하지 않기 때문에 네이티브 앱과 유사하게 매끄럽고 응답성이 뛰어난 서비스를 제공할 수 있습니다.

**CSR(Client Side Rendering)**

- 사용자의 웹브라우저에서 Javascript를 사용하여 서버에서 필요한 데이터를 가져오고, 클라이언트 측에서 웹 애플리케이션을 동적으로 렌더링 하는 것을 의미합니다. 초기 로드 시간이 빠르고 응답성이 뛰어난 사용자 경험을 제공합니다.

**SSR(Server Side Rendering)**

- HTML을 클라이언트에 보내기 전에 서버 측에서 웹 애플리케이션을 렌더링 하는 것을 의미합니다. 서버는 클라이언트에게 요청을 받으면 미리 렌더링 된 페이지를 제공하고, 이러한 방식은 페이지가 처음 로드될 때 컨텐츠가 검색 엔진에 표시되므로 더 빠른 초기 로드 시간과 더 나은 SEO(검색 엔진 최적화)를 제공합니다.

### **👨‍💻 HTTP, HTTPS 의 차이점**

**HTTP**

- HTTP는 Hypertext Transfer Protocol의 약자로 웹서버 및 웹 브라우저 상호 간의 데이터 전송을 위한 응용계층 프로토콜입니다.

**HTTPS**

- HTTPS는 데이터 전송을 보호하기 위해 SSL(Secure Sockets Layer) 또는 TLS(Transport Layer Security) 프로토콜을 사용하여 데이터를 암호화하는 HTTP의 보안 버전입니다.

> 요약하자면 HTTP는 보안되지 않은 프로토콜인 반면, HTTPS는 데이터를 암호화하여 인터넷을 통해 전송되는 민감한 정보를 보호하는 보안 프로토콜입니다.

### **👨‍💻 다국어 페이지를 제공하는 여러방법에 대해서 설명**

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

### **👨‍💻 브라우저 렌더링 과정을 설명해주세요.**

- html 파싱 → DOM tree 생성 → Css파싱 → CSSOM tree 생성 → (DOM tree + CSSOM tree)Render tree 생성 → 레이아웃 → 페인트

### **👨‍💻 브라우저 렌더링 최적화 방법을 설명해주세요.**

**영향받는 노드 최소화하기 (position fixed, absolute)**

- 상위 노드의 스타일을 변경하면 하위 노드에 모두 영향을 준다.
- 다른 엘리먼트 레이아웃에 영향을 주지 않는 fixed와 absolute 속성을 사용한다.

**숨겨진 엘리먼트 수정**

- display: none의 경우 Reflow와 Repaint가 발생하지 않는다.
- visibility: hidden의 경우 보이지 않기 때문에 Repaint는 발생하지 않지만 공간을 차지하기 때문에 Layout은 발생하게 됩니다.

**transform, opacity 속성 사용하기**

- reflow와 repaint가 일어나지 않는 속성입니다.
- left, right 대신 transform 속성의 translate를 사용
- visibility, display 대신 opacity 속성을 사용하면 reflow, repaint 발생을 최소화

> 결론 : Reflow , Repaint 최소화

### **👨‍💻 Reflow와 Repaint 설명해주세요.**

**Reflow**

- HTML요소의 크기나 위치 등의 레이아웃 수치가 변하면 해당 요소의 영향을 받는 자식 노드나 부모 노드들을 포함하여 Layout(Reflow)과정을 다시 수행 하는 과정
  - `Layout 과정`
    - 뷰포트 내에서 요소들이 어떻게 배치되는지를 결정하는 과정
    - 브라우저 화면의 어떤위치에 어떤크기로 출력될지 계산 하는 단계
- 예시
  - 페이지 초기 렌더링 시 (최초 Layout 과정)
  - 브라우저 리사이징 시 (Viewport 크기 변경)
  - 노드 추가 또는 제거
  - DOM 노드의 위치 변경
  - DOM 노드의 크기 변경(margin, padding, border, width, height 등..)
  - 요소의 위치, 크기 변경
  - 폰트 변경과 이미지 크기 변경
- 속성
  - position
  - width, height
  - top, bottom, left, right
  - margin, padding, border, border-width
  - clear, display, float, overflow
  - font-family, fontsize, font-weight
  - line-height, min-height
  - text-align, vertical-align

**Repaint**

- Reflow만 수행되면 실제 화면에는 반영되지 않기 때문에 다시 `Painting`이 일어나야 한다. 이 과정을 Repaint라고 한다.
  - `Painting` : 레이아웃 단계에서 계산된 위치와 크기를 기반으로 실제로 화면에 픽셀을 그리는 과정.
- Reflow가 발생하지 않아도 background-color 나 opacity 같이 레이아웃에 영향을 주지 않는 스타일 속성이 변했을 때는 reflow 없이 repaint만 일어난다.
- 속성
  - background, background-image, background-pisition, background-repeat, background-size
  - border-radius, border-style, box-shadow
  - color, outline-color
  - line-style, outline
  - clear, display, float, visibility
  - font-family, fontsize, font-weight

### **👨‍💻 SEO란?**

- SEO(검색 엔진 최적화, Search Engine Optimization)는 웹 사이트가 검색 엔진에서 잘 인식되도록 최적화하는 작업
- 웹 사이트의 노출 순위를 높이고, 더 많은 트래픽을 유도

### **👨‍💻 Progressive rendering이란 무엇인가요?**

- 콘텐츠를 가능한 빠르게 표시하기 위해 웹 페이지의 성능을 향상시키는데 사용되는 기술.
- 대규모 웹사이트나 네트워크 속도가 느린환경에서 사용하기 적합.
- 예시
  - Lazy Loading
  - 스켈레톤 UI

### **👨‍💻 CSS 애니메이션과 Javascript 애니메이션 차이점은?**

| 항목            | CSS 애니메이션                                    | JavaScript 애니메이션                                      |
| --------------- | ------------------------------------------------- | ---------------------------------------------------------- |
| **성능**        | 브라우저에서 최적화되어 빠르고 부드러움           | 제어가 많을수록 성능에 영향이 있을 수 있음                 |
| **제어**        | 간단하고 규칙적인 애니메이션에 적합               | 복잡한 애니메이션이나 동적 제어에 적합                     |
| **사용 편의성** | 선언적 방식, 간단한 설정으로 애니메이션 구현 가능 | 더 많은 코드가 필요하지만 라이브러리로 간단하게 할 수 있음 |
| **사용 사례**   | 간단한 트랜지션, 키프레임 기반 애니메이션에 적합  | 스크롤 애니메이션, 상호작용 기반 애니메이션에 적합         |
| **호환성**      | 대부분의 브라우저에서 잘 지원됨                   | 브라우저와 성능에 따라 차이가 있을 수 있음                 |

<br/>

> 결론 : 단순하고 성능이 중요한 애니메이션에는 `CSS 애니메이션`이 적합하고, 복잡한 사용자 상호작용이 필요한 경우는 `JavaScript 애니메이션`

### **👨‍💻 크로스 브라우징이란?**

**정의**

- 웹 페이지 제작 시 모든 브라우저에서 깨지지 않고 의도한 대로 올바르게(호환성) 나오게 하는 작업을 말한다.

**해결방법**

- 첫번째는 브라우저 호환성 검토합니다. Flex 등 브라우저 호환이 잘 되지 않는 것이 있기 때문에 타겟으로 한 브라우저가 호환이 되는지 확인해봐야 합니다.
- 두번째, CSS 초기화 작업을 하여 브라우저마다 저장되어 있는 기본 스타일 값들을 초기화 시켜줍니다. 마지막으로 CSS 속성인 prefix를 통해 브라우저별로 스타일 적용을 시키는 방법이 있습니다.

### **👨‍💻 REST API란?**

**정의**

- REpresentational State Transfer의 약자.
- REST는 HTTP를 기반으로 필요한 자원에 접근하는 방식을 정해놓은 아키텍처입니다.
- REST API는 자원(URI), 행위(HTTP 메서드), 표현(페이로드)으로 이루어져 있으며 HTTP 메서드를 사용해야 하고, URI가 리소스를 표현하는데 집중해야 합니다.

**장점**

- HTTP 프로토콜의 인프라를 그대로 사용하므로 REST API 사용을 위한 별도의 인프라를 구축할 필요가 없다.
- HTTP 표준 프로토콜을 따르는 모든 플랫폼에서 사용 가능하다.
- API가 의도하는 메시지를 쉽게 파악할 수 있다.
- Server와 Client의 역할을 명확하게 분리한다.

**단점**

- 표준이 존재하지 않는다.
- 사용할 수 있는 method가 제한적이다.
- 구형 브라우저가 아직 지원하지 못하는 부분이 있다.

### **👨‍💻 REST API와 RESTful API의 차이는 뭘까?**

- RESTful은 REST의 설계 규칙을 잘 지켜서 설계된 API를 RESTful한 API

[📚Move](<#📚카테고리-(Category)>)
