//TODO - 클래스 타입스크립트로 정의하기 

(()=>{
    interface IHighSchool {
        kor: number,
        eng: number,
        sum(): number,
        avg(): number
    }
    /*
    //NOTE - 인터페이스 없이 
    class HighSchool {
        //NOTE - 타입스크립트에서 class는 타입을 미리 정의 해야 한다 
        //NOTE - 그리고 컨스트럭터 매개변수의 타입을 지정
        //NOTE - 함수의 리턴값 타입 지정
        kor: number;
        eng: number;
        constructor (kor: number, eng: number) {
            this.kor = kor;
            this.eng = eng;
        }
        sum():number {
            return this.kor + this.eng;
        }
        avg():number {
            return Math.round(this.sum() / 2);
        }
    }*/

    //NOTE - 인터페이스 있을 때 

    class HighSchool implements IHighSchool {
        //NOTE - 인터페이스를 미리 구현 해두면 좀 더 직관 적으로 타입을 볼 수 있다 
        kor: number;
        eng: number;
        constructor (kor: number, eng: number) {
            this.kor = kor;
            this.eng = eng;
        }
        sum():number {
            return this.kor + this.eng;
        }
        avg():number {
            return Math.round(this.sum() / 2);
        }
    }

    var s1 = new HighSchool(100, 91);
    console.log('평균', s1.avg());//평균 점수의 소수는 반올림 한다 
})();
