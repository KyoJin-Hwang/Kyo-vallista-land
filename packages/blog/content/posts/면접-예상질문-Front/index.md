---
title: 기술면접 예상 질문 (Front)
tags:
  - 프론트엔드
image: ./assets/0.png
date: 2024-10-01 19:10:00
draft: false
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📌 Front](#📌-Front)
  - [🔓 CORS란 무엇인가요?](#<strong>%F0%9F%94%93-CORS란-무엇인가요?</strong>)
  - [🍪 Cookie, SessionStorage, LocalStorage의 차이점을 설명](#<strong>🍪-Cookie,-SessionStorage,-LocalStorage의-차이점을-설명</strong>)

## 📌 Front

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

[📚Move](<#📚카테고리-(Category)>)
