//TODO - 타입 선언 하고 배열에 요소 추가 , 삭제 , 수정 해보기 

(()=>{
  // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언


  // TODO: Todo Type 지정
  type Todo = {
    id:number,
    title:string,
    done:boolean
  }

  let todoItems:Todo[] = [];

  // api
  const fetchTodoItems = ():Todo[] => {
    const todos = [
      { id: 1, title: '안녕', done: false },
      { id: 2, title: '타입', done: false },
      { id: 3, title: '스크립트', done: false },
    ];
    return todos;
  }

  // crud methods
  const fetchTodos = ():Todo[] => {
    const todos = fetchTodoItems();
    return todos;
  }
  
  const addTodo = (todo:Todo):void => {
    todoItems.push(todo);
  }
  
  const deleteTodo = (index: number):void => {
    todoItems.splice(index, 1);
  }
  
  const completeTodo = (index: number, todo:Todo):void => {
    todo.done = true;
    todoItems.splice(index, 1, todo);
  }
  
  // business logic
  const logFirstTodo = ():Todo => {
    return todoItems[0];
  }
  
  const showCompleted = ():Todo[] => {
    return todoItems.filter(item => item.done);
  }
  
  const addTwoTodoItems = ():void => {
    // TODO: addTodo() 함수를 두 번 호출하여 todoItems에 할일 2개 추가
    addTodo({ id: 1, title: '할일1', done: true });
    addTodo({ id: 2, title: '할일2', done: false });
  }
  
  // 1. Todo 목록을 가져온다.
  todoItems = fetchTodos();
  // 2. 2개의 Todo를 등록한다.
  console.log(addTwoTodoItems());
  console.log(showCompleted());
  console.log(logFirstTodo());
  console.log(completeTodo(4, todoItems[4]));  
  console.log(deleteTodo(0));
  
  console.log(todoItems);
  
})();

