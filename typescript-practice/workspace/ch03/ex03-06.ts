//TODO - 유니언타입을 기반으로 객체 타입 생성 : in (Mapped type)
//NOTE - 키를 유니언타입으로 생성 해놓고 객체는 그것을 참고 해서 for 문 처럼 사용해서 객체의 키값을 만들 수 있다
(()=>{
  type UserFields = 'id' | 'name' | 'email' | 'phoen';

  type User = {
    [key in UserFields]: string //유니언 타입으로 타입을 지정해줄 수 있다. | number
  }

  const userInfo: User = {
    id: 'aaaa',
    name: 'Lee',
    email: 'aaa@aaa',
    phoen: '010****'
  }

  console.log(userInfo);
})();