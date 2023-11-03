"use strict";
//TODO - typeof 연산자를 이용한 타입 가드 
(() => {
    //NOTE - 타입을 먼저 알아보기 : 기본 데이터 타입을 체크하긴 좋으나 객체 타입의 상세 타입은 힘들다 전부 object이기 떄문
    console.log(typeof 10);
    console.log(typeof 'a');
    console.log(typeof true);
    console.log(typeof null);
    console.log(typeof undefined);
    console.log(typeof {});
    console.log(typeof []);
    console.log(typeof new Function());
    console.log(typeof new Date());
    //NOTE - 타입 가드를 위한 함수 작성
    const print = (msg) => {
        //NOTE - 이런식으로 타입 검사를 해주지 않으면 그 타입에 대한 메소드를 사용할 수 없다
        if (typeof msg === 'string') {
            console.log(msg.length);
        }
        if (typeof msg === 'number') {
            console.log(msg * 2);
        }
    };
    print('hello');
    print(20);
})();
