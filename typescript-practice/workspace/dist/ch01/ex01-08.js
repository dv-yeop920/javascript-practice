"use strict";
//TODO - 인터섹션 타입
//NOTE - 타입 확장을 위해 사용 하는 방법 & 연산자를 사용하고 타입을 추가 한다
(() => {
    const todo1 = {
        title: '할일1',
        content: '할일1 내용'
    };
    console.log(todo1);
    const todo2 = {
        _id: 3,
        done: true,
        title: '할일2',
        content: '할일2 내용'
    };
    console.log(todo2);
})();
