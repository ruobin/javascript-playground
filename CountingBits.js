/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let res = [];
    for (let index = 0; index <= n; index++) {
        let bitsCount = 0;
        let num = index;
        while (num != 0) {
            bitsCount += num % 2;
            num = Math.floor(num / 2);
        }
        res[index] = bitsCount;
    }
    return res;
};

console.log(JSON.stringify(countBits(5)));