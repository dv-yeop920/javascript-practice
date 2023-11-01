// 배열 생성
const arr = new Array();
console.log(typeof arr , arr);
// push: 배열의 마지막에 새로운 요소 추가.
arr[0] = 0;
arr.push(1);
console.log(arr);
// unshift: 배열의 처음에 새로운 요소 추가.
arr.unshift(3);
arr.unshift(5)
console.log(arr);
// pop: 배열의 마지막 요소를 제거 후 반환
arr.pop();
console.log(arr);
// shift: 배열의 첫번째 요소를 제거 후 반환
arr.shift();
console.log(arr);

