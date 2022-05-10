/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) === 1) {
            map.delete(nums[i]);
        } else {
            map.set(nums[i], 1);
        }
    }
    return map.keys().next().value;
};

console.log(singleNumber([2, 2, 1]));