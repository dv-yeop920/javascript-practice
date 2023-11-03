"use strict";
//NOTE - 12에서 이어서
(() => {
    //NOTE - 타입스크립트에서는 한번 선언 하면 추론으로 인해 타입의 주소가 이미 정해져서 속성은 추가 못시킨다
    (() => {
        //NOTE - 이렇게 아직 값을 할당하지 않은 빈 객체일 경우 이렇게 사용 가능
        const todo = {};
        //NOTE - 왠만하면  무조건 타입을 미리 지정하자 
        const todo4 = {
            title: 'asd',
            content: 'asdsda',
            done: true
        };
        const todo1 = {
            title: '할일1'
        };
        //todo1.content = '할일2'; //error
        const todo2 = {
            title: '할일2'
        };
        const todo3 = {
            title: '할일'
        };
        todo3.title = 'hello'; // 값 변경은 가능 
        console.log(todo1, todo2, todo3);
    })();
})();
