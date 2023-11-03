"use strict";
//TODO - Patial 유틸리티 타입 사용
//NOTE - 모든 프로퍼티에 대해 optional 추가
(() => {
    const todo = {
        _id: 1,
        title: '투두',
        content: 'string',
        done: true
    };
    //NOTE - 내용 바꾸기 용 객체
    const todo2 = {
        content: '투두 내용'
    };
    //NOTE - 완료 여부 수정 객체
    const todo3 = {
        done: false
    };
    //NOTE - 아래 함수와 같이 수정을 원본 객체 수정을 할때 이용 되기도 한다
    function updateTodo(todo, newTodo) {
        return Object.assign(Object.assign({}, todo), newTodo);
    }
    console.log(todo);
    console.log(updateTodo(todo, todo2));
    console.log(updateTodo(todo, todo3));
})();
