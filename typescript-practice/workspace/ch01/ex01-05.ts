// TODO - 유니언 타입
//NOTE - 여러개의 값을 받을 함수나 변수면 타입을 여러번 따로 지정해서 하는게 아닌 | 연산자를 써서 한번에 여러 타입 수용 가능

(()=>{
    const log = (msg:string | number): string | number => {
        return msg;
    }
    console.log(log('hello'));
    console.log(log(123));

    let numOrStr: string | number = 'asdads';
    numOrStr = 123333;
    console.log(numOrStr);
})();

