/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];
    let largest = nums[0];
    let sum = nums[0];
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        if (sum > 0) {
            sum += element;
            
        } else {
            sum = element;
        }
        
        largest = Math.max(largest, sum);
    }
    return largest;

};