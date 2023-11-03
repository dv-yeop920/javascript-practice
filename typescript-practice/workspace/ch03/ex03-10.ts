//TODO - 함수의 타입 추론

(()=>{

  //NOTE - 함수 역시 자동 any   타입 지정이 된다.
  const add = (num) => {
    return num + 20;
  }

  //NOTE - 이런식으로 하면 자동 number 타입 지정
  const add2 = (num = 10) => {
    return num + 20;
  }

  //NOTE - 올바른 타입지정
  const add3 = (num:number): number => {
    return num + 20;
  }

  console.log(add(10));
  console.log(add2(20));
  console.log(add3(20));
})();