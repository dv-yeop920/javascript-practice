// 고등학교 성적관리 생성자 함수(총점과 평균 계산)
function HighSchool(kor, eng){
    this.kor = kor;
    this.eng = eng;
}

HighSchool.prototype.sum = function() {
    return this.kor + this.eng;
}

HighSchool.prototype.avg = function() {
    return this.sum() / 2;
}

var s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

//TODO - 대학 성적관리 생성자 함수( 총점, 평균, 학점 계산 )
function Colleage(kor, eng) {
    this.kor = kor;
    this.eng = eng;
    HighSchool.call(this, kor, eng);
}

//College 가 Highschool을 상속 받는다 
Colleage.prototype = new HighSchool();
Colleage.prototype.constructor = Colleage;
Colleage.prototype.grade = function() {
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


var s2 = new Colleage(80, 71);
console.log(s2.sum());
console.log(s2.avg());
console.log(s2.grade());