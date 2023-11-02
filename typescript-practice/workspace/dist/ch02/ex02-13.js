"use strict";
//TODO - 제네릭 타입 제약 
//NOTE - T는 아무거나 받는대로 할 수 있지만 extends 키워드로 받고 싶은 타입에 제약을 걸어줄 수 있다.
(() => {
    const echo = (msg) => {
        return msg;
    };
    const echo2 = (msg) => {
        console.log(`인자값의 길이: ${msg.length}`);
        return msg;
    };
    console.log(echo('hello'));
    console.log(echo(300));
    console.log(echo(new Date()));
    console.log(echo2('hello world'));
})();
