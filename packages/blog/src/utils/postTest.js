function greet(name) {
  console.log(`Hello, ${name}! I am ${this.name}.`)
}

const person = { name: 'Alice' }

// `this`를 `person` 객체로 지정하고, 첫 번째 인수를 'Bob'으로 전달
greet.call(person, 'Bob') // 출력: Hello, Bob! I am Alice.

function greet2(name, age) {
  console.log(`Hello, ${name}! I am ${this.name}, and I am ${age} years old.`)
}

const person2 = { name: 'Alice' }

// `this`를 `person` 객체로 지정하고, 인수들을 배열로 전달
greet2.apply(person, ['Bob', 30]) // 출력: Hello, Bob! I am Alice, and I am 30 years old.
