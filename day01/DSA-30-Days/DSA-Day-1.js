//LeetCode 217
function containsDuplicate(nums) {
    const numSet = new Set();
    for (let num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }
    return false;
}
console.log(containsDuplicate([1, 2, 3, 4, 5])); // false
console.log(containsDuplicate([1, 2, 3, 4, 1])); // true


function findDuplicates(nums) {
    const setNums = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (setNums.has(nums[i])) {
            return nums[i];
        }
        setNums.add(nums[i]);
    }
    return -1; // No duplicates found
}
console.log(findDuplicates([1, 2, 3, 4, 5])); // -1
console.log(findDuplicates([1, 2, 3, 4, 1])); // 1

//LeetCode 242 Valid Anagram
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("listen", "silent")); // true