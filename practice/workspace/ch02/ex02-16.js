console.log(Math.min(10,100));	// 10
console.log(Math.min(200,100,50,60,80,30));//30
console.log(Math.min(100,20,60,50,70)); // 20

// 지정한 배열의 요소 중 최소값을 반환
function smallest(nums) {
    //배열이 아닌 경우 배열로 만들어 준다.
    if (!(nums instanceof Array)) {
        //nums = Array.prototype.slice.call(arguments);
        nums = [...arguments];
    }

    

    //해결 방법
    //let min = nums[0];
    //1. return Math.min.apply(this, nums);

    /*2. for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
        //min = Math.min(min, nums[i]);
    }
    return min;*/
    //3
    return Math.min(...nums);
}

console.log(smallest([10,100]));	// 10
console.log(smallest([200,100,50,60,80,30]));//30
console.log(smallest(100,20,60,50,70));	// 20

