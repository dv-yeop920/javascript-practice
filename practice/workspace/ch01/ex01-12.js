// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i}: ${ arr[i] }`);
    }
}

const colorArr = ['orange', 'yellow', 'green'];

printArr(colorArr);

// 유사배열객체
//NOTE - 배열 메소드의 원리를 이해하기 위해 한 것 이지 실제로 쓰진 않음
//  - length 속성 추가
//  - 0부터 시작해서 1씩 증가하는 속성 추가
const arr3 = {
    0: 'orange',
    1: 'yellow',
    2: 'green',
    length: 3,
    push: function(el) {
        arr3[arr3.length] = el;
        arr3.length++;
    },
    shift: function() {
        const firstIndex = arr3[0];

        for (let i = 0; i < arr3.length - 1; i++) {
            arr3[i] = arr3[i + 1];
        }

        arr3.length--;
        delete arr3[arr3.length];

        return firstIndex;
    },
    pop: function() {
        const lastIndex = arr3[arr3.length -1];
        arr3.length--;
        //length만 줄인다고 데이터가 삭제 되진 않으니 delete 무조건 사용하기 
        delete arr3[arr3.length];
        return lastIndex;
    }
};

arr3.push("hello");
arr3.shift();
arr3.pop();


printArr(arr3);
