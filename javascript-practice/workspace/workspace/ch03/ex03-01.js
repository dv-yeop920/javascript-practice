// 국어, 영어 점수를 매개변수로 받는 생성자 함수
var Score = function(kor, eng){
    this.kor = kor;
    this.eng = eng;
    this.sum = function() {
        return this.kor + this.eng;
    }
};

//NOTE - 그냥 sum을 쓰면 계속 다른 주소가 생기기 때문에 메모리적인 측면에서 좋지 않을 수 있음 
//NOTE - 프로토타입에 함수를 지정 해주고 거기서 함수 꺼내다 쓰는 방식으로 해도 괘찮음 
Score.prototype.avg = function() {
    return this.sum();
}
var s1 = new Score(100, 90);
var s2 = new Score(80, 70);

console.log(s1.sum());
console.log(s1.avg());
console.log(s2.sum());
console.log(s2.avg());
console.log(s1 === s2);