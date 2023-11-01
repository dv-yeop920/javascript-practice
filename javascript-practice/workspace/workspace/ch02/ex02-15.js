var count = 0;
var myObj = {
	count: 0,
	visit: function(){
		// 방문자를 한명 증가시킨다.
		//NOTE - 내부에서 프로퍼티에 접근 하려면 myobj.count++로 할수도 있지만 변수명이 변경 되면 이름을 바꿔줘야 하는 일이 생기기 때문에 this로 하는게 좋음
		//NOTE - 가장 가까운 상위 객체의 프로퍼티를 향하기 때문에 전역 변수 count가 아닌 내부 객체의 count 조준
		this.count++; //myobj 를 가르킴
	},
	visit2: function() {
		this.count + 2; 
		//TODO - 전역 변수 count 를 증가 시킨다 이 문제 해결법은 다음 페이지로
	}
};

myObj.visit(); // 1 증가
myObj.visit(); // 1 + 1
console.log('합계', myObj.count); // 2
myObj.visit2();
console.log('합계', myObj.count);
console.log(count); // 0