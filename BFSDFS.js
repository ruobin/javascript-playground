// import Node from './Node';
const Node = require('./Node');

const left = new Node(3, undefined, undefined);
const right = new Node(7);
let root = new Node(5, left, right);

console.log(root.right.left);

const array = [6, 1, 5, 2, 4, 3, 7, 8];

function createNode(array, i) {
    const node = new Node(array[i]);
    if (array.length > 2 * i + 1) {
        node.setLeft(createNode(array, 2 * i + 1));
    }
    if (array.length > 2 * i + 2) {
        node.setRight(createNode(array, 2 * i + 2));
    }
    return node;
}

console.log(JSON.stringify(createNode(array, 0)));

let BFSQueue = [];

function BFS(node) {
    console.log(node.value);
    if (node.left) { 
        BFSQueue.push(node.left);
    }
    if (node.right) { 
        BFSQueue.push(node.right);
    }
    if (BFSQueue.length) {
        BFS(BFSQueue.shift());
    }
}

function DFS(node) {
    console.log(node.value);
    if (node.left) {
        DFS(node.left)
    }
    if (node.right) { 
        DFS(node.right);
    }
 }

console.log(`BFS:`);
BFS(createNode(array, 0));

console.log(`DFS:`);
DFS(createNode(array, 0));

