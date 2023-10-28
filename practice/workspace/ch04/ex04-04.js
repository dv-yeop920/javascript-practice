//TODO - partial 사용한 예제 
//NOTE - 미리 값을 하나 넘겨 주고 , 그 뒤에 그 변수를 호출해서 값을 뒤에 전달해 줄 수 있다.

var sum = function(x, y){
  return x + y;
}


console.log(sum(10, 10)); // 20


const sum2 = _.partial(sum, 10);

console.log(sum2(10)); // 20


