"use strict";
//TODO - 인터페이스에 함수 타입 추가 해서 사용 하기 
(() => {
    const todo1 = {
        _id: 1,
        title: '할일1',
        content: '할일1 내용',
        done: false
    };
    const todo2 = {
        _id: 2,
        title: '할일2',
        content: '할일2 내용',
    };
    //NOTE - Todo 타입의 인자를 받아 그 객체의 done 값을 수정 
    //NOTE - 인터페이스나 타입을 지정 했으면 따로 더 타입을 적어 줄 필요가 없다 중복만 될 뿐
    const toggleFunction = (todo) => {
        todo.done = true;
    };
    //NOTE - 이런 식으로 중간에 객체의 readonly인 속성값을 바꾸게 되면 에러가 남 
    //todo1._id = 3;
    toggleFunction(todo1);
    toggleFunction(todo2);
    console.log(todo1);
    console.log(todo2);
})();
