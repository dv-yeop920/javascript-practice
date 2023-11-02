"use strict";
//TODO - 인터페이스 상속의 계층 구조
//NOTE - 계속 상속을 하고 또 상속을 하고 props 처럼 사용 할 수 있다 
//NOTE - props drilling 같은 현상이 일어날 수 있으니 너무 많이 상속 시킬 필욘 없을 것 같다
(() => {
    const todo1 = {
        title: '할일1',
        content: '할일2 내용'
    };
    const todo2 = {
        _id: 2,
        title: '할일2',
        content: '할일2 내용'
    };
    const todo3 = {
        _id: 3,
        title: '할일3',
        content: '할일 내용3',
        done: false,
        creaedAt: new Date(),
        updateAt: new Date()
    };
    console.log(todo1);
    console.log(todo2);
    console.log(todo3);
})();
