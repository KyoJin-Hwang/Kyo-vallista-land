---
title: Javascript 표준내장객체 (배열)
tags:
  - Javascript 기초 정리
image: ./assets/0.png
date: 2024-09-22 17:30:00
draft: false
series: 표준 내장 객체
---

![banner](./assets/0.png)

`by Kyojin Hwang`

<br/>

## 📚카테고리 (Category)

- [📌 length](#📌-length)
- [📌 at](#📌-at)
- [📌 concat](#📌-concat)
- [📌 every](#📌-every)
- [📌 filter](#📌-filter)
- [📌 find](#📌-find)
- [📌 findIndex](#📌-findIndex)
- [📌 flat](#📌-flat)
- [📌 forEach](#📌-forEach)
- [📌 includes](#📌-includes)
- [📌 join](#📌-join)
- [📌 map](#📌-map)
- [📌 pop](#📌-pop)
- [📌 push](#📌-push)
- [📌 reduce](#📌-reduce)
- [📌 reverse](#📌-reverse)
- [📌 shift](#📌-shift)
- [📌 unshift](#📌-unshift)
- [📌 slice](#📌-slice)
- [📌 some](#📌-some)
- [📌 sort](#📌-sort)
- [📌 splice](#📌-splice)
- [📌 Array.from](#📌-Array.from)

## 📌 length

- 배열의 길이(숫자)를 반환한다.

```javascript {numberLines}
const arr = ['A', 'B', 'C']
console.log(arr.length) // 3

const arr2 = ['난', '황교', '진', '이', '다']
console.log(arr2.length) // 5
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 at

- 배열을 인덱싱하여 해당 값을 가져온다. .
- 음수 값을 사용하면 뒤에서 부터 인덱싱한다.
- 마지막 아이템을 접근할 때 유용하다.

```javascript {numberLines}
const arr = ['A', 'B', 'C']
const arr2 = [1, 2, 3, 4, 5]

console.log(arr[0]) // A
console.log(arr.at(0)) // A

console.log(arr2[arr2.length - 1]) // 5
console.log(arr2.at(-1)) // 5
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 concat

- 해당 배열과 주어진 배열을 병합해 `새로운 배열`을 반환한다.
- 기존 배열은 바뀌지 않는다.

```javascript {numberLines}
const arr1 = ['A', 'B', 'C']
const arr2 = ['D', 'E', 'F']
const arr3 = arr1.concat(arr2)

console.log(arr1) // ['A', 'B', 'C']
console.log(arr2) // ['D', 'E', 'F']
console.log(arr3) // ['A', 'B', 'C', 'D', 'E', 'F']

// 전개연산자 사용 concat 대신
const arr4 = [...arr1, ...arr2]
console.log(arr4) // ['A', 'B', 'C', 'D', 'E', 'F']
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 every

- 배열의 모든 요소가 콜백 테스트에서 참을 반환하는지 확인한다.
- every의 조건중에서 하나라도 틀릴경우 false 를 반환한다.

```javascript {numberLines}
const arr = [0, 1, 2, 3, 4]
const isValid = arr.every((item) => item < 5)

console.log(isValid) // true
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 filter

- 주어진 콜백 테스트를 통과한 요소만가지고 새로운 배열로 반환한다.
- 모든 요소가 테스트를 통과하지 못하면 빈배열을 반환한다.

```javascript {numberLines}
const numbers = [1, 2, 5, 104, 20, 56, 78]
const filterArr = numbers.filter((number) => number < 30)

console.log(filterArr) // [ 1, 2, 5, 20 ]
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 find

- 대상 배열에서 콜백 테스트를 통과하는 `첫 번째 요소`를 반환한다.

```javascript {numberLines}
const arr = [5, 8, 130, 12, 44]
const foundItem = arr.find((item) => item > 10)

console.log(foundItem) // 130

const users = [
  { name: 'kyo', age: 20 },
  { name: 'owen', age: 25 },
  { name: 'hwang', age: 23 }
]

const foundUser = users.find((user) => user.age > 22)
console.log(foundUser) // { name: 'owen', age: 25 }
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 findIndex

- 대상 배열에서 콜백 테스트를 통과하는 `첫 번째 요소의 인덱스`를 반환한다.

```javascript {numberLines}
const arr = [5, 8, 130, 12, 44]
const foundItem = arr.find((item) => item > 10)

console.log(foundItem) // 2

const users = [
  { name: 'kyo', age: 20 },
  { name: 'owen', age: 25 },
  { name: 'hwang', age: 23 }
]

const foundUser = users.find((user) => user.age > 22)
console.log(foundUser) // 1
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 flat

- 대상 배열의 모든 하위 배열을 지정한 깊이까지 이어붙인 새로운 배열을 생성한다.
- 깊이의 기본값은 `1` 이다.

```javascript {numberLines}
const arr = [1, 2, [3, 4]]
console.log(arr.flat()) // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]]
console.log(arr2.flat(2)) // [1, 2, 3, 4, 5, 6]
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 forEach

- 대상 배열의 길이만큼 주어진 콜백을 실행한다.
- continue, break 불가

```javascript {numberLines}
const arr = ['A', 'B', 'C']

// 무조건 콜백하여 반복하고 멈출 수 없다.
arr.forEach((item) => console.log(' forEach ' + item)) // A B C

// for문의 장점은 조건으로 반복을 멈추거나 건너뛸 수 있다.
for (let i = 0; i < arr.length; i++) {
  if (i > 1) {
    break
  }
  console.log(' for ' + arr[i]) // A B
}
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 includes

- 대상 배열이 특정 요소를 포함하고 있는지 확인한다.

```javascript {numberLines}
const fruits = ['Apple', 'Banana', 'Melon']
console.log(fruits.includes('Apple')) // true
console.log(fruits.includes('apple')) // false

const numbers = [1, 2, 3]
console.log(numbers.includes(2)) // true
console.log(numbers.includes(7)) // false

const obj = [
  { key: 1, name: 'Kyo' },
  { key: 2, name: 'Jin' },
  { key: 3, name: 'Owen' }
]

console.log(obj.includes({ key: 1, name: 'Kyo' })) // false

// 방법1
const kyo = obj[0]
console.log(obj.includes(kyo)) // true

// 방법2
obj.map((item) => item.name).includes('Kyo') // true
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 join

- 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환한다.

```javascript {numberLines}
const arr = ['Hwang', 'Kyo', 'Jin']

console.log(arr.join()) // Hwang,Kyo,Jin
console.log(arr.join(' ')) // Hwang Kyo Jin
console.log(arr.join(', ')) // Hwang, Kyo, Jin
console.log(arr.join('/')) // Hwang/Kyo/Jin
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 map

- 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환값을 모아 새로운 배열을 생성한다.

```javascript {numberLines}
const arr = [1, 2, 3, 4]
const newArr = arr.map((item) => item * 2)

console.log(arr) // [1, 2, 3, 4]
console.log(newArr) // [2, 4, 6, 8]

const users = [
  { key: 1, name: 'kyo' },
  { key: 2, name: 'Owen' },
  { key: 3, name: 'Jin' }
]

const newUsers = users.map((user) => {
  return {
    ...user,
    isVaild: true,
    email: null
  }
})

console.log(users)
// [
//   { key: 1, name: "kyo" },
//   { key: 2, name: "Owen" },
//   { key: 3, name: "Jin" },
// ];
console.log(newUsers)
// [
//   { key: 1, name: "kyo", isVaild: true, email: null },
//   { key: 2, name: "Owen", isVaild: true, email: null },
//   { key: 3, name: "Jin", isVaild: true, email: null },
// ];
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 pop

- 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환한다.
- 대상 배열 원본이 변경된다.

```javascript {numberLines}
const numbers = [1, 2, 3]

numbers.pop() // 여기에서 마지막 요소가 제거된다.
console.log(numbers) // [1, 2]
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 push

- 대상 배열에서 마지막 요소에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다.
- 대상 배열 원본이 변경된다.

```javascript {numberLines}
const fruits = ['Apple', 'Banana']
console.log(fruits) // [ 'Apple', 'Banana' ]
console.log(fruits.length) // 2

// 새로운 요소 추가
const newLength = fruits.push('Cherry')
console.log(fruits) // [ 'Apple', 'Banana', 'Cherry' ]
console.log(newLength) // 3

// 새로운 요소 두개 추가
fruits.push('Mango', 'Melon')
console.log(fruits) // [ 'Apple', 'Banana', 'Cherry', 'Mango', 'Melon' ]
console.log(fruits.length) // 5
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 reduce

- 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환한다.
- 각 콜백의 반환 값은 다음 콜백으로 전달된다.

```javascript {numberLines}
const numbers = [1, 2, 3]

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log('acc : ' + accumulator)
  console.log('cur : ' + currentValue)
  //   acc: 1;
  //   cur: 2;
  //   acc: 3;
  //   cur: 3;
  return accumulator + currentValue
}, 1)

// sum 간단하게 표현한것
const sum2 = numbers.reduce((acc, cur) => acc + cur, 1)

// 초기 값을 1을 더해줘서 7이 나온다.
console.log(sum) // 7
console.log(sum2) // 7

const users = [
  { name: 'Kyo', age: 20 },
  { name: 'Jin', age: 30 },
  { name: 'Owen', age: 50 }
]

// 총 나이 합
const sumAge = users.reduce((acc, cur) => {
  return acc + cur.age
}, 0)

console.log(sumAge) // 100

// 모든 이름 추출
const joinName = users
  .reduce((acc, cur) => {
    acc.push(cur.name)
    return acc
  }, [])
  .join(', ')

console.log(joinName) // Kyo, Jin, Owen
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 reverse

- 대상 배열의 순서를 반전한다.
- 대상 배열 원본이 변경된다.

```javascript {numberLines}
const numbers = [1, 30, 44, 52, 23]

console.log(numbers) // [ 1, 30, 44, 52, 23 ]
console.log(numbers.reverse()) // [ 23, 52, 44, 30, 1 ]
console.log(numbers) // [ 23, 52, 44, 30, 1 ]
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 shift

- 대상 배열에서 첫번째 요소를 제거하고, 제거된 요소를 반환한다.
- 대상 배열의 원본이 변경된다.

```javascript {numberLines}
const arr = ['A', 'B', 'C']

console.log(arr) // [ 'A', 'B', 'C' ]
arr.shift()
console.log(arr) // [ 'B', 'C' ]
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 unshift

- 대상 배열에서 첫번째 요소에 하나 이상의 요소를 추가하고, 새로운 길이를 반환한다.
- 대상 배열의 원본이 변경된다.

```javascript {numberLines}
const arr = ['A', 'B', 'C']

console.log(arr) // [ 'A', 'B', 'C' ]
arr.unshift('C', 'D', 'X')
console.log(arr) // [ 'C', 'D', 'X', 'A', 'B', 'C' ]
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 slice

- 대상 배열의 일부를 추출해 새로운 배열을 반환한다.
- 두번째 인수 직전까지 추출하고, 두번째 인수를 생략하면 배열의 끝까지 추출한다.

```javascript {numberLines}
const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

console.log(arr.slice(0, 3)) // [ 'A', 'B', 'C' ]
console.log(arr.slice(4, -1)) // [ 'E', 'F' ]
console.log(arr.slice(5)) // [ 'F', 'G' ]
console.log(arr) // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 some

- 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인한다.

```javascript {numberLines}
const arr = [1, 2, 3, 4]

const isValid = arr.some((item) => item > 3)
console.log(isValid) // true
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 sort

- 대상 배열을 콜백의 반환 값(음수, 양수, 0)에 따라 정렬한다.
- 콜백을 제공하지 않으면, 요소를 문자열로 반환하고 유니코드 코드 포인트 순서로 정렬한다.
- 대상 배열 원본이 변경된다.
  > `오름차순 원리 (내림차순도 같은 원리)`
  >
  > - a - b 를 해서 음수가 나오면 a를 왼쪽으로 b를 오른쪽으로 남긴다.
  > - a - b 를 해서 양수가 나오면 a를 오른쪽으로 b를 왼쪽으로 넘긴다.

```javascript {numberLines}
// 예제1
const numbers = [14, 20, 60, 120, 2, 0, 1]

numbers.sort()
console.log(numbers) // [0, 1, 120, 14, 2, 20, 60]

numbers.sort((a, b) => a - b)
// 오름차순 정렬
console.log(numbers) // [0, 1, 2, 14, 20, 60, 120]

numbers.sort((a, b) => b - a)
// 내림차순 정렬
console.log(numbers) // [120, 60, 20, 14, 2, 1, 0]

// 예제2
const users = [
  { name: 'kyo', age: 25 },
  { name: 'owen', age: 65 },
  { name: 'jin', age: 48 },
  { name: 'eban', age: 38 }
]
users.sort((a, b) => a.age - b.age)
console.log(users)
// [
//   { name: "kyo", age: 25 },
//   { name: "eban", age: 38 },
//   { name: "jin", age: 48 },
//   { name: "owen", age: 65 },
// ];
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 splice

- 대상 배열에 요소를 추가하거나 삭제하거나 교체한다.
- 대상 배열 원본이 변경된다.

```javascript {numberLines}
const arr = ['A', 'B', 'C']

// (인덱스 위치, 인덱스 삭제갯수, 추가할 내용)
arr.splice(2, 0, 'X')
console.log(arr) // [ 'A', 'B', 'X', 'C' ]

const arr2 = [1, 2, 3, 4]
// 한개만 적을경우 그 인덱스부터 전체 제거
arr2.splice(2)
console.log(arr2) // [ 1, 2 ]
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>

## 📌 Array.from

- 유사 배열(Array-like)을 실제 배열로 반환한다.

```javascript {numberLines}
const test = { 0: 'A', 1: 'B', 2: 'C', length: 3 }
Array.from(test).forEach((item) => console.log(item))
// A B C

const arr1 = Array.from({ length: 5 }, (v, i) => i)
console.log(arr1) // [ 0, 1, 2, 3, 4 ]

const arr2 = [1, 2, 3]
console.log(Array.from(arr2, (x) => x + x)) // [ 2, 4, 6]
```

> [📚Move](<#📚카테고리-(Category)>)

 <br/>
