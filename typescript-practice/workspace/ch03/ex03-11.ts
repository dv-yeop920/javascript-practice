//TODO - 타입 단언
//NOTE - 기본 데이터의 타입 값, 객체 값, 함수의 리턴값에 보통 사용 변수에 사용 안됨
//NOTE - 남발 하면 오류 발생 가능성이 높이지기 때문에 남발 x 

(()=>{
  //NOTE - 이런식 사용 x
  let a = 10 as any as string;

  console.log(a);


  const getNum = (num) => {
    return num;
  }

  //NOTE - type이 추론되지 않을 경우
  //NOTE - as로 타입 지정을 하지 않고 확실히 무슨 타입의 값이다 라는걸 표시 
  const returnNum = getNum(3) as number;
  const returnStr = getNum('hello') as string;
  console.log(returnNum);
  console.log(returnStr);
})();