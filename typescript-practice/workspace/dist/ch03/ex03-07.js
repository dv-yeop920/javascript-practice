"use strict";
//TODO - 객체 타입을 기반으로 객체 타입 생성: in keyof
(() => {
    //NOTE - 기본 User 타입으로 만든 객체 
    const user1 = {
        id: 'aa',
        name: 'Lee',
        phone: '010^^^'
    };
    //NOTE - UserInfo 타입으로 만든 객체. 정보가 한 키에 여러개의 값이 있다면 이런식으로 사용도 가능
    const user2 = {
        id: ['aa', 'bb'],
        name: ['Lee', 'Kim', 'Gang'],
        phone: ['010^^^', '022323']
    };
    console.log(user1);
    console.log(user2);
})();
