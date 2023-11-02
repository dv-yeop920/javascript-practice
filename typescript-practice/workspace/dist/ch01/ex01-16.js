"use strict";
//TODO - 인터페이스 다중 상속
(() => {
    const todo1 = {
        title: '할일1',
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
    console.log(todo3);
})();
