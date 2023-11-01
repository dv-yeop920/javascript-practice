
//NOTE - 동기 처리 예 , 자바스크립트는 싱글 스레드이기 때문에 처리할 데이터가 많으면 하나 끝낼동안 다른것은 실행이 안되는 단점이 있다
//NOTE 그래서 비동기 처리로 우선 받아와야할 데이터 처리를 우선적으로 순서를 정해서 처리 한다/
/*function syncFn1() {
    console.log('작업 시작');
    console.log('작업 종료');

    return '결과물';
}


function syncFn2(e) {
    console.log('작업 시작2');
    console.log('작업 종료2');

    return '결과물2';
} 

(function(){
    const result = syncFn1();
    syncFn2(result);
    console.log("테스트 종료");
})();
*/

//TODO - 셋타임 아웃으로 비동기 처리 해보기 
/*function asyncFn1(resolve) {
    console.log('작업 시작');
    
    setTimeout(() => {
        console.log('작업 종료');
        resolve('결과물');
    },3000);
}


function asyncFn2(f1Result, resolve) {
    console.log('작업 시작2');

    setTimeout(() => {
        console.log('작업 종료2');
        resolve('결과물2')
    }, 5000);
} 

(function(){
    asyncFn1(function(result){
        asyncFn2(result, function(f2result) {
            console.log(f2result);
        });
    });
    
    console.log("테스트 종료");
})();*/



//TODO - 프로미스로 비동기 처리 
//NOTE - promise 객체에서 작업 완료 되면 바로 리턴 한다
function promiseFn1() {
    return new Promise((resolve, resject) => {
        console.log('작업 시작');
    
        setTimeout(() => {
            console.log('작업 종료');
            resolve('결과물');
        },3000);
    })
}


function promiseFn2(f1Result) {
    return new Promise((resolve, resject) => {
        console.log('작업 시작2', f1Result);

        setTimeout(() => {
            console.log('작업 종료2');
            resolve('결과물2')
        }, 1000);
    });
} 

(function(){
    promiseFn1()
    .then(promiseFn2)
    .then(() => console.log('테스트 종료'))
    .catch(err => error(err));
})();
