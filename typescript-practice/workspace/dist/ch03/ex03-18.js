"use strict";
//TODO - 속성값으로 체크해서 타입 가드 
(() => {
    const kim = {
        name: 'kim',
        age: 20,
        nickName: 'asdasd'
    };
    const lee = {
        name: 'Lee',
        age: '21'
    };
    const hong = {
        name: 'Hong'
    };
    //NOTE - 속성 값으로 타입가드 함수 만들어 보기 
    const printUser = (user) => {
        if ('age' in user && typeof user.age === 'number') {
            //NOTE - 속성 검사 해주니까 됨 하지만 복잡한 로직이므로 다른 방법 사용 > 다음 페이지에서 
            console.log(user.nickName);
        }
        //조건 없이 하니까 에러남 console.log(user.age);
    };
    printUser(kim);
    printUser(lee);
    printUser(hong);
})();
