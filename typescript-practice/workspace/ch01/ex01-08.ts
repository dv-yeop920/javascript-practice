//TODO - 인터섹션 타입
//NOTE - 타입 확장을 위해 사용 하는 방법 & 연산자를 사용하고 타입을 추가 한다

(() => {
    //NOTE - 타입 하나 선언
    type Todo = {
        title: string,
        content:string
    }

    const todo1:Todo = {
        title: '할일1',
        content: '할일1 내용'
    }

    console.log(todo1);

    //NOTE - 타입 확장: Todo 타입에 속성에 추가 적으로 속성을 부여 하고 싶을 때 
    type TodoInfo = Todo & {
        _id:number,
        done: boolean
    }

    const todo2:TodoInfo = {
        _id: 3,
        done: true,
        title:'할일2',
        content:'할일2 내용'
    }

    console.log(todo2);
})();