//TODO bind 사용해서 해보기

var count = 0;
var myObj = {
	count: 0,
	visit: function(){
		// 방문자를 한명 증가시킨다.
		this.count++; //myobj 를 가르킴
		const visitN =function(n) {
			this.count += n;
		}
		const visit3 = visitN.bind(this, 3);
		visit3();
		visit3();
	},
	
};

myObj.visit(); // 7 증가
myObj.visit(); // 7 증가
console.log('합계', myObj.count); // 14
console.log(count); // 0






/**!SECTIONvar count = 0;
var myObj = {
	count: 0,
	visit: function(){
		// 방문자를 한명 증가시킨다.
		this.count++; //myobj 를 가르킴
		const visit2 =function() {
			this.count ++; 
		}
		visit2();
	},
	
};

myObj.visit(); // 2 증가
myObj.visit(); // 2 증가
console.log('합계', myObj.count); // 4
console.log(count); // 0 */