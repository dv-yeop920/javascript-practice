//TODO - 제네릭 타입 제약 
//NOTE - T는 아무거나 받는대로 할 수 있지만 extends 키워드로 받고 싶은 타입에 제약을 걸어줄 수 있다.
(()=>{
    type extendsType = string | number | object;

    const echo = <T extends extendsType> (msg: T): T => {
        return msg;
    }

    const echo2 = <T extends { length: number }> (msg: T): T => {
        console.log(`인자값의 길이: ${ msg.length }`);
        return msg
    }


    console.log(echo<string>('hello'));
    console.log(echo<number>(300));
    console.log(echo<object>(new Date()));

    console.log(echo2<string>('hello world'));
})();


