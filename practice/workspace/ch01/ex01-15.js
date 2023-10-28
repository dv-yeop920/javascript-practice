const arr = ['zero', 'one', 'three', 'four'];
const arr2 = ['zero', 'one', 'three', 'four'];

// splice(start[, deleteCount[, item1[, item2[, ...]]]])
// 배열의 요소를 삭제, 교체, 추가하고 제거한 요소를 담은 배열을 반환한다.
// deleteCount 생략시 마지막까지 제거
//arr.splice(2, 0, "two") = ['zero', 'one', 'two, 'three', 'four']
//arr.splice(3 , 1 , "asdasd") = ['zero', 'one', 'three', 'asdasd']
//const arr3 = arr.splice() = []


// slice([begin[, end]])
// 배열의 begin부터 end까지(end 미포함) 요소를 복사해서 새로운 배열을 반환한다.
// begin 생략시 0
// begin이 음수일 경우 배열의 뒤에서 부터 복사
// end 생략시 마지막까지 복사
// - 연산자를 쓰고 숫자에 따라 뒤에서 부터 
// () 안에 인자를 안넣으면 그냥 통채로 복사 arr.slice()
// 원본 데이터 유지
const arr3 = arr.slice(0, -3);

console.log('arr', arr);
console.log('arr2', arr2);
console.log('arr3', arr3);
console.log(arr === arr2);