/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let longestPath = 0;

var diameterOfBinaryTree = function (root) {
    getLongestPath(root);
    return longestPath;
};

function getLongestPath(root) {
    if (root == null) return 0;
    let leftHeight = getLongestPath(root.left);
    let rightHeight = getLongestPath(root.right);
    // if longest path goes through current root node
    let sum = leftHeight + rightHeight;
    longestPath = Math.max(longestPath, sum);
    // height for current root node
    return Math.max(leftHeight, rightHeight) + 1;
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(1, new TreeNode(2, null, null), null);
console.log(diameterOfBinaryTree(root))