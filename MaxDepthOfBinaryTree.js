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
var maxDepthWithNode = function (root) {
    return depth(root);
};

function depth(root) {
    if (root === null || root === undefined) return 0;
    return Math.max(depth(root.left), depth(root.right)) + 1;
}

const Node = require('./Node');

// [3, 9, 20, null, null, 15, 7]
function buildTree(array) {
    if (array.length == 0) return null;
    let nodeArr = {};
    for (let index = 0; index < array.length; index++) {
        const val = array[index];
        const node = new Node(val);
        nodeArr[index] = node;
    }

    for (let index = 0; index < (array.length - 1) / 2; index++) {
        nodeArr[index].left = nodeArr[index * 2 + 1];
        nodeArr[index].right = nodeArr[index * 2 + 2];
    }
    return nodeArr[0];
}

console.log(maxDepthWithNode(buildTree([3, 9, 20, null, null, 15, 7])));