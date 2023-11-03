//TODO - 타입스크립트 디스크립션 파일  여기서 선언한 타입이나 인터페이스를 꺼내 쓸 수 있음 

interface User {
  name: string,
  age: number,
  nickName: string
}

interface UnKnownUser {
  name: string,
  age: string
}

interface Admin {
  name: string
}