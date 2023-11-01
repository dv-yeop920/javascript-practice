// 전개 연산자
var colors = ['two', 'three', 'four'];
const newColors = [...colors];

var user = {name: '김철수', age: 30};
const newUser = {...user};

// 함수에서 사용
const numb = [10, 20];

function aa(x, y) {
    return x + y;
}

//NOTE - 배열이 분리 돼서 적용됨
console.log(aa(...numb));
// 배열 결합
const newArr = [10, 20, ...colors];
console.log(newArr);
// 객체 결합
const newObj = {
    name: "a",
    age: 2,
    ...user
}

console.log(newObj);
