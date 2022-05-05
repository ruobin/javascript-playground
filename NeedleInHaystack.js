/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0;

    const haystackArr = Array.from(haystack);
    const needleArr = Array.from(needle);
    if (needle.length > haystack.length) return -1;
    
    for (let i = 0; i < haystackArr.length; i++) {
        for (let j = 0; j < needleArr.length; j++) {
            if (needleArr[j] === haystackArr[j+i]) {
                if (j === needleArr.length - 1) {
                    return i;
                }
                
                continue;
            } else {
                break;
            }
        }
    }
    return -1;
};

console.log(strStr('hello', 'll'));