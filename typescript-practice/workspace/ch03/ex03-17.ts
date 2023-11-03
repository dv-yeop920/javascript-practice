//TODO - in 연산자를 이용한 타입 가드 

(()=>{
  interface TodoInfoDetail {
    _id: number;
    title: string;
    content: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  type TodoRegist = Pick<TodoInfoDetail, 'title' | 'content'>;
  type TodoInfo = Omit<TodoInfoDetail, 'createdAt' | 'updatedAt'>;
  type TodoList = Omit<TodoInfo, 'content'>;

  var todo1: TodoRegist = {
    title: '할일 1',
    content: '등록에 사용'
  };
  var todo2: TodoInfo = {
    _id: 2,
    title: '할일 2',
    content: '상세조회에 사용',
    done: true
  };
  var todo3: TodoList = {
    _id: 3,
    title: '할일 3',
    done: false
  };

  //NOTE - 타입 가드로 todo 출력해 보기 
  const printTodo = (todo: TodoRegist | TodoInfo) => {
    //NOTE - todo 객체 안에 _id 가 있다면 이렇게 출력 해라 라고 하기 
    //NOTE - for in 문 사용하는 것과 비슷
    if ('_id' in todo) {
      console.log(`[TodoInfo]_id: ${ todo._id }, title: ${ todo.title }`); 
    }
    else {
      console.log(`[TodoResist]title: ${ todo.title }`);
    }
  }

  console.log(todo1, todo2, todo3);
  printTodo(todo2);
  printTodo(todo1);
})();