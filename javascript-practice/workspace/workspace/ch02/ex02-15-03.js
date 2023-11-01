var count = 0;
var myObj = {
	count: 0,
	visit: function(){
		// 방문자를 한명 증가시킨다.
		this.count++; //myobj 를 가르킴
		const visit2 = () => {
			this.count ++; 
		}
		visit2();//화살표 함수를 써도 해결 가능 
	},
	
};

myObj.visit(); // 2 증가
myObj.visit(); // 2 증가 
console.log('합계', myObj.count); // 4
console.log(count); // 0