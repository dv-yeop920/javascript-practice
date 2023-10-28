
//NOTE - 생성 할때 매개변수에서 가져다 쓴 값을 더하는게 아니라 this로 불러와서 써야 그 이후에 수정할때 적용됨
//NOTE - 메소드 호출을 계속 하면 다시 초기값으로 돌아 가는데 , 이유는 실행이 완료된 함수의 지역변수가 사라지지 않고 메모리 어느 공간에 저장되어 있어 참조 가능 상태가 된다.(클로저)
var Score = function(kor, eng, math){
    if (!(this instanceof Score)) {
        return new Score(kor, eng, math);
    }
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    this.sum = function() {
        return this.kor + this.eng + this.math;
    }
    this.avg = function() {
        return Math.floor(this.sum() / 3);
    }
};

// kim은 점수가 각각 100, 90, 80이다.
// lee는 점수가 각각 90, 80, 60이다.
var kim = new Score(100, 90, 80);
var lee = new Score(90, 80, 60);

// 두 사람의 총점과 평균을 출력하시오.
console.log(kim.sum(), kim.avg());
console.log(lee.sum(), lee.avg());

// 수학점수를 10점 올린 후 총점과 평균 출력
kim.math += 10;
lee.math += 10;
console.log(kim.sum(), kim.avg());
console.log(lee.sum(), lee.avg());