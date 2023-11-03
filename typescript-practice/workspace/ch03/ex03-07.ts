//TODO - 객체 타입을 기반으로 객체 타입 생성: in keyof

(()=>{
  type User = {
    id: string,
    name: string,
    phone: string
  }

  //NOTE - 기본 User 타입으로 만든 객체 
  const user1:User = {
    id: 'aa',
    name: 'Lee',
    phone: '010^^^'
  }

  //NOTE - in keyof 키워드로 선언해 놓은 객체 타입을 순회 하며 key 값을 만들어주고 , 
  //NOTE - string[] 과 같이 새로운 타입으로 만들어줄 수 있다
  type UserInfo = {
    [key in keyof User]: string[];

  }

  //NOTE - UserInfo 타입으로 만든 객체. 정보가 한 키에 여러개의 값이 있다면 이런식으로 사용도 가능
  const user2:UserInfo = {
    id: ['aa', 'bb'],
    name: ['Lee', 'Kim', 'Gang'],
    phone: ['010^^^', '022323']
  }

  console.log(user1);
  console.log(user2);
})();