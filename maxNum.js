function findMax(nums) {
    let max = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > max){
            max = nums[i];
        }
    }
    return max;
}

console.log(findMax([10, 33, 23, 35]))