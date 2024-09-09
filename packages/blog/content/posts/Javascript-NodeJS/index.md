---
title: 기초 Node.js 의 이해
tags:
  - Javascript 복습
image: ./assets/0.png
date: 2024-09-09 14:31:00
draft: false
series: 'Javascript'
---

![banner](./assets/0.png)

`by Kyojin Hwang`

## Node.js

- Chrome V8 JavaScript 엔진으로 빌드된 Javascript 런타임
- 자바스크립트언어로 동작하는 컴퓨터 환경이다.

## 📚카테고리 (Category)

- [설치](#1️⃣-설치)
- [NPM 개요](#2️⃣-NPM-개요)
- [NPM 및 Package.json](#3️⃣-npm-및-package.json)

## 1️⃣ 설치

LTS(Long Term Support)란? 말 그대로 장기 `지원되는 버전` 을 의미하며 `안정적이며 신뢰도`를 보장한다

- [Node 설치](https://nodejs.org/en)

<br/>

[📚Move](<#📚카테고리-(Category)>)

## 2️⃣ NPM 개요

NPM ( Node Package Manager) 은 전세계의 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리.

- yarn, npm 등 모듈이나 기능을 다운받을 수 있다.
  - 예시 : `npm install parcel`
- 규모 있는 프로젝트와 협업을 위해서 사용된다.

<br/>

[📚Move](<#📚카테고리-(Category)>)

## 3️⃣ npm 및 package.json

> **노드 버젼 및 사용방법**

```javascript {numberLines}
// 현재 적용중인 노드 버젼을 확인할 수 있다.
node --version || node -v

// 현재 적용중인 npm의 버젼을 확인할 수 있다.
npm --version || npm -v

// 다운로드된 노드버젼 확인
nvm list

// 노드를 적용할때 는 powershell || git bash || terminal 등을
// 관리자모드로 하여 사용한다
nvm use 16.18.0

// 터미널 Clean 하게 지우는 법
macOS => Cmd + k
Windows => clear
```

> **NPM 본격적으로 사용해보기**

```javascript {numberLines}
// init (초기화) 맨처음에 프로젝트 시작할때 사용한다.
npm init
npm init -y
```

여러 가지 질문에 답하면서(옵션을 추가하면) `package.json` 파일을 작성한다.
각 질문을 넘어가면 기본값을 사용한다.
질문 없이 바로 시작하고 싶다면 `-f(--force)`, `-y(--yes)` 중 하나의 플래그를 추가하는 것을 추천
만약  `package.json` 파일을 가지고 있다면, 먼저 그 파일을 읽고 난 후 옵션을 기본값으로 사용한다.

> **NPM Install**

```javascript {numberLines}
// npm i || npm install
// package.json , lock.json 에 있는 모듈을 다운받는다
npm i

npm i lodash
```

![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/93796423-78f9-4b12-bbba-d6dc75d82910)
![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/aafa7579-d890-4d08-b74d-6379ea761fab)

`node_modules` 와 `package-lock.json` 이 생긴다

npm i lodash 설치한 `lodash` 는 `node_modules` 안에 들어 가 있다.

<br/>

> `번들러 (Bundler) ?`
>
> - 여러 가지 패키지들을 실제 웹사이트에 올라갈 수 있도록 묶어주는 역할
> - Webpack, Borserify, Parcel 대표적으로 이렇게 있다.
> - 웹사이트에서 직접적으로 동작하지 않는다. 그래서 `—save -dev` 라는 플래그를 붙여준다

> 예제로 Parcel 설치해보기

```javascript {numberLines}
// --save-dev 앞 뒤 위치상관없음
npm i parcel --save-dev
npm i --save-dev parcel
```

![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/93f44139-1b6d-49ab-b524-c329cc973e6d)

- dependencies에는 애플리케이션 동작과 직접적으로 연관된 라이브러리를 설치하고 ( 실제 브라우저에서 배포해서도 작동 )
- devDependencies에는 개발할 때 필요한 라이브러리를 설치한다. ( 개발용 )

<br/>

> .gitignore

```javascript {numberLines}
// 깃이그노어 생성
touch.gitignore
```

이그노어가 필요한 이유

- npm i 로 node_modules 를 언제나 생성할 수 있기 때문에
- 보안과 개인정보 보호 ( `토큰`, `API키` )
- 원하지 않는 파일이 업로드 되는것을 방지

> Parcel, 개발 서버 실행과 빌드

**실행방법**

<br/>

![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/df578dd6-3e67-42a4-91aa-0b6917bbf6fc)
![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/8b6c4cde-e33c-41e3-bed9-2ce30b91bf52)

1. scripts 에 test 를 dev로 직관적이게 바꿔준다.
2. dev 안의 parcel ./index.html ( 동작할 html을 적어준다. )
3. 터미널에서 npm run dev를 한다.

<br/>

**첫번째 Error 발생**

<br/>

![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/62a5824a-49ff-4c09-9447-8b3cb84b7ed2)

- script를 불러오는 html에 module 이라는 타입이 없어서이다 추가해준다.

```html <numberLines>
<!-- parcel 이 ts 를 포함하여 main.ts로 수정 -->
<script type="module" src="./main.ts"></script>
```

**빌드방법**

<br/>

![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/5667974b-a1cb-436a-b6fa-e492d586a123)

![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/2579938d-d768-45a7-b0f3-23f9e5dfa4fa)
![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/6b137925-d492-4891-bb5d-95bf7768b10b)

1. build 라는 scripts 생성한다.
2. 터미널에 npm run build를 실행한다.
3. 완료

<br/>

[📚Move](<#📚카테고리-(Category)>)
