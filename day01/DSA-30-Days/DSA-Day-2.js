//leet code Tow sum problem
//Brute force approach O(n^2)
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return null; 
// }

//Hash Map O(n)

function twoSum (nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const needed = target - currentNum;
        if(seen[needed] !== undefined) {
            return [seen[needed], i];
        }
        seen[currentNum] = i;
    }
}


const nums = [1, 5, 3, 4, 2];
const target = 3;
 
function findPairWithDiff(nums, target) {
  const seen = new Set();

  for (let currentNum of nums) {
    const needed1 = currentNum + target;
    const needed2 = currentNum - target;

    if (seen.has(needed1)) {
      return [needed1, currentNum];
    }
    if (seen.has(needed2)) {
      return [needed2, currentNum];
    }

    seen.add(currentNum);
  }

  return null;
}

console.log(findPairWithDiff(nums, target))