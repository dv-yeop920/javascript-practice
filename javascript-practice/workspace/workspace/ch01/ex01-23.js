// 함수의 매개변수에 적용
//NOTE - 스프레드 연산자 뒤에는 다른 변수가 올 수 없음
function fn(a, b, ...args) {
  console.log(a, b, args);
}

fn(); // undefined undefined []
fn(1); //  1 undefined []
fn(2, 3); //  2 3 []
fn(4, 5, 6); //  4 5 [6]
fn(7, 8, 9, 10, 11); //  7 8  [9, 10, 11]

// 구조 분해 할당에서 사용
//NOTE - 스프레드를 하면 첫번째 두번째 말고 나머지를 가져와서 쓸 수 있음

const [one, two, ...rest] = [100, 200, 300, 400, 500];

console.log(one, two);
console.log(one, two, ...rest);


const userA = {
  namea: "Lee",
  age: 29,
  address: "서울",
  phone: "010"
}
const { namea, age, ...aaa } = userA;

//TODO - 에러 해결 하기 
console.log(namea, age, ...aaa);