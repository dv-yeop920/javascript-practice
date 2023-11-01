const todolist = [
  {
    "_id": 1,
    "title": "Javascript 공부",
    "done": true
  },
  {
    "_id": 2,
    "title": "Typescript 공부",
    "done": false
  },
  {
    "_id": 3,
    "title": "React 공부",
    "done": false
  },
  {
    "_id": 4,
    "title": "React 프로젝트",
    "done": true
  }
]

// 완료된 할일 목록 
let doneList = [];
// 남은 할일 목록
let reaminList = [];
// 남은 할일 수
let reaminCount = 0;
// _id=2인 할일
let todo = {};
// _id=3인 할일의 index
let todoIndex = 0;
// 남은 할일이 하나라도 있는가?
let hasTodo = false;
// 할일이 모두 완료 되었는가?
let busy = true;


for (let i = 0; i < todolist.length; i++) {
  const TODO = todolist[i];

  if (TODO.done) {
    doneList[doneList.length] = TODO.title;
    busy = false;
  }

  if (!TODO.done) {
    reaminList[reaminList.length] = TODO.title;
    hasTodo = true;
    reaminCount++;
  }

  if (TODO._id === 2) {
    todo.title = TODO.title;
  }

  if (TODO._id === 3) {
    todoIndex = i;
  }

}


console.log("완료된 할일 목록", doneList);
console.log("남은 할일 목록", reaminList);
console.log("남은 할일 수", reaminCount);
console.log("_id=2인 할일", todo);
console.log("_id=3인 할일의 index", todoIndex);
console.log("남은 할일이 하나라도 있는가?", hasTodo);
console.log("할일이 모두 완료 되었는가?", busy);



/*
  switch (TODO.done) {
    case true:
      doneList[doneList.length] = TODO.title;
      busy = false;
      break;
    case false:
      reaminList[reaminList.length] = TODO.title;
      hasTodo = true;
      reaminCount++;
      break;
    default:
      null;
  }

  switch (TODO._id) {
    case 2:
      todo.title = TODO.title;
      break;
    case 3:
      todoIndex = i;
      break;
    default:
      null;
  }*/