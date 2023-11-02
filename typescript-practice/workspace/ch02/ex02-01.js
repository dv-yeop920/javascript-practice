//TODO - 자바스크립트 클래스 정의 (TDD): 점수 평균값 내보기 

(()=>{
  class HighSchool {
    constructor (kor, eng) {
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
  console.log('평균', s1.avg());//평균 점수의 소수는 반올림 한다 
})();