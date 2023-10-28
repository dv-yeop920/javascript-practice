const arr2 = [300, 400];

console.log(arr2);

// 배열의 모든 요소 출력(for) : 인덱스의 값을 반환
for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// 배열의 모든 요소 출력(for-in) : 인덱스를 반환 값을 반환 하려면 arr[i] 로
//그래서 배열에서는 for in 보다 for of 
for(const i in arr2) {
    console.log(i);
}

// 배열의 모든 요소 출력(for-of)
for(const i of arr2) {
    console.log(i);
}


// 배열의 모든 요소 출력(forEach())
arr2.forEach((item) => {
    return console.log(item);
});

