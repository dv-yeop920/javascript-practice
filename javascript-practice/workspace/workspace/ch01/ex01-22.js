function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));
//NOTE - 인자를 두개 보내줘야 하는데 하나만 보내게 되면 나머지 안보낸거는 undefined 가 할당 돼서 nan이 나올 것임 
//NOTE - 이때 매개 변수 옆에 = Null 과 같이 쓴다면 , 이 매게 변수에 값이 안들어오면 이 값으로 대체 해라 라는 뜻임
/**
 * function sum(a, b = 3) {
 *  return a + b;
 * }
 * 
 * snm(30);
 */


//구조 분해 할당과 같이 사용하게 될 경우
//NOTE - 배열이나 객체로 된 값을 받을거고 만약 그 값이 아니면 빈배열이나 빈객체 반환 하는 초기값 설정 가능
//NOTE - 배열의 인자중 안들어온게 있으면 대신할 값 설정
function num([x = 0, y = 1] = []) {
  return x + y;
}

console.log(num([1, 2])); // 3
console.log(num()); // 1
console.log(num([])); // 1
console.log(num([1])); // 2

//NOTE - 객체를 구조 분해 할당
function num2({ x = 0, y = 0 } = {}) {
  return x + y;
}

console.log(num2()); // 0
console.log(num2({})); // 0
console.log(num2({ x: 4 })); // 4
console.log(num2({ x: 4, y: 6 })); // 10