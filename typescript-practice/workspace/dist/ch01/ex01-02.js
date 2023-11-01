"use strict";
//TODO - 기본 타입 
//NOTE - 지정한 타입으로만 값 할당 가능 다른 타입의 값을 할당 하면 에러남 
//NOTE - any 타입은 아무거나 받을 수 있는 타입인데 권장 하지 않음
(() => {
    //number
    const num = 123;
    //string
    const str = 'hello';
    //boolean
    const boolean = true;
    //object
    const obj = {};
    //Array
    const arr = [];
    //const arr:Array<string> = ['asd']
    //tuple
    const tupleArr = ['hello', 1];
    //any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let aaaa = 123;
    aaaa = 'asd';
    //null
    const null1 = null;
    //undefined
    const unde = undefined;
    console.log(typeof num, typeof str, typeof boolean, typeof obj, typeof arr, typeof tupleArr, typeof aaaa, typeof null1, typeof unde);
})();
