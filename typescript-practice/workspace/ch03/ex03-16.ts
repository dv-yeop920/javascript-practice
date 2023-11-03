//TODO - instanceof 연산자를 활용한 타입가드

(()=>{
  //NOTE - 검사 대상을 왼쪽에 적고 instanceof 오른쪽엔 그 타입이 맞는지 
  console.log(new Function()  instanceof Function);
  console.log({} instanceof Object);
  console.log([] instanceof Array);
  console.log([] instanceof Object);
  console.log([] instanceof Date);
  console.log([] instanceof Function);
  console.log(new Date() instanceof Date);


  class Todo {
    title: string;
    content: string;
    constructor(title: string, content: string) {
      this.title = title;
      this.content = content
    }
    getTitle(): string {
      return this.title;
    }
  }

  //NOTE - 타입 가드 함수
  const getTitle = (todo: Todo | string[]): string | undefined => {
    //NOTE - 타입 가드를 적용해서 title값을 리턴 하는 함수 작성
    if (todo instanceof Todo) {
      return todo.getTitle();
    }
    if (todo instanceof Array) {
      return todo[0];
    }
  }

  const todo1 = new Todo('hi', 'bb');
  const todo2 = new Todo('hello', 'aa');

  console.log(getTitle(todo1));
  console.log(getTitle(todo2));
})();
