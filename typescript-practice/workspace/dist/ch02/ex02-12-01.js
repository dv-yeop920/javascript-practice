"use strict";
////TODO - 유틸리티 타입 제네릭
//투두 만들어보기
(() => {
    const todo1 = {
        title: '할일1',
        content: '할일1 내용'
    };
    const todo2 = {
        _id: 2,
        title: '할일2',
        content: '할일2 내용',
        done: false,
    };
    const todo3 = {
        _id: 3,
        title: '할일3',
        done: true
    };
    console.log(todo1, todo2, todo3);
})();
