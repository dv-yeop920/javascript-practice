//TODO - readonly 유틸리티 타입 사용 하기 
//NOTE - 데이터에 타입을 붙여줄때 Readonly키워드를 쓰고 옆에 제네릭 문법으로 인터페이스나 타입을 담으면 
//NOTE - 그 타입의 프로퍼티들을 다 readonly(수정을 못하게)로 설정해 준다.

(()=>{
  interface Todo {
    title: string,
    content: string
  }

  const todo: Readonly<Todo> = {                    
    title: '투두',
    content: '투두내용'                   
  }


  //NOTE - 불필요한 반복을 줄일 수 있다
  /*const todo: Todo = {                    
    readonly title: '투두',
    readonly content: '투두내용'                   
  }*/

  console.log(todo);
})();