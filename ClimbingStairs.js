let cache = {};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (cache[n]) return cache[n];
    if (n < 3) {
        cache[n] = n;
    } else {
        cache[n] = climbStairs(n - 1) + climbStairs(n - 2);;
    }
    return cache[n];
};

