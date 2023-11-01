// 함수의 인자로 전달될 수 있다.
function foo(bar){
	console.log(`foo 호출.`);
	bar();
};

function bar(){
	console.log('bar 호출.');
};

foo(bar);
