// 함수의 결과 값으로 함수가 반환될 수 있다.
function foo2(){
	console.log('foo 호출.');
	return function() {
		console.log('bar 호출');
		return function() {
			console.log('baz 호출');
		}
	}
};

const bar2 = foo2();
const baz = bar2();
baz();

foo2()()();

