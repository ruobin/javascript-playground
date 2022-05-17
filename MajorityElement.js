/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const frequency = (map.get(num) == undefined ? 0 : map.get(num)) + 1;
        map.set(num, frequency);
        if (frequency > nums.length / 2) return num;
    }
    return -1;
};