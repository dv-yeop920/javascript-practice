//커링 기법

function sum(a, b, c){
  return a + b + c;
}

console.log(sum(10, 20, 30));


const currySum = (a) => (b) => (c) =>  a + b + c;
/* = function currySum(a) {
      return function(b) {
        return function(c) {
          return a + b + c;
        }
      }
    }
*/
console.log(currySum(10)(20)(30));

//TODO - 다른 커링 해주는 함수를 가지고 사용해 보기 

const myCurry = (func) => (a) => (b) => (c) => func(a, b, c);

const curryAdd = myCurry(sum);

console.log(curryAdd(1)(2)(3));


//TODO - lodash 라이브러리 이용해보기

const currySum2 = _.curry(sum);

console.log(currySum2(1)(2)(3));
console.log(currySum2(3)(2)(5));