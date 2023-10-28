// 지정한 수가 소수인지 여부를 반환
var isPrime = function(num){  
  // 캐시를 위한 코드
  isPrime._cache = isPrime._cache || {};

  if (isPrime._cache[num] !== undefined) {
    return isPrime._cache[num];
  }
  else {
    // 소수 판별 코드
  // 2부터 N-1까지의 수로 N을 나눴을 때
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) return false;
  }

  // 캐시 리턴  
  return isPrime._cache[num] = true;
  }
};

console.time('소요시간');
console.log('3 -> ', isPrime(3));
console.log('4 -> ', isPrime(4));
console.log('5 -> ', isPrime(5));
console.log('6 -> ', isPrime(6));
console.log('7 -> ', isPrime(7));
console.log('8 -> ', isPrime(8));
console.log('9 -> ', isPrime(9));
console.log('1000000007 -> ', isPrime(1000000007));
console.log('1000000007 -> ', isPrime(1000000007));
console.log('1000000007 -> ', isPrime(1000000007));
console.timeEnd('소요시간');
