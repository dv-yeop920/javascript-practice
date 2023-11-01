console.log(add(10, 20));

// 선언문 형식의 함수 정의
function add(x, y){
  return x + y;
}

console.log(add(10, 20));

//NOTE - 선언문 형식의 함수와 var 는 코드가 실행 될때 맨 처음부터 실행 되는 특징이 있다 ( 호이스팅 )
//NOTE - 호이스팅이 일어나지 않게 하려면 선언문이 아니라 표현식 함수를 쓰고 var 대신 const , let 을 쓰자
//NOTE - 함수 선언문과 var를 쓰게 되면 가독성 도 안좋아지고 코드의 순서가 꼬여서 에러가 났을 때 어디서 났는지 찾기도 힘들다