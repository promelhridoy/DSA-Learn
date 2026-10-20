const findTotal = (arr) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
const nums = [5, 10, 15, 20];
console.log(findTotal(nums));

// count even numbers in an array
const countEvenNumbers = (arr) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
const nums1 = [2, 7, 8, 11, 14, 19];
console.log(countEvenNumbers(nums1));


// count positive numbers in an array
const countPositiveNumbers = (arr) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            count++;
        }
    }
    return count;
}
const nums2 = [-5, 3, -2, 8, 1, -4];
console.log(countPositiveNumbers(nums2));