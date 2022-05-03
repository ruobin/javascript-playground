class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    setLeft(left) {
        this.left = left;
    }

    setRight(right) {
        this.right = right;
    }
}

module.exports = Node