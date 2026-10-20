const findMinNum = (nums) => {
    let min = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < min){
            min = nums[i];
        }
    }
    return min;
}

console.log(findMinNum([8, 3, 12, 2, 9]))