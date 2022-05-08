/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        const element = nums[i];
        if (element === 0) {
            for (let j = i; j < nums.length - 1; j++) {
                const tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }
    return nums;
};

var moveZeroesFast = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[count++] = nums[i];
        }
    }
    while (count < nums.length) {
        nums[count++] = 0;
    }
    return nums;
};