//TODO - 인터페이스 다중 상속

(() => {
    interface Todo {
        title: string,
        content: string
    }

    interface TodoInfo {
        title: string,
        content: string
        readonly _id: number,
        done?: boolean
    }

    //NOTE - 이와 같이 extends를 쓰고 여러개의 인터페이스 입력 해서 합치기 가능 
    //NOTE - 여러개의 인터페이스를 합치려면 속성들의 타입이 같아야 된다. 
    interface TodoInfoTime extends Todo, TodoInfo {
        creaedAt: Date,//NOTE - 생성자 함수도 타입으로 지정 가능 
        updateAt: Date
    }

    const todo1: Todo = {
        title: '할일1',
        content: '할일2 내용'
    }

    const todo3: TodoInfoTime = {
        _id: 3,
        title: '할일3',
        content: '할일 내용3',
        done: false,
        creaedAt: new Date(),
        updateAt: new Date()
    }

    console.log(todo1);
    console.log(todo3);
})();

