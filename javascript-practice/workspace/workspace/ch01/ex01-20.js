const user = {
  userName: '김철수',
  age: 30,
  phone: '0102223333',
  address: '서울특별시 종로구 종로3길 17 D타워, 16-17층 (주)멋쟁이사자처럼'
};

/* 다음처럼 출력할 수 있도록 info를 작성하시오.
김철수님의 정보입니다.
나이: 30
전화번호: 0102223333
주소: 서울시
*/
const info = `
${user.userName}님의 정보 입니다. 
나이: ${user.age}
전화번호: ${user.phone}
주소: ${user.address}
`;

console.log(info);

