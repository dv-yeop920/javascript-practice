var count = 0;
var myObj = {
	count: 0,
	visit: function(){
		// 방문자를 한명 증가시킨다.
		this.count++; //myobj 를 가르킴
		const that = this;
		const visit2 = function() {
			that.count ++; //바로 바깥에서 this 를 변수에 담고 그 변수를 사용한다 
		}
		visit2();
	},
	
};

myObj.visit(); // 1 증가
myObj.visit(); // 1 + 1
console.log('합계', myObj.count); // 2
console.log(count); // 0