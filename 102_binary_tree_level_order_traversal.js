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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const hashMap = {};
  recurse(root, hashMap, 1);
  return Object.values(hashMap);
};
var recurse = (root, hashMap, level) => {
  if (root) {
    if (Array.isArray(hashMap[level])) {
      hashMap[level].push(root.val);
    } else {
      hashMap[level] = [root.val]
    }
    if (root.left) {
      recurse(root.left, hashMap, level + 1);
    }
    if (root.right) {
      recurse(root.right, hashMap, level + 1);
    }
  }
}