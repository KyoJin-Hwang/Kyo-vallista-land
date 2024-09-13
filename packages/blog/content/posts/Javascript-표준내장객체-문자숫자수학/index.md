---
title: 표준내장객체 (문자,숫자,수학)
tags:
  - Javascript
image: ./assets/0.png
date: 2024-09-12 18:30:00
draft: false
series: 표준 내장 객체
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📝String Method](#📝-String-Method)
  - [📌includes](<#%3Ccode%3E📌includes()%3C/code%3E>)
  - [📌indexOf](<#%3Ccode%3E📌indexOf()%3C/code%3E>)
  - [📌padEnd](<#%3Ccode%3E📌padEnd()%3C/code%3E>)
  - [📌padStart](<#%3Ccode%3E📌padStart()%3C/code%3E>)
  - [📌replace](<#%3Ccode%3E📌replace()%3C/code%3E>)
  - [📌slice](<#%3Ccode%3E📌slice()%3C/code%3E>)
  - [📌split](<#%3Ccode%3E📌split()%3C/code%3E>)
  - [📌toLowerCase](<#%3Ccode%3E📌-toLowerCase()%3C/code%3E>)
  - [📌toUpperCase](<#%3Ccode%3E📌toUpperCase()%3C/code%3E>)
  - [📌trim](<#%3Ccode%3E📌trim()%3C/code%3E>)
- [📝Number_Method](#📝-Number-Method)
  - [📌toFixed](<#%3Ccode%3E📌toFixed()%3C/code%3E>)
  - [📌toLocaleString](<#%3Ccode%3E📌toLocaleString()%3C/code%3E>)
  - [📌isInteger](<#%3Ccode%3E📌isInteger()%3C/code%3E>)
  - [📌parseInt](<#%3Ccode%3E📌parseInt()%3C/code%3E>)
- [📝Math_Method](#📝-Math-Method)
  - [📌abs](<#%3Ccode%3E📌abs()%3C/code%3E>)
  - [📌ceil](<#%3Ccode%3E📌ceil()%3C/code%3E>)
  - [📌floor](<#%3Ccode%3E📌floor()%3C/code%3E>)
  - [📌round](<#%3Ccode%3E📌round()%3C/code%3E>)
  - [📌max](<#%3Ccode%3E📌max()%3C/code%3E>)
  - [📌min](<#%3Ccode%3E📌min()%3C/code%3E>)
  - [📌pow](<#%3Ccode%3E📌pow()%3C/code%3E>)
  - [📌random](<#%3Ccode%3E📌random()%3C/code%3E>)

## 📝 String Method

```javascript {numberLines}
// string 글자 갯수
const str = 'Hello world!'
console.log(str.length) // 12
```

### `📌includes()`

```javascript {numberLines}
// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지 확인한다. 반환값(boolean)
includes(searchString, position)
```

**searchString**

- 이 문자열에서 찾을 다른 문자열이다.
- 정규표현식이 올 수 없다.

**position**

- `searchString`을 찾기 시작할 위치.
- 기본값 : 0

**예제**

```javascript {numberLines}
const str = 'Hello world!'
console.log(str.includes('Hello')) // true
console.log(str.includes('hello')) // false
console.log(str.includes('Hello', 0)) // true
console.log(str.includes('Hello', 1)) // false

// 조건문으로 사용하기
if (!str.includes('Kyo')) {
  console.log('Kyo 는 없습니다.')
}
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌indexOf()`

```javascript {numberLines}
// .indexOf()
// 대상 문자에 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환한다.
// 일치하는 문자가 없다면 '-1'을 반환한다.

str.indexOf(searchValue[, fromIndex])
```

**searchValue**

- 찾으려는 문자열 or 아무 값도 주어지지 않으면 문자열 "undefined"를 찾으려는 문자열로 사용한다.

**fromIndex**

- 문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값
- 어떤 정수값도 가능하다.
- 기본값 : 0

**예제**

```javascript {numberLines}
const str = 'Hello world!'

// 값이 있는지 없는지
console.log(str.indexOf('Hello')) // 0
console.log(str.indexOf('Kyo')) // -1

// 몇번째부터 시작하고 있는지
console.log(str.indexOf('world')) // 6

// 조건문으로 사용하기
if (str.indexOf('Kyo') === -1) {
  console.log('Kyo 는 없습니다.')
}
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌padEnd()`

```javascript {numberLines}
// .📌padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환한다.

str.padEnd(targetLength [, padString])
```

**targetLength**

- 목표 문자열 길이. 현재 문자열의 길이보다 작다면 채워넣지 않고 그대로 반환.

**padString**

- 현재 문자열에 채워넣을 다른 문자열.
- 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음.

**예제**

```javascript {numberLines}
const str = '1234567'
const str2 = '1234567890123'

// 문자 길이가 10개 될때까지 0으로 채운다
console.log(str.padEnd(10, '0')) // 1234567000

// 초과하면 원래값 유지
console.log(str2.padEnd(10, '0')) // 1234567890123
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌padStart()`

```javascript {numberLines}
// .padStart()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 앞쪽에 붙여 새로운 문자를 반환한다.

str.padStart(targetLength [, padString])
```

**targetLength**

목표 문자열 길이. 현재 문자열의 길이보다 작다면 채워넣지 않고 그대로 반환.

**padString**

- 현재 문자열에 채워넣을 다른 문자열.
- 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음.

**예제**

```javascript {numberLines}
const str = '1234567'
const str2 = '1234567890123'

// 문자 길이가 10개 될때까지 0으로 채운다
console.log(str.padStart(10, '0')) // 0001234567

// 초과하면 원래값 유지
console.log(str2.padStart(10, '0')) // 1234567890123
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌replace()`

```javascript {numberLines}
// .replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체하여 새로운 문자를 반환한다.

str.replace(pattern, replacement)
```

**pattern**

- 찾을 대상이 되는 문자열 또는 정규 표현식 패턴입니다.

**replacement**

- 대체할 새로운 문자열이다.

**예제**

```javascript {numberLines}
const str = 'Hello, Hello?!'

console.log(str.replace('Hello', 'Hi')) // Hi, Hello?!

// 정규표현식 사용으로 전체 바꾸기
console.log(str.replace(/Hello/g, 'Hi')) // Hi, Hi?!

console.log(str) // Hello, Hello?!
```

**예제(replaceAll : 정규식을 사용하지않고 전체 바꾸고 싶을때)**

```javascript {numberLines}
const str = 'Hello, Hello?!'

console.log(str.replaceAll('Hello', 'Hi')) // Hi, Hi?!
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌slice()`

```javascript {numberLines}
// .slice()
// 대상 문자의 일부를 추출하여 새로운 문자를 반환한다.
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까찌 추출한다.

str.slice(indexStart)
str.slice(indexStart, indexEnd)
```

**indexStart**

- 반환된 하위 문자열에 포함할 첫 번째 문자의 인덱스입니다.

**indexEnd**

- 반환된 하위 문자열에서 제외할 첫 번째 문자의 인덱스입니다.

**예제**

```javascript {numberLines}
const str = 'Hello wrold!'

console.log(str.slice(0, 5)) // Hello
console.log(str.slice(6, -1)) // wrold
console.log(str.slice(6)) // wrold!
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌split()`

```javascript {numberLines}
// .split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환한다.
split(separator)
str.split(separator, limit)
```

**separator**

- 문자열을 나눌 때 사용할 구분자입니다. 문자열 또는 정규식으로 지정할 수 있습니다.

**limit**

- 문자열을 나눌 때 생성되는 배열의 최대 길이를 제한하는 정수입니다.
- 기본값은 -1입니다. -1이면 구분자를 모두 사용하여 문자열을 나눕니다.
- 최대 길이를 초과하여 남은 문자열은 반환하는 배열에 포함되지 않습니다.

**예제**

```javascript {numberLines}
const fruit = 'Melon, Apple, Banana'

console.log(fruit.split(',')) // ['Melon', ' Apple', ' Banana']

console.log(fruit.split(',', 1)) // ['Melon']
console.log(fruit.split(',', 2)) // ['Melon', ' Apple']
console.log(fruit.split(',', 3)) // ['Melon', ' Apple', ' Banana']
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌 toLowerCase()`

```javascript {numberLines}
// .toLowerCase()
// 대상 문자를 모두 영어 소문자로 변환해 새로운 문자로 반환한다.
toLowerCase()
```

**예제**

```javascript {numberLines}
const str = 'APPLE, Banana, CHeRRy'

console.log(str.toLowerCase()) // apple, banana, cherry
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌toUpperCase()`

```javascript {numberLines}
// .toUpperCase()
// 대상 문자를 모두 영어 대문자로 변환해 새로운 문자로 반환한다.
toUpperCase()
```

**예제**

```javascript {numberLines}
const str = 'APPLE, Banana, CHeRRy'

console.log(str.toUpperCase()) // APPLE, BANANA, CHERRY
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌trim()`

```javascript {numberLines}
// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자를 반환한다.
trim()
```

**예제**

```javascript {numberLines}
const str = ' Hey Kyo Come on! '
console.log(str.trim()) // Hey Kyo Come on!

// 한글포함 test
const str2 = ' Kyo 진아 여기로와! '
console.log(str2.trim()) // Kyo 진아 여기로와!
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

## 📝 Number Method

### `📌toFixed()`

```javascript {numberLines}
// .toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환한다.

numObj.toFixed([digits])
```

**digits**

- 소수점 뒤에 나타날 자릿수. 0 이상 20 이하의 값을 사용할 수 있다
- 구현체에 따라 더 넓은 범위의 값을 지원할 수도 있다.
- 값을 지정하지 않으면 0을 사용한다.

**예제**

```javascript {numberLines}
const num = 3.1414926535

// 문자데이터
console.log(num.toFixed(2)) // 3.14 문자타입

//parseFloat 으로 숫자데이터로 변경
console.log(parseFloat(num.toFixed(2))) // 3.14 숫자타입
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌toLocaleString()`

```javascript {numberLines}
// .toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환한다.

toLocaleString()
```

**예제**

```javascript {numberLines}
const num = 1000000

console.log(num.toLocaleString()) // 1,000,000
console.log(`${num.toLocaleString()}원`) // 1,000,000원
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌isInteger()`

```javascript {numberLines}
// .Number.isInteger()
// 숫자가 정수 인지 확인한다.

Number.isSafeInteger(testValue)
```

**return**

- true주어진 값이 안전한 정수인 경우 부울 값 입니다. 그렇지 않으면 false.

**예제**

```javascript {numberLines}
const num = 123
const pi = 3.14

console.log(Number.isInteger(num)) // true
console.log(Number.isInteger(pi)) // false
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌parseInt()`

```javascript {numberLines}
// .parseInt()
// 주어진 값을 파싱해 특정 진수의 정수로 반환한다.

Number.parseInt(string)
Number.parseInt(string, radix)
```

**string**

- 구문 분석할 값으로, string 으로 강제 변환된다.
- 이 인수의 선행 공백은 무시한다.

**radix**

- 2진수부터 36진수 까지 들어갈 수 있다.
- 를 제외한 나머지는 0 으로 간주한다.

**예제**

```javascript {numberLines}
const str = '123'
const num = 3.14

// number 데이터
console.log(Number.parseInt(str, 10)) // 123
console.log(Number.parseInt(num, 10)) // 3
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

## 📝 Math Method

### `📌abs()`

```javascript {numberLines}
// Math.abs()
// 주어진 숫자의 절댓값을 반환한다.

Math.abs(x)
```

**x**

- 숫자

**반환값**

- 주어진 숫자의 절대값

**예제**

```javascript {numberLines}
console.log(Math.abs(2)) // 2
console.log(Math.abs(-2)) // 2
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌ceil()`

```javascript {numberLines}
// Math.ceil()
// 주어진 숫자를 올림해 정수를 반환한다.

Math.ceil(x)
```

**x**

- 숫자

**반환값**

- 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자

**예제**

```javascript {numberLines}
console.log(Math.ceil(3.1415926535)) // 4
console.log(Math.ceil(-1.5)) // -1
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌floor()`

```javascript {numberLines}
// Math.floor()
// 주어진 숫자를 내림해 정수를 반환한다.

Math.floor(x)
```

**x**

- 숫자

**반환값**

- 주어진 수 이하의 가장 큰 정수.

**예제**

```javascript {numberLines}
console.log(Math.floor(3.815926535)) // 3
console.log(Math.floor(3.415926535)) // 3
console.log(Math.floor(-1.1)) // -2
console.log(Math.floor(-1.7)) // -2
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌round()`

```javascript {numberLines}
// Math.floor()
// 주어진 숫자를 반올림하여 정수를 반환한다.

Math.round(x)
```

**x**

- 숫자

**반환값**

- 입력값을 반올림한 값과 가장 가까운 정수를 의미합니다.

**예제**

```javascript {numberLines}
const num1 = 3.5
const num2 = 3.4

console.log(Math.round(num1)) // 4
console.log(Math.round(num2)) // 3
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌max()`

```javascript {numberLines}
// Math.max()
// 주어진 숫자 중 가장 큰 숫자를 반환한다.

Math.max()
Math.max(값0)
Math.max(값0, 값1)
Math.max(값0, 값1, ... , 값N)
```

**값1, 값2, ..`**

- 가장 큰 값을 선택하고 반환할 0개 이상의 숫자입니다.

**예제**

```javascript {numberLines}
console.log(Math.max(1, 20, 40, 100)) // 100
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌min()`

```javascript {numberLines}
// Math.min()
// 주어진 숫자 중 가장 작은 숫자를 반환한다.

Math.max()
Math.max(값0)
Math.max(값0, 값1)
Math.max(값0, 값1, ... , 값N)
```

**값1, 값2, ..`**

- 가장 작은 값을 선택하고 반환할 0개 이상의 숫자입니다.

**예제**

```javascript {numberLines}
console.log(Math.min(-10, 1, 20, 40, 100)) // -10
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌pow()`

```javascript {numberLines}
// Math.pow()
// 주어진 숫자의 거듭제곱한 값을 반환한다.

Math.pow(base, exponent)
```

**base**

- 제곱할 값.

**exponent**

- 값 을 제곱하기 위해 사용하는 지수.

**예제**

```javascript {numberLines}
console.log(Math.pow(2, 2)) // 4
console.log(Math.pow(5, 3)) // 125
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>

### `📌random()`

```javascript {numberLines}
// Math.pow()
// 숫자 0 이상, 1 미만의 난수를 반환한다.

Math.random()
```

**반환 값**

- 0 이상 1 미만의 부동소숫점 의사 난수.

**예제**

```javascript {numberLines}
console.log(Math.random()) // 0.0919170172899968

// 1. 0 ~ 10을 포함한 정수 난수 얻는 함수
function random1() {
  return Math.floor(Math.random() * 10) + 1
}

// 2. 특정 범위의 랜덤 정수를 얻는 함수
function random2(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min
}

// 1부터 10까지
console.log(random1())

// 0부터 10까지
console.log(random2())
// 1부터 20까지
console.log(random2(11, 20))
// 101부터 999까지
console.log(random2(101, 999))
```

> [📚Move](<#📚카테고리-(Category)>)

<br/>
