//TODO - 인터페이스 선언 병합
//NOTE - 인터페이스는 동일한 이름으로 재선언 해도 에러가 나지 않고 자동으로 상속 받아 진다(가독성이 안좋아짐)
//NOTE - type 은 안된다 
//NOTE - 객체는 인터페이스 , 그 이외는 type 으로 생성해서 쓰자 
(() => {
    interface Todo {
        title: string,
        content: string
    }

    //NOTE - 이런식으로 덮어 씌워지기가 가능하지만 사용하지 말자 
    interface Todo {
        readonly _id: number,
        title: string,
        content: string,
        done?: boolean
    }

    interface TodoInfoTime extends Todo {
        creaedAt: Date,
        updateAt: Date
    }

    const todo1: Todo = {
        _id: 1,
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
