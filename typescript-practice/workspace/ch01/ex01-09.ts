//TODO - 인터페이스
//NOTE - 타입 별칭과의 차이점은 '객체'전용 타입을 지정할때 사용

(()=>{
    interface User {
        name: string,
        age: number
    }

    const obj:User = {
        name: 'Lee',
        age: 29
    }

    const printUser = (name: string, age: number): User => {
        return {
            name: name,
            age: age
        }
    }

    const printUser2 = (user: User): User[] => {
        const arr = [user , user, user];
        return arr;
    }

    console.log(obj);
    console.log(printUser('Kim',20));
    console.log(printUser2(obj));
})();