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


// forEach() 완료된 할일 목록
var doneList = [];

todolist.forEach(el => el.done && doneList.push(el) );

console.log('forEach() 완료된 할일 목록', doneList);


// filter() 완료된 할일 목록
var doneList = todolist.filter(el => el.done);

console.log('filter() 완료된 할일 목록', doneList);


// map() 남은 할일 목록
var reaminList = 
todolist.map(el => !el.done && el)
.filter(el => el);

console.log('map() 남은 할일 목록', reaminList);


// reduce() 남은 할일 수
var reaminCount = 
todolist
.reduce((a, b) => !b.done ? a + 1 : a , 0);

console.log('reduce() 남은 할일 수:', reaminCount);


// find() _id=2인 할일
var todo = 
todolist.find(el => el._id === 2);

console.log('find() _id=2인 할일:', todo);


// find() _id=3인 할일의 index
var findId3 = todolist.find(el => el._id === 3);

const todoIndex = todolist.indexOf(findId3);

console.log('find() _id=3인 할일의 index:', todoIndex);


// some() 남은 할일이 하나라도 있는가?
var hasTodo = todolist.some(el => !el.done);

console.log('some() 남은 할일이 하나라도 있는가?', hasTodo);


// every() 할일이 모두 완료 되었는가?
var busy = todolist.every(el => el.done);

console.log('every() 할일이 모두 완료 되었는가?', busy);
