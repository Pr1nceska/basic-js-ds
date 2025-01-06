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

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let curr = this._root;

    while (curr) {
      if (data === curr.data) {
        return curr;
      } else if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
      } else {
        if (!node.left) return node.right;
        if (!node.right) return node.left;
        node.data = getMin(node.right);
        node.right = removeNode(node.right, node.data);
      }
      return node;
    };

    const getMin = (node) => {
      while (node.left) node = node.left;
      return node.data;
    };

    this._root = removeNode(this._root, data);
  }

  min() {
    let curr = this._root;

    while (curr.left) {
      curr = curr.left;
    }

    return curr.data;
  }

  max() {
    let curr = this._root;

    while (curr.right) {
      curr = curr.right;
    }

    return curr.data;
  }
}

module.exports = {
  BinarySearchTree,
};
