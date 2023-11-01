// 10 + 100의 결과를 출력한다.
function add(){
    const num = 10 + 100;
    console.log(`10 + 100 = ${ num }`);
}

// 전달받은 숫자와 100의 합계를 출력한다.
function add100(n1){
    const num = n1 + 100;
    console.log(`n1 + 100 = ${ num }`);
}

// 전달받은 두 수의 합계를 출력한다.
function sum(n1, n2){
    const num = n1 + n2;
    console.log(`n1 + n2 = ${ num }`);
}

// 전달받은 두 수의 합계를 반환한다.
function sum2(n1, n2){
    const num = n1 + n2;
    return `n1 + n2 = ${ num }`;
}

//NOTE - 출력 과 반환의 차이를 알아야 한다 값을 리턴 하는거면 return을 사용 하고 아니면 쓰지 않는다

add();
add100(100);
sum(30, 30);
console.log(sum2(300, 300));
