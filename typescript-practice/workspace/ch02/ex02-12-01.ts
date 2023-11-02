////TODO - 유틸리티 타입 제네릭
//투두 만들어보기

(()=>{
    interface TodoInfoDetail {
        _id: number,
        title: string,
        content: string,
        done: boolean,
        createdAt: Date,
        updatedAt: Date
    }

    //NOTE - 유틸리티 타입 - Pick<지정한 타입, 그 타입의 속성> 지정한 인터페이스에서 지정한 타입을 반환
    type TodoRegist = Pick<TodoInfoDetail, 'title' | 'content'>
    //NOTE - Omit<지정한타입, 그 타입의 속성> 지정한 속성을 제외한 모든 속성을 가져온다
    type TodoInfo = Omit<TodoInfoDetail, 'createdAt' | 'updatedAt'>;
    type TodoList = Omit<TodoInfo, 'content'>;

    const todo1: TodoRegist = {
        title: '할일1',
        content: '할일1 내용'
    }

    const todo2: TodoInfo = {
        _id: 2,
        title: '할일2',
        content: '할일2 내용',
        done: false,
    }

    const todo3: TodoList = {
        _id: 3,
        title: '할일3',
        done: true
    }

    console.log(todo1, todo2, todo3);
})();