"use strict";
//TODO - Required 유틸리티 타입 사용
//NOTE - 모든 프로퍼티를 필수로 사용 해야하도록 만든다
//NOTE - ? 연산자는 들어오거나 안들어오거나인데 이런것을 필수로 써야 하도록 바꿔준다
(() => {
    const todo = {
        _id: 1,
        title: '투두',
        content: '투두 할일',
        done: true
    };
    console.log(todo);
})();
