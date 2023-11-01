// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
  for (var i=0; i<arr.length; i++) {
    console.log(i, arr[i]);
  }
  console.log(arr);
}

// 지정한 객체의 모든 속성을 출력한다.
function printObject(obj){
  for (const prop in obj) {
    console.log(`${ prop }: ${obj[prop]}`);
  }
  console.log(obj);
}

const arr = ['zero', 'one', 'two'];
arr.push('three');
arr.push('four');
arr.pop();
arr.shift();

// 일반 객체처럼 속성 추가
arr.name = "Lee";
// 대입연산자로 속성 추가. enumerable, writable, configurable true로 설정됨
arr["mbti"] = "intj";
// 속성 추가 전용 메소드 enumerable, writable, configurable false로 설정됨
//대상 배열 , 속성값 추가 , value
Object.defineProperty(arr , "age" , {
  value: 30,
  enumerable: true,//열거 가능한지 여부(for-in , Object.keys() , Object.values() 노출여부)
  writable: true, //수정이 가능한지 여부
  configurable: true //Object.defineProperty() 로 속성값 설정이 가능한지 여부 
});

printArr(arr)
printObject(arr);
