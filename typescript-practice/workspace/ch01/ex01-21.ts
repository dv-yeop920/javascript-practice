//TODO - 문자형 enum 사용


(() => {

    enum ClassName {
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