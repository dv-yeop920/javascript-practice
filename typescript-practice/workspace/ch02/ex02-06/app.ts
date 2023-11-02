import { sum, substract, divide } from "./math.js";
//NOTE - 타입을 import 할땐 객체 앞에 type을 붙여서 
import type { Data } from "./math.js";




const data: Data = {
    a: 10,
    b: 20
}

console.log(`sum: ${ sum(data) }`);
console.log(`substract: ${ substract(data) }`);
console.log(`divide: ${ divide(data) }`);