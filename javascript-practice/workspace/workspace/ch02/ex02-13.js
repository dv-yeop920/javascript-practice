//매개 변수와 인지수 

function fn(n1, n2){
  console.log(n1, n2);
}

//NOTE - 인자를 덜보내면 값이 할당 되지 않은 매개변수는 undefined
fn(1) // 1 , undefined


//NOTE - 인자를 매개변수의 갯수 보다 많이 보내면 무시 되고 에러가 나지 않는다. 이게 자바스크립트의 자율성임, 타입스크립트면 바로 에러 
fn(1, 2, 3);


