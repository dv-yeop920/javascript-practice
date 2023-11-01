//클로저를 이용해서 private 한 속성 만들기 
// count 속성과 ride(), getCount() 메서드 작성
var Counter = function(){
    let count = 0;
    this.ride = function() {
        if (count < 40) {
            count++;
        }
        if (count >= 40) {
            console.log("정원 초과");
        }
    };
    this.getCount = function() {
        return count;
    }
};

var c = new Counter();
c.ride();
c.ride();

/*for (let i = 0; i <= 40; i++) {
    c.ride();
}*/

//적용 안됨 
c.count += 40;

console.log('전체 탑승자', c.getCount());