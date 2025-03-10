/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node) {
      // go through all of the children 
      for (let child of node.children) {
        // accumulate the values 
        total += child.val;
        // has any children
        if (child.children.length > 0){
          // recurse with child root
          sumHelper(child);
        }
      }
    }

    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvensHelper(node) {
      // go through all of the children
      for (let child of node.children) {
        // count child if value is even 
        if (child.val % 2 === 0) count++;
        // if it has children
        if (child.children.length > 0){
          // recurse with child root
          countEvensHelper(child);
        }
      }
    }

    countEvensHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function countEvensHelper(node){
      // go through all of children
      for (let child of node.children){
        // count child if the value is greater than lowerBound
        if (child.val > lowerBound) count++;
        // if it has children
        if (child.children.length > 0){
          // recurse with child root
          countEvensHelper(child);
        }
      }
    }
    countEvensHelper(this.root);
    return count
  }
}

module.exports = { Tree, TreeNode };
