// Symbol
const s1 = Symbol("hello");
const s2 = Symbol("world");
const s3 = Symbol("hello");

//NOTE - 값과 타입이 같더라도 symbol 객체로 감싸면 각자 고유의 값을 가지게 됨
console.log(s1 === s2 , s1 === s3);// false , false

// Symbol.for(): 자바스크립트 엔진이 관리하는 전역 심볼 레지스트리에 저장됨
const obj = {
    hello: 10,
    world: 20
}

console.log(obj);

const obj2 = {
    [Symbol("hello")]: 10,
    [Symbol("world")]: 20
}

console.log(obj2);

