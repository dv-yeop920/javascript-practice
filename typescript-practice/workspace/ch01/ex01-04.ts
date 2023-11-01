//TODO - optional parameter
//NOTE - 매개변수에 ? 연산자를 써서 들어와도 되고 안들어와도 된다고 명시 할 수 있음
(()=>{
    const user = (name:string, age?:number): string => {
        return `${ name } age: ${ age ? age : "" }`
    }
    console.log(user('Lee', 29));
    console.log(user('Lee'));
})();



