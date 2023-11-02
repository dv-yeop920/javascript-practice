// ex01-18.ts 복사
//TODO - 상수 써보기

(()=>{

    //let js = 'javascript';
    //let ts = 'typescript';

    //NOTE - 위와 같이 변수로 선언 했다가 연산자를 === 가 아닌 = 로 실수로 하면 값이 바뀌는 현상이 나타나기 때문에 
    //NOTE - 이런 경우 정보를 많이 입력 해야 하는데 반복 되는 것이 많을 때 상수로 지정해주고 재사용 한다

    const JS = 'javascript';
    const TS = 'typescript';

    const getSchedule = (subject: string): string | undefined => {

        if (subject === JS) {
            return `${ subject }의 수업은 5일 입니다`;
        }
        if (subject === TS) {
            return `${ subject }의 수업은 10일 입니다`;
        }
    }

    const jsSchedule = getSchedule(JS);
    const tsSchedule = getSchedule(TS);

    console.log(jsSchedule);
    console.log(tsSchedule);
})();