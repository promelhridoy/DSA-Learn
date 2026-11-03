// //leet code Tow sum problem
// //Brute force approach O(n^2)
// // function twoSum(nums, target) {
// //     for (let i = 0; i < nums.length; i++) {
// //         for (let j = i + 1; j < nums.length; j++) {
// //             if (nums[i] + nums[j] === target) {
// //                 return [i, j];
// //             }
// //         }
// //     }
// //     return null; 
// // }

// //Hash Map O(n)

// function twoSum (nums, target) {
//     const seen = {};
//     for (let i = 0; i < nums.length; i++) {
//         const currentNum = nums[i];
//         const needed = target - currentNum;
//         if(seen[needed] !== undefined) {
//             return [seen[needed], i];
//         }
//         seen[currentNum] = i;
//     }
// }


// const nums = [1, 5, 3, 4, 2];
// const target = 3;
 
// function findPairWithDiff(nums, target) {
//   const seen = new Set();

//   for (let currentNum of nums) {
//     const needed1 = currentNum + target;
//     const needed2 = currentNum - target;

//     if (seen.has(needed1)) {
//       return [needed1, currentNum];
//     }
//     if (seen.has(needed2)) {
//       return [needed2, currentNum];
//     }

//     seen.add(currentNum);
//   }

//   return null;
// }

// console.log(findPairWithDiff(nums, target))

// // find the first negative number in an array

// function findNegativeFirstNumber(arr) {
//   for( let i = 0; i < arr.length; i++) {
//     if(arr[i] < 0) {
//       return arr[i];
//     }
//   }
//   return null;
// } 
// const numbers = [5, 8, 12, -3, 7, -9, 15];
// console.log(findNegativeFirstNumber(numbers)); // Output: -3

// function findNegativeFirst(arr) {
//   for(let num of arr) {
//     if(num < 0) {
//       return num;
//     }
//   }
//   return null;
// }
// console.log(findNegativeFirst(numbers)); // Output: -3

// //Count negative numbers in an array

// function countNegativeNumbers(arr) {
//   let count = 0;
//   for(let num of arr) {
//     if(num < 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countNegativeNumbers(numbers)); // Output: 2

// //Find All Even Numbers in an Array

// function findEvenNumbers(arr) {
//   const evenNumbers = [];
//   for(let num of arr) {
//     if(num % 2 === 0) {
//       evenNumbers.push(num);
//     }
//   }
//   return evenNumbers;
// }
// console.log(findEvenNumbers(numbers)); // Output: [8, 4, 2]

// //Find the Largest Even Number in an Array

// function findLargestEvenNumber(arr) {
//   let largestEven = null;
//   for(let num of arr) {
//     if(num % 2 === 0) {
//       if(largestEven === null || num > largestEven) {
//         largestEven = num;
//       }
//     }
//   }
//   return largestEven;
// }
// console.log(findLargestEvenNumber(numbers)); // Output: 8

// //Find the Second Largest Number in an Array if there is no second largest number return undefined

// function findSecondLargestNumber(arr) {
//   let largest = undefined;
//   let secondLargest = undefined;
//   for(let num of arr) {
//     if(largest === undefined || num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if(num !== largest && (secondLargest === undefined || num > secondLargest)) {
//       secondLargest = num;
//     }
//   }
//   return secondLargest === undefined ? undefined : secondLargest;
// }
// console.log(findSecondLargestNumber(numbers)); // Output: 5

// //Count Positive number in an array

// function CountPositiveNumbers(arr) {
//   let count = 0;
//   for(let num of arr) {
//     if(num > 0) {
//       count++;
//     }
//   }
//   return count;
// }


// //Find smallest number in an array

// function findSmallestNumber(arr) {
//   if(arr.length === 0) return undefined;
//   let smallest = arr[0];
//   for(let num of arr) {
//     if(num < smallest) {
//       smallest = num;
//     }
//   }
//   return smallest;
// }

// //Find the First Number Greater Than 50
// function findFirstGreaterThanFifty(arr) {
//    for(let num of arr) {
//     if(num > 50) {
//       return num;
//     }
//    }
//    return undefined;
// }

// // Count Numbers Greater Than 50

// function countGreaterThanFifty(arr) {
//   if(arr.length === 0) return "Empty Array";
//   let count = 0;
//   for(let num of arr) {
//     if(num > 50) {
//       count++;
//     }
//   }
//   return count;
// }

//  if(largest === null || num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if(num !== largest && (secondLargest === null || num > secondLargest)) {
//       secondLargest = num;
//     }

// // Find Second Smallest Number
// function findSecondSmallest(arr) {
//   let smallest = null;
//   let secondSmallest = null;
//   for(let num of arr) {
//     if(smallest === null || num < smallest) {
//       secondSmallest = smallest;
//       smallest = num;
//     } else if(num !== smallest && (secondSmallest === null || num < secondSmallest)) {
//       secondSmallest = num;
//     }
//   }
//    return secondSmallest === null ? undefined : secondSmallest;
// }

// //* Find Largest and Smallest number in an array

// function findMinMix(arr) {
//   if(arr.length === 0) {return undefined;}

//   let largest = arr[0];
//   let smallest = arr[0];

//   for(let num of arr) {
//     if(largest < num) {
//       largest = num;
//     }
//     if(smallest > num) {
//       smallest = num;
//     }
//   }
//   return {
//     largest,
//     smallest
//   }
// }


function findSecondLargestNumber(arr) {
  let largest = undefined;
  let secondLargest = undefined;

  for (let num of arr) {
    if (largest === undefined || num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (
      num !== largest &&
      (secondLargest === undefined || num > secondLargest)
    ) {
      secondLargest = num;
    }
  }

  return secondLargest === undefined ? undefined : secondLargest;
}


console.log(findSecondLargestNumber([5, 5, 5]));
console.log(findSecondLargestNumber([10]));
console.log(findSecondLargestNumber([-10, -5, -20]));
console.log(findSecondLargestNumber([]));

//* Frequency Counter Pattern

function frequencyCounter(arr) {
  const frequency = {};

  for(let num of arr) {
    if(frequency[num]) {
       frequency[num]++;
    }else {
      frequency[num] = 1;
    }
  }
  return frequency;
}

function countFrequency(arr) {
  const frequency = new Map();

  for (const num of arr) {
    if (frequency.has(num)) {
      frequency.set(num, frequency.get(num) + 1);
    } else {
      frequency.set(num, 1);
    }
  }

  return frequency;
}

function findMostFrequentNumber(arr) {
  const frequency = {};
  let mostFrequency = 0;
  let mostFrequentNumber = undefined;
  for(let num of arr) {
    if(frequency[num]) {
       frequency[num]++;
    }else {
      frequency[num] = 1;
    }
  }
for (let num in frequency) {
  if (frequency[num] > mostFrequency) {
    mostFrequency = frequency[num];
    mostFrequentNumber = Number(num);
  }
}
  return mostFrequentNumber;
}

function hasDuplicate(arr) {
   const frequency = {};
   for(let num of arr) {
    if(frequency[num]) {
      return true;
    }else {
      frequency[num] = 1;
    }
   }
   return false;
}

