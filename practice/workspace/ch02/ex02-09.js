// Function 생성자 함수
//NOTE - 이런게 있다 ~
const todtjd = new Function('x' , 'y', 
'var result = x + y; return result');

console.log(todtjd(1,3));