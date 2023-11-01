// 객체 생성
const foo = {
  name: 'foo',
  major: 'computer science'
};
// 객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo["major"]);
// 객체 프로퍼티 갱신
console.log(foo.name = "Lee");
console.log(foo["name"] = "Kim");
console.log(foo.name);
// 객체 프로퍼티 동적 생성
console.log(foo.age = 29);
// 객체 프로퍼티 삭제
delete foo.name;
console.log(foo.name);
// 객체 모든 프로퍼티 읽기
console.log(foo.name = "Lee");

const redFoo = () => {
  for(const prop in foo) {
    console.log(`${ prop} : ${ foo[prop] }`);
  }
}

redFoo();
















