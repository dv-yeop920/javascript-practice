//TODO - 자바스크립트 모듈화 : 캡슐화 시켜서 어디서든 재사용 할 수 있게 
//NOTE - 낱개로 export
export function sum(data){
  return data.a + data.b;
}

export function substract(data){
  return data.a - data.b;
}

export function divide(data){
  return data.a / data.b;
}

//NOTE - 한번에 export
/**
 *  function sum(data){
  return data.a + data.b;
}

  function substract(data){
  return data.a - data.b;
}

  function divide(data){
  return data.a / data.b;
}

export default { sum, substract, divide };
 */