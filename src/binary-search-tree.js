const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const node = new Node(data);

    if (!this._root) {
      this._root = node;
      return;
    }

    let curr = this._root;
    while (true) {
      if (data < curr.data) {
        if (!curr.left) {
          curr.left = node;
          break;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = node;
          break;
        }
        curr = curr.right;
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
