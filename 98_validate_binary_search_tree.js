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
var isValidBST = function(root) {
    
  if (root) {
      let left = false;
      let right = false;
      if (root.left) {
          if (root.left.val < root.val){
              left = isValidBST(root.left);
          } else {
              left = false;
          }
      } else {
          left = true;
      }
      console.log("left", left)
      if (root.right) {
          if (root.right.val > root.val){
              right = isValidBST(root.right);
          } else {
              right = false;
          }
      } else {
          right = true;
      }
      console.log("right", right)
      if (left && right) {
          return true;
      } else {
          return false;
      }
  } else {
      return true;
  }

};