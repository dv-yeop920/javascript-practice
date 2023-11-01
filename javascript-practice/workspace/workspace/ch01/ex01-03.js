var maxNum = Number.MAX_VALUE;
var maxSafeNum = Number.MAX_SAFE_INTEGER;

// BigInt
const b1 = 12345n;
const b2 = BigInt(maxSafeNum);


console.log(maxNum, maxSafeNum);
console.log(typeof maxNum , typeof maxSafeNum , typeof b1 , typeof b2);

console.log(maxSafeNum, maxSafeNum + 1, maxSafeNum + 2, maxSafeNum + 3);
console.log( Number.isSafeInteger(maxSafeNum), Number.isSafeInteger(maxSafeNum + 1) );

//NOTE - BigInt 끼리만 연산이 됨 , 일반 Number랑은 연산이 안됨 에러남 
//NOTE - 근데 실질적으로 쓸일 없음 
//console.log(b2 , b2 + 1n , b2 + 2n , b2 + 3);

