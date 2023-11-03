//TODO - 매핑 수정자

(()=>{
  //NOTE - 타입을 변환할 때 속성의 특성을 바꿀 수 있다
  //NOTE - 예를 들어 타입의 속성을 optinal type으로 수정 하고 싶다고 하면 아래와 같다
  interface Todo {
    _id: string,
    title: string
  }

  type OptionalTodo1 = {
    [key in '_id' | 'title']?: Todo[key];
  }


  type MyPartial<T> = {
    [key in keyof T]?: T[key];
  }

  type OptionalTodo2 = MyPartial<Todo>;
  
  //NOTE - 유틸리티로 하면 아래와 같이 
  type OptionalTodo3 = Partial<Todo>;


  const todo1: OptionalTodo1 = {
    title: '타이틀1'
  }

  const todo2: OptionalTodo2 = {
    _id: '2',
    title: '타이틀2'
  }

  const todo3: OptionalTodo3 = {
    _id: '123'
  }     

  console.log(todo1);
  console.log(todo2);
  console.log(todo3);
})();