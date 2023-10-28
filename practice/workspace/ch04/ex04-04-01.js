var sum = function(x, y, z) {
  return x + y + z;
}

//function에 partial 기능 추가
//lodash가 이미 있지만 그 원리를 알기 위해 공부한 것 
//NOTE - 자바스크립트 객체에는 partial이라는 함수가 없다
//NOTE -  그래서 프로토타입에 partial을 추가 해주고 
//NOTE -  partial은 함수를 리턴 하도록 만들어 주고
//NOTE - 내용을 입력 해준다 
Function.prototype.partial = function() {
  const fn = this; // = sum()을 가져온다
  const preArgs = [...arguments]; // = sum.partial(20, 80);미리 들어온 어규먼트를 저장한다
  return function(){
    //NOTE 미리 들어온 어규먼트와 새로 들어오는 어규먼트를 합친다.
    const args = [...preArgs, ...arguments];
    return fn(...args); // = fn.apply(this.args); 배열을 분리해서 값을 반환한다
  }
}
const sum100 = sum.partial(20, 80);

console.log(sum100(30));
console.log(sum100(100));

//NOTE - 미리 값을 담아두고 이후에 값을 추가로 해서 반환 받고 싶을 때 사용하면 좋을듯