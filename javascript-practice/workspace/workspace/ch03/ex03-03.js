// prototype 이용해서 작성(ex03-01.js 파일 참조)
var Person = function(name){
    this.name = name;
};


Person.prototype.setName = function(newName) {
    return this.name = newName;
}

Person.prototype.getName = function() {
    return this.name;
}



var gang = new Person('김철수');
var park = new Person('이영희');

console.log(gang.getName());	// 김철수
console.log(park.getName());	// 이영희
gang.setName('홍길동');
console.log(gang.getName());	// 홍길동

console.log(gang.getName == park.getName);	// true
console.log(gang.setName == park.setName);	// true