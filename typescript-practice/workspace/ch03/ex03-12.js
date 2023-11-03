//TODO - 타입 단언이 필요한 js 코드 
//NOTE - 자바스크립트에서는 아래와 같이 속성을 나중에 할당이 가능한데 타입스크립트는 안된다
(()=>{
  const todo1 = {
    title: '할일1'
  }

  todo1.content = '할일2';

  const todo2 = {
    title: '할일2'
  }

  const todo3 = {
    title: '할일'
  }

  console.log(todo1, todo2, todo3);
})();