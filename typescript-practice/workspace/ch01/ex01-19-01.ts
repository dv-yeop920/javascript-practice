// ex01-19.ts 복사
//TODO - 상수 그룹화 하기 

(()=>{

    //const JS = 'javascript';
    //const TS = 'typescript';
    //NOTE - 객체화 해도 문제는 변수 처럼 키값이 또 바뀔 수 있다는 것 
    //NOTE - 그게 싫으면 타입을 하나 만들어 준다

    type Readonly = {
        readonly JS: string,
        readonly TS: string,
        readonly REACT: string
    }

    const ClassName: Readonly = {
        JS: 'javascript',
        TS: 'typescript',
        REACT: 'react'
    }


    const getSchedule = (subject: string): string | undefined => {

        if (subject === ClassName.JS) {
            return `${ subject }의 수업은 5일 입니다`;
        }
        if (subject === ClassName.TS) {
            return `${ subject }의 수업은 10일 입니다`;
        }
    }

    const jsSchedule = getSchedule(ClassName.JS);
    const tsSchedule = getSchedule(ClassName.TS);
    const reactSchedule = getSchedule(ClassName.REACT);

    console.log(jsSchedule);
    console.log(tsSchedule);
    console.log(reactSchedule);
})();