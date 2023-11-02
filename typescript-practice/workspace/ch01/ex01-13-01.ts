// index signature, 배열
//TODO - 인덱스 시그니쳐 

(()=>{
    //NOTE - 인덱스 시그니쳐로 들어올 키값이 스트링이나 넘버라고 지정해 줄 수 있다 ( 원하는 타입으로 지정 가능)
    //NOTE - 위에 속성들을 안적어도 되지만 적어주는게 직관적으로 좋다
    //NOTE - ? 연산자를 사용할 경우에는 undefined도 인덱스 시그니쳐에 추가 해줘야 됨

    interface User {
        name: string,
        email: string,
        phone: string,
        age?: number,
        //address?: string,
        //hobby?: string
        [etc: string]: string | number | undefined
    }

    const kim: User = {
        name: 'Kim',
        email: 'kim@gmail.com',
        phone: '010xxxxxxxx',
        age: 123,
        address: '서울시',
        hobby: '코딩'
    }

    const lee: User = {
        name: 'Lee',
        email: 'kim@gmail.com',
        phone: '010xxxxxxxx',
        age:123123
    }


    console.log(kim, lee);
})();
