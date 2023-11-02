//TODO - 자바스크립트 클래스 정의 : private class field 
//NOTE - 자바스크립트에서는 private 이 아니라 # 으로 내부에서만 쓸 수 있도록 할 수 있다
(()=>{
    class HighSchool {
        #kor = 0;
        #eng = 0;
        constructor (kor, eng) {
            this.#kor = kor;
            this.#eng = eng;
        }
        sum() {
            return this.#kor + this.#eng;
        }
        avg() {
            return Math.round(this.sum() / 2);
        }
    }

    var s1 = new HighSchool(100, 91);
    console.log('평균', s1.avg());//평균 점수의 소수는 반올림 한다 
})();
