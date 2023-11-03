//TODO - 속성값으로 체크해서 타입 가드 : is 연산자

(()=>{
  const kim: User = {
    name: 'kim',
    age: 20,
    nickName: 'asdasd'
  }

  const lee: UnKnownUser = {
    name: 'Lee',
    age: '21'
  }

  const hong: Admin = {
    name: 'Hong'
  }

  //NOTE - 속성 값으로 타입가드 함수 만들어 보기 
  const printUser = (user: User | UnKnownUser | Admin): void => {
    if (isUser(user)) {
      console.log(user.nickName);
    }
  }
//NOTE - user 의 타입은 User 라고 단언 하고 타입 검사를 해서 불리언 값 반환
  const isUser = (user: User | UnKnownUser | Admin): user is User => {
    return typeof (user as User).age === 'number';
  }

  printUser(kim);
  printUser(lee);
  printUser(hong);

  isUser(kim);
  isUser(lee);
  isUser(hong);
})();