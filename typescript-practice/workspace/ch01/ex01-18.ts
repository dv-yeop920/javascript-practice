//TODO - 상수가 필요한 경우
//NOTE - 절대 값이 변하지 않는 것이 상수 이기 때문에 절대적으로 변하지 않는 값을 선언 할때


//NOTE - 이와 같이 하드 코딩을 하게 되면 오타가 날 경우 제대로 값이 반환이 안될 수가 있다 나머지는 19페이지로 가서 
(()=>{
    const getSchedule = (subject: string): string | undefined => {
        if (subject === 'javascript') {
            return `${ subject }의 수업은 5일 입니다`;
        }
        if (subject === 'typescript') {
            return `${ subject }의 수업은 10일 입니다`;
        }
    }

    const jsSchedule = getSchedule('javascript');
    const tsSchedule = getSchedule('typescript');

    console.log(jsSchedule);
    console.log(tsSchedule);
})();

