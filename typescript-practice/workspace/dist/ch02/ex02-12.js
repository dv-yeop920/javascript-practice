"use strict";
////TODO - 일반 클래스와 제네릭 클래스 비교 : 제네릭 클래스
(() => {
    class Queue {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push();
        }
        shift() {
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
    const nq = new Queue();
    nq.push(1);
    nq.push(2);
    nq.push(3);
    const nq1 = sq.shift();
    const nq2 = sq.shift();
    const nq3 = sq.shift();
    console.log(nq1, nq2, nq3);
})();
