var num = 100;        // number
var str = 'hello';    // string
var obj = {};         // object
var arr = [num, str]; // object(array)

// 함수를 변수에 할당
const numFuc = () => {
    console.log(1);
}
const newNum = numFuc();

// 함수를 배열의 요소로 할당
arr.push(numFuc);
arr[2]();
console.log(arr);

// 함수를 객체의 속성으로 할당(메소드)
obj.numFuct = numFuc;
obj.numFuct();
console.log(obj);

