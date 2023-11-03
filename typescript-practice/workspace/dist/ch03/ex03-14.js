"use strict";
//TODO - 함수가 null을 리턴할 때
//NOTE - 엘레멘트를 불러올 때 타입스크립트에서는 null 로 반환 되기 때문에 innerHTML 같은걸 할 경우 에러가 날 수 있는데
//NOTE - 변수명 옆에 ! 나 ? 를 붙여서 단언해 줄 수 있다 null이 , undefined 아니다 ! 라고 하는 것 
//NOTE - 하지만 권장 하진 않음
(() => {
    const div = document.querySelector('div');
    //div!.innerHTML = 'Hello';
    //div?.innerHTML = 'Hello';
    //타입 가드를 이용해서 null 값 없애기
    //NOTE - 타입 가드로 쓸 수 있는 구문은
    //NOTE - 논리 연산자(&&), typof 연산자, instanceof 연산자, in 연산자, 
    //NOTE - is 연산자를 이용한 함수 작성, 구
    //NOTE - 별된 유니언타입 : 타입속성 정의시 구체적인값을 지정한 후 객체의 속성값으로 확인 (admin: boolean 대신 admin: true 같이)
    if (div !== null) {
        div.innerHTML = 'hello';
    }
})();
