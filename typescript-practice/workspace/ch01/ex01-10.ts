// TODO - 인터페이스

(()=>{
    interface User {
        name: string,
        age: number
    }

    //NOTE - 변수에 타입을 지정 할 경우
    const obj:User = {
        name: 'Lee',
        age: 29
    }

    console.log(obj);

    //NOTE - 함수 매개 변수에 타입 지정 할 경우
    const getAge = (user: User):void => {
        console.log(user.age);
    }

    getAge({name: 'Kim', age: 222});

    //NOTE - 함수 리턴 타입 지정 할 경우
    const createUser = (name: string, age:number): User => {
        const user:User = {
            name: name,
            age: age
        }
        return user;
    }

    console.log(createUser('Gang', 23));
})();