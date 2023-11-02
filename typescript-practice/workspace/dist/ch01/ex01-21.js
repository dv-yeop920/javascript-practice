"use strict";
//TODO - 문자형 enum 사용
(() => {
    let ClassName;
    (function (ClassName) {
        ClassName["JS"] = "javascript";
        ClassName["TS"] = "typescript";
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
