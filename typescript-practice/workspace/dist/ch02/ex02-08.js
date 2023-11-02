"use strict";
//TODO - 제네릭 함수 
//NOTE - 함수에 <T> 매개 변수에 T 리턴값 T 로 설정 한다 
//NOTE - 어떤 타입이 들어오면 그 타입으로 값을 받아오고 반환 하는 것
(() => {
    const echo = (msg) => {
        return msg;
    };
    //NOTE - 아래와 같이 함수 호출할때 함수명 뒤에 <'타입'> 을 쓰고 해당 타입의 값을 보내주면 된다
    console.log(echo('하이'));
    console.log(echo(30));
    console.log(echo(true));
})();
