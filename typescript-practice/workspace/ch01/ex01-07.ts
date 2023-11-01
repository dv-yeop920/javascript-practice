//TODO - 타입 별칭으로 객체 타입 선언
//NOTE - 선언할 값의 틀을 미리 만들어 놓는다고 생각하면 됨

(() => {
    type User = {
        name: string,
        age: number
    }

    const obj:User = {
        name: 'Lee',
        age: 29
    }

    const printUser = (name:string, age:number):User => {
        return {
            name: name,
            age: age
        }
    }

    const printUser2 = (user:User):User[] => {
        const arr = [user , user, user];
        return arr;
    }

    console.log(obj);
    console.log(printUser('Kim',20));
    console.log(printUser2(obj));
})();