"use strict";
//TODO - private 사용해서 클래스 내부에서만 함수 사용 해보기 
(() => {
    //NOTE - private 는 내부 함수에서만 사용할 수 있도록 권한을 주는 것 이기 때문에 밖에서 
    //NOTE - 호출할 필요가 없는 것들을 private로 지정해 준다 따라서 인터페이스 에서도 노출하면 안된다
    class HighSchool {
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
    console.log('평균', s1.avg()); //평균 점수의 소수는 반올림 한다 
})();
