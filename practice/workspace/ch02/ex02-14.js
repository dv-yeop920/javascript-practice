var name = 'global';
//NOTE - this는 상위 객체에 프로퍼티를 바인딩 하는 역할 , 즉 가져오는 역할
function returnName(){
	return this.name;
}

// 일반적인 함수로 호출(함수명())
console.log(returnName());

// 객체의 메소드로 호출(객체.메소드명())
const tthisName = new Object({
	name: "Kim",
	age: 22,
	getName: returnName
});
const thisName = {
	name: "Lee",
	age: 29,
	getName: returnName
}

const newThisName = thisName.getName();
const nnewThisName = tthisName.getName();
console.log(newThisName , nnewThisName);
//TODO - call , apply 사용해 보기 
console.log(thisName.getName.call(tthisName) , tthisName.getName.apply(thisName));
