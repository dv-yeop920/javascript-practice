// 구조 분해 할당
const colors = ['yellow', 'green', 'blue'];

const kim = { userName: '김철수', userAge: 35 };

// 예제
const [ yellow, green, blue ] = colors;
//NOTE - : 하고 변경할 이름을 적어서 변경할 수 있음. 그런데 애초에 프로퍼티명을 잘 지어 놓으면 될 듯 
const { userName, userAge : age } = kim;

console.log(yellow, userName);

// 선언된 변수에 적용
let first , second;
[ first, second ] = [ 100, 200, 300 ];
console.log(first, second);
//NOTE - 객체를 할때는 () 안에 작성
({ first , second } =  { first: "a", second: "b" });
console.log(first, second);

// 기본값 할당(undefined 대체)
const { firstName, userAge = 20 } = { firstName: "Lee", userAge: 29 };


console.log(firstName, userAge);
console.log(firstName);

// 변수명 변경과 기본값 할당
const { nname: accName = "Lee", age: uAge = 20 } = { nname: "Kim" };

//TODO - 이해 하기 
// 변수값 교환
let a = 100;
let b = 200;
let temp = a;
a = b;
b = temp;

console.log(a, b);
// 변수값 교환(구조 분해 할당)

// 복합 객체에서 사용
const userList = [
  {
    name: '김철수',
    age: 30,
    course: {
      name: '멋사 6기'
    }
  },
  {
    name: '이영희',
    age: 35,
    course: {
      name: '멋사 8기'
    }
  }
];

// 이름과 코스명만 출력
for (const el of userList) {
  console.log(el.name, el.course.name);
}

//TODO - 이해 하기 
//구조 분해 할당 적용
for (const { name, course } of userList) {
  console.log(name , course);
}
