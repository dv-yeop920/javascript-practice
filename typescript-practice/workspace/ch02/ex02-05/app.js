//TODO - import 해서 사용 (export 일경우 {} 안에 )
import { sum, substract, divide } from "./math.js";
//TODO - import 해서 사용 export default 일경우 그냥
//import MyMath, { sum, substract, divide } from "./math";
//import substract from "./math";
//import * as MyMath from "./math"; 전체를 MyMath 라는 이름으로 쓰기위해 가져온다

const data = {
    a: 10,
    b: 20
}

console.log(`sum: ${ sum(data) }`);
console.log(`substract: ${ substract(data) }`);
console.log(`divide: ${ divide(data) }`);