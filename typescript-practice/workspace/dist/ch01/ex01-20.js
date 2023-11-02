"use strict";
// ex01-19.ts 복사
//TODO - 숫자형 enum 사용
(() => {
    //NOTE - enum 이란? 의미 있는 상수들의 집합 , 객체 상수화 
    //NOTE - 속성명만 지정하면 인덱스를 반환
    //NOTE - 직접 값 할당 가능
    let ClassName;
    (function (ClassName) {
        ClassName[ClassName["JS"] = 100] = "JS";
        ClassName[ClassName["TS"] = 101] = "TS";
    })(ClassName || (ClassName = {}));
    const getSchedule = (subject) => {
        if (subject === ClassName.JS) {
            return `${subject}의 수업은 5일 입니다`;
        }
        if (subject === ClassName.TS) {
            return `${subject}의 수업은 10일 입니다`;
        }
    };
    const jsSchedule = getSchedule(ClassName.JS);
    const tsSchedule = getSchedule(ClassName.TS);
    console.log(jsSchedule);
    console.log(tsSchedule);
})();
