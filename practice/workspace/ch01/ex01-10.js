//NOTE - stack 과 queue
/**
 * 스택은 1,2,3 순서로 넣으면 꺼내쓸 때 3,2,1 순서로 꺼내 써야 하는 반면
 * 큐는 1,2,3 넣으면 넣는대로 꺼내쓸 때 1,2,3 순서대로 꺼내 쓸 수 있음 
 */

const stack = [];
//100,200,300 순으로 저장
stack.push(100);
stack.push(200);
stack.push(300);

for(let i = 0; i < 3; i++) {
    console.log(stack[i]);
}

const queue = [];
//100,200,300 순으로 저장
//NOTE - unshift 로 하고 pop으로 꺼내는 작업 방법도 있지만 unshift는 빼는 순서대로 다시 앞자리로 옮겨오기 때문에 성능적으로 별로일 수 있음
//NOTE - push , shift 도 마찬가지 
queue.push(100);
queue.push(200);
queue.push(300);

for(let i = 0; i < 3; i++) {
    console.log(queue[i]);
}


console.log(stack , queue);
for(let i = 0; i < 3; i++) {
    console.log(stack.pop());
}

for(let i = 0; i < 3; i++) {
    console.log(queue.shift());
}