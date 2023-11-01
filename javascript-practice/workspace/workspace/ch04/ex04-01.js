var global = '전역변수';

function outer( ){
  var innerVal = 'outer의 지역변수';//자유변수
  console.log(global);	// 전역변수는 스크립트 내의 어느 곳에서나 접근 가능
  
  var innerFn = function() {
    console.log(innerVal);// 지역변수는 선언한 함수내에서만 접근 가능
  }
  //NOTE - 바깥에서 내부를 참조할 수 없지만 내부에서는 바깥을 참조할 수 있음
  innerFn();
}

outer();

console.log(global);	// 전역변수는 스크립트 내의 어느 곳에서나 접근 가능
//NOTE - 함수 밖에 지역에서 사용 못함
//console.log(innerVal);// 지역변수는 선언한 함수내에서만 접근 가능







/**2번째 예제
 * /**
 * NOTE Closure :
 * 외부 함수의(outer) 지역변수를(innerVal) 외부함수의 실행이 완료된 후 내부함수의(innerFn) 호출로 참조되는 현상
 * 
 * NOTE 클로저가 만들어지는 조건
 * NOTE 1. 함수 내부에서 함수를 생성(내부함수)
 * NOTE 2. 내부 함수가 외부함수의 지역변수를 참조
 * 
 *
 * var global = '전역변수';

function outer( ){
  var innerVal = 'outer의 지역변수';
  console.log(global);	// 전역변수는 스크립트 내의 어느 곳에서나 접근 가능
  

  var innerFn = function() {
    console.log(innerVal);// 지역변수는 선언한 함수내에서만 접근 가능
  }
  //NOTE - 바깥에서 내부를 참조할 수 없지만 내부에서는 바깥을 참조할 수 있음
  return innerFn;
}

var inner = outer();
inner();

console.log(global);	// 전역변수는 스크립트 내의 어느 곳에서나 접근 가능
//NOTE - 함수 밖에 지역에서 사용 못함
//console.log(innerVal);// 지역변수는 선언한 함수내에서만 접근 가능
 */