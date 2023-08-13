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
 * @return {boolean}
 */
var isBalanced = function (root) {

  const dfs = (root) => {

    if (!root) {
      return [true, 0];
    }

    let [leftBalanced, leftHeight = 0] = dfs(root.left);
    let [rightBalanced, rightHeight = 0] = dfs(root.right);

    let isTreeBalanced = leftBalanced && rightBalanced && (Math.abs(leftHeight - rightHeight) <= 1) || false;

    let returnArr = [isTreeBalanced, (1 + Math.max(leftHeight, rightHeight))]
    console.log('root.val', root.val, 'returnArr', returnArr, [leftBalanced, leftHeight], [rightBalanced, rightHeight])
    return returnArr;
  }

  return dfs(root)[0];

};