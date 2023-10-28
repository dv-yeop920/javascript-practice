// ex03-05.js 의 프로토타입객체 타입을 클래스 객체 타입으로 리팩토링
//NOTE - 프로토타입은 매우 복잡하고 가성비 떨어지는 식으로 코드를 짜야 되는데 클래스는 동일한 동작을 실행 하는데
//NOTE - 훨신 코드가 짧아지고 직관적이다.
// 고등학교 성적관리 생성자 함수(총점과 평균 계산)
class HighSchool {
    //NOTE - 콘스트럭터 함수 역할
    constructor(kor, eng) {
        this.kor = kor;
        this.eng = eng;
    }
    sum() {
        return this.kor + this.eng;
    }
    avg() {
        return Math.round(this.sum() / 2);
    }
}



var s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

//TODO - 대학 성적관리 생성자 함수( 총점, 평균, 학점 계산 )
//NOTE - extends 상속 받을때 쓰는 키워드 칼리지는 하이스쿨에서 상속 받는다 라는 의미
class Colleage extends HighSchool  {
    constructor(kor, eng) {
        //NOTE - 하이스쿨에서 상속 받는다 (super)
        super(kor, eng);
    }
    grade() {
        var grade = "F";
        var avg = this.avg();
        if (avg >= 90) {
            grade = "A";
        } else if (avg >= 80) {
            grade = "B";
        } else if (avg >= 70) {
            grade = "C";
        } else if (avg >= 60) {
            grade = "D";
        }
        return grade;
    }
}


var s2 = new Colleage(100, 30);
console.log(s2.sum());
console.log(s2.avg());
console.log(s2.grade());
