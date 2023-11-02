//TODO - 인터페이스 상속
(() => {

    //NOTE - 이렇게 타입을 일일이 다 짜면 코드 양이 많아진다 원래 타입에서 옵션을 더 넣어서 사용하려면 상속을 시키면 된다
    interface Todo {
        title: string,
        content: string
    }

    /*interface TodoInfo {
        readonly _id: number,
        title: string,
        content: string,
        done?: boolean
    } 아래 처럼 수정*/ 
    //NOTE - extends 로 클래스 처럼 상속 
    interface TodoInfo extends Todo {
        readonly _id: number,
        done?: boolean
    }

    const todo1: Todo = {
        title: '할일1',
        content: '할일2 내용'
    }

    const todo2: TodoInfo = {
        _id: 2,
        title: '할일2',
        content: '할일2 내용'
    }

    console.log(todo1);
    console.log(todo2);
})();

