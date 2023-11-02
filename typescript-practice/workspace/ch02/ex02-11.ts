//TODO - 일반 클래스와 제네릭 클래스 비교 : 일반 클래스

(()=>{
    class Queue {
        data: string[] = [];
        push(item: string): void {
            this.data.push();
        }
        shift(): string | undefined {
            return this.data.shift();
        }
    }


    const sq = new Queue();
    sq.push('hello');
    sq.push('javascript');
    sq.push('world');

    const sq1 = sq.shift();
    const sq2 = sq.shift();
    const sq3 = sq.shift();

    console.log(sq1, sq2, sq3);
})();
