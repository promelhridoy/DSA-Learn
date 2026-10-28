// function sum(arr) {
//     let total = 0;
//     for(const num of arr) {
//         total = total + num;
//     }
//     return total;
// }
// console.log(sum([5, 10, 15, 20]));// 50

// // count even numbers in an array
// function countEven(arr) {
//     let count = 0;
//     for(const num of arr) {
//         if(num % 2 === 0) {
//             count++;
//         }
//     }
//     return count;
// }
// const numbers = [2, 5, 8, 11, 14, 17, 20];
// console.log(countEven(numbers)); // 4

// // find the largest number in an array

// function findLargest(arr) {
//     let largest = arr[0];
//     for(const num of arr) {
//         if(num > largest) {
//             largest = num;
//         }
//     }
//     return largest;
// }
// const numbers2 = [12, 45, 7, 89, 23];
// console.log(findLargest(numbers2)); 

// //count positive numbers in an array
 
// function countPositive(arr) {
//     let count = 0;
//     for(const num of arr) {
//         if(num > 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countPositive([-5, 3, -2, 8, 1, -4])); 

// // find the first even number in an array

// function findFirstEven(arr) {
//     for(const num of arr) {
//         if(num % 2 === 0) {
//             return num;
//         }
//     }
//     return undefined;
// }

// console.log(findFirstEven([1, 3, 5, 7, 9]));  // undefined

// function findGreatest(arr) {
//     for(const num of arr) {
//         if(num > 10) {
//             return num;
//         }
//     }
//     return undefined;
// }

const numbers = [4, 12, 7, 18, 3, 20];

function countGreaterThanTen(arr) {
  let count = 0;
    for (const num of arr) {
        if (num > 10) {
            count++;
        }
    }
    return count;
}

console.log(countGreaterThanTen(numbers)); // Expected: 3