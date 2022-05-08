/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let tmpDistance = Number.MAX_SAFE_INTEGER;
    let closestTarget = Number.MAX_SAFE_INTEGER;
    let i = 0;
    let j = nums.length-1;

    while (i < j - 1) {
        console.log(`i is ${i}, j is ${j}`);
        for (let index = i + 1; index < j; index++) {
            console.log(`i is ${i}, j is ${j}, index is ${index}`);
            const sum = nums[i] + nums[j] + nums[index];
            const distance = Math.abs(sum - target);
            console.log(`sum is ${sum}, distance is ${distance}, tmpDistance is ${tmpDistance}, closestTarget is ${closestTarget}`);
            if (distance < tmpDistance) {
                tmpDistance = distance;
                closestTarget = sum;
            }
        }
        i++;
        j--;
    }
    return closestTarget;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));