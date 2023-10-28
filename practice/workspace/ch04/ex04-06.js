//TODO 클로저를 이용한 메모제이션




// 지정한 수가 소수인지 여부를 반환
var isPrime2 = function(num){  
  // 소수 판별 코드
  var prime = true;
// 2부터 N-1까지의 수로 N을 나눴을 때
for (let i = 2; i < num / 2; i++) {
  if (num % i === 0) {
    prime = false;
    break;
  };
}

// 캐시 리턴  
return prime;
}.memoize();


  
  console.time('소요시간');
  console.log('3 -> ', isPrime2(3));
  console.log('4 -> ', isPrime2(4));
  console.log('5 -> ', isPrime2(5));
  console.log('6 -> ', isPrime2(6));
  console.log('7 -> ', isPrime2(7));
  console.log('8 -> ', isPrime2(8));
  console.log('9 -> ', isPrime2(9));
  console.log('1000000007 -> ', isPrime2(1000000007));
  console.log('1000000007 -> ', isPrime2(1000000007));
  console.log('1000000007 -> ', isPrime2(1000000007));
  console.timeEnd('소요시간');
  