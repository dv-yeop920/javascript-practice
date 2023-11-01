//TODO -  클래스에서의 타입 지정 인터페이스 사용
(()=>{

    interface Score {
        kor: number,
        eng: number,
        sum(kor: number,eng: number): number,
        avg(): number
    }
    //NOTE - 하이스쿨 클래스 객체가 score 라는 인터페이스를 사용 한다 라는 뜻 (implements)
    class HighSchool implements Score {
        kor:number; 
        eng:number;

        constructor(kor:number, eng:number) {
            this.kor = kor;
            this.eng = eng;
        }

        sum(): number {
            return this.kor + this.eng;
        }

        avg(): number {
            return this.sum() / 2;
        }

    }

    const kim = new HighSchool(100,70);
    console.log(kim.sum(), kim.avg());
    console.log(kim.kor, kim.eng);
})();

