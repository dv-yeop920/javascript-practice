//TODO - 유니언 타입과 타입 가드
//NOTE - 타입 가드 ( 간단한예 : 타입을 확인 하는 연산자를 쓴 조건문) 을 써서 여러개의 타입을 받더라도
//NOTE - 타입에 따라 값을 리턴 할 수 있게 할 수 있음 

(()=>{
    const print = (msg:string | number | boolean) => {
        if (typeof msg === 'string') {
            console.log(`${ msg } 글자수: ${ msg.length }`);
        }
        if (typeof msg === 'number') {
            console.log(`${ msg } 글자수: ${ msg }`);
        }
        if (typeof msg === 'boolean') {
            console.log(`${ msg } 글자수: ${ msg }`);
        }
    }


    print('hello');
    print(200);
    print(false);
})();