/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    return searchRecurrsively(nums, 0, nums.length - 1, target);
};

function searchRecurrsively(nums, low, high, target) {
    if (low >= high) {
        if (nums[low] >= target) {
            return low;
        } else {
            return low + 1;
        }
    }
    let mid = Math.floor((low + high) / 2);
    if (target < nums[mid]) {
        return searchRecurrsively(nums, low, mid, target);
    } else if (target > nums[mid]) {
        return searchRecurrsively(nums, mid + 1, high, target);
    } else if (target === nums[mid]) {
        return mid;
    }
}
console.log(searchInsert([1, 5], 4));