//TODO - 함수에 타입 지정해 보기 

(()=>{
    const hello = (name:string):string => {
        return `Hello ${ name }!`;
    }
    console.log(hello('Lee'));
})();



