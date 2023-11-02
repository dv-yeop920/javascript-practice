//TODO - 일반 함수와 제네릭 비교 : 이번 페이지는 일반 함수 제네릭은 다음 페이지 
//NOTE - 한 함수에서 여러개 타입의 값을 받을 경우가 생길 수가 있다 그렇게 되면 
//NOTE - 타입을 여러개로 지정해서 해도 되긴 하지만 제네릭이라는 방법도 있다 우선 일반 함수 예
(()=>{

    //NOTE - number와 string boolean을 받는다고 치자 이렇게 
    const echo = (msg:string|number):string | number => {
        return msg;
    }

    console.log(echo('하이'));
    console.log(echo(300));
    //NOTE - 이와 같이 유니온을 해도 되지만 여기서 boolean 타입까지 받기 위해 수정 해야 한다면 또 수정을 일일히 해야한다

    type Type = string | number | boolean;

    const echo2 = (msg:Type):Type => {
        //string|number|boolean 혹은 타입 따로 파기
        return msg;
    }

    console.log(echo2('헬로'));
    console.log(echo2(300));
    console.log(echo2(true));
})();
