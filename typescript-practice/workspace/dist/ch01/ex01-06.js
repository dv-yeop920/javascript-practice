"use strict";
//TODO - 타입 별칭
//NOTE - 유니온 타입이나 타입이 따로 필요 하다면 type 연산자를 써서 객체 형식이나 유니언 타입을 지정해 줄 수 있다.
//NOTE - 첫글자는 대문자로 
(() => {
    const log = (msg) => {
        return msg;
    };
    console.log(log('hello'));
    console.log(log(123));
    let numOrStr = 'asdads';
    numOrStr = 123333;
    console.log(numOrStr);
})();
