//TODO - const enum
//NOTE - enum에 const 를 붙여주면 실제 코드가 컴파일 될 때 선언 했던 enum과 enum 으로 작성 했던 
//NOTE - 모든 것들이 사라지고 그 값이 남는다. 
(() => {

    const enum ClassName {
        JS = 'javascript',
        TS = 'typescript'
    }

    const getSchedule = (subject: ClassName): string | undefined => {

        if (subject === ClassName.JS) {
            return `${ subject }의 수업은 5일 입니다`;
        }
        if (subject === ClassName.TS) {
            return `${ subject }의 수업은 10일 입니다`;
        }
    }

    const jsSchedule = getSchedule(ClassName.JS);
    const tsSchedule = getSchedule(ClassName.TS);

    console.log(jsSchedule);
    console.log(tsSchedule);
})();
