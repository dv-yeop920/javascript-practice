//TODO - 타입 추론
//NOTE - 변수나 함수 선언할 때 따로 타입 선언을 하지 않아도 타입을 트래픽 해서 자동으로 타입이 지정됨 

(()=>{
  //NOTE - 타입을 따로 지정하지 않아도 다른 타입의 값을 할당 하려 하면 에러가 난다
  //NOTE - 아래는 string으로 선언 했는데 값을 바꾸려고 할때 다른 타입의 값을 넣을때 에러 예시 
  let name = 'kim';
  name = 123;

  interface Todo {
    title: string,
    content: string,
    done: boolean
  }

  //NOTE - 이렇게 아래와 같이 title 부분에 오타가 나면 에러가 안난다 그렇기 떄문에 타입을 잘 지정해서 사용하자
  const todo = {
    titel:'제목1',
    content: '내용',
    done: true
  }

  const todo2: Todo = {
    title:'제목1',
    content: '내용',
    done: true
  }

})();