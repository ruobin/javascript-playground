
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return [i, j];
            }
        }
    }
    return undefined;
};

var twoSumWithHashMap = function (nums, target) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const requiredNumber = target - nums[i];
        if (hashMap[requiredNumber] !== undefined) {
            return [hashMap[requiredNumber], i];
        } else {
            hashMap[nums[i]] = i;
        }

    }
    return undefined;
};

console.log(twoSumWithHashMap([2,7,11,15], 9));