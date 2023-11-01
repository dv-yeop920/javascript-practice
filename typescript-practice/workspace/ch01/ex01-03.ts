//TODO - 함수에 타입 선언 하기 
//NOTE - :void 는 리턴 하는 값이 없을 경우 선언 하면 되는 타입

(()=>{
    //NOTE - 매개변수는 number 타입의 값만 받을 수 있고 string으로만 반환 한다.
    const getCount = (count: number): string => {
        return `Count: ${ count }`;
    }

    console.log(getCount(10));

    /*
    //NOTE - 에러 예제: 넘버 타입을 반환 해야 하는데 리턴값이 스트링으로 되어 있으면 안됨
    const getCount2 = (count:number): number => {
        return `Count: ${ conut }`;
    }
    console.log(getCount2(10));

    //NOTE - 에러 예제2: 넘버타입을 반환 해야 하고 넘버타입을 받아야 하는데 스트링 값을 주면 안됨
    const getCount3 = (count:number): number => {
        return count + count;
    }
    console.log(getCount3('10'));*/
})();

