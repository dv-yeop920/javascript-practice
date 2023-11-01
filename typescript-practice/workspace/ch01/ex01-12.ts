//TODO - 인터페이스에 함수 타입 추가 해서 사용 하기 

(()=>{

    //NOTE - 함수에 Todo 타입에 인자를 받는데 Todo 타입에 맞지 않는 인자가 들어오면 에러가 난다
    //NOTE - 그래서 선택적 파라미터 방법인 ? 연산자를 사용해서 done 값이 있을 수도 있고 없을 수도 있다고 지정해 준다
    interface Todo {
        //NOTE - readonly : 한번 값을 받아왔으면 최초의 값으로 고정 하도록 해줌, 중간에 수정 하면 에러남 
        readonly _id: number,
        title: string,
        content: string,
        done?: boolean
    }

    //NOTE - Toggle 타입을 가진 함수는 매개 변수로 Todo 타입의 인자를 받아야 하고 리턴 하지 않으니 void 타입
    interface Toggle {
        (param: Todo): void;
    }

    const todo1: Todo = {
        _id: 1,
        title: '할일1',
        content: '할일1 내용',
        done: false
    }


    const todo2: Todo = {
        _id: 2,
        title: '할일2',
        content: '할일2 내용',
    }

    //NOTE - Todo 타입의 인자를 받아 그 객체의 done 값을 수정 
    //NOTE - 인터페이스나 타입을 지정 했으면 따로 더 타입을 적어 줄 필요가 없다 중복만 될 뿐
    const toggleFunction: Toggle = (todo) => {
        todo.done = true;
    }


    //NOTE - 이런 식으로 중간에 객체의 readonly인 속성값을 바꾸게 되면 에러가 남 
    //todo1._id = 3;


    toggleFunction(todo1);
    toggleFunction(todo2);
    console.log(todo1);
    console.log(todo2);
})();
