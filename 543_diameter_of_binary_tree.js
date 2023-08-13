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
var diameterOfBinaryTree = function (root) {

  const dfs = (root) => {

    if (!root) {
      return [0, 0];
    }

    let [maxInLeft, heightOfLeft] = dfs(root.left);
    let [maxInRight, heightOfRight] = dfs(root.right);

    let maxAtThisNode = heightOfLeft + heightOfRight;
    if (maxInLeft > maxAtThisNode) {
      maxAtThisNode = maxInLeft;
    }
    if (maxInRight > maxAtThisNode) {
      maxAtThisNode = maxInRight;
    }


    return [maxAtThisNode, 1 + Math.max(heightOfLeft, heightOfRight)]

  }

  return dfs(root)[0];

};