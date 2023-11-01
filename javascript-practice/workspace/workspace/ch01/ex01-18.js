//reduce 함수 사용 해보기 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//NOTE - 해당 배열의 요소의 갯수만큼 발동
//NOTE - 첫번째 인자: 첫번째 값 , 두번째 인자: 배열의 요소
//NOTE - 마지막 초기값 설정 : 100 으로 설정 하면 acc가 100으로 시작 하게 되고 거기서 부터 1,2,3...순으로 더해짐
const sum = arr.reduce((acc, crr) => {
    return acc + crr;
} , 100);

console.log(sum);