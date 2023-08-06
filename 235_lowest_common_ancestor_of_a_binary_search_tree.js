/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function (root, p, q) {
//   let val = false;
//   let Level = 0;

//   let exec = (root, p, q, level) => {
//     if (root) {
//       console.log(root.val, "level", level)
//       if (root === p) { // p is root
//         console.log("p- is root", p, root.val)
//         if (root.left && root.left && root.left === q) {
//           return p;
//         } else if (root.right && root.right && root.right === q) {
//           return p;
//         }
//         if (level < Level || Level === 0) {
//           console.log('level p', level, p.val)
//           val = p;
//           Level = level;
//         }
//       }
//       if (root === q) { // q is root
//         console.log("q is root", q, root.val)
//         if (root.left && root.left && root.left === p) {
//           return q;
//         } else if (root.right && root.right && root.right === p) {
//           return q;
//         }
//         if (level < Level || Level === 0) {
//           console.log('level q', level, q.val)
//           val = q;
//           Level = level;
//         }
//       }
//       if (root &&
//         (root.left && root.left === p &&
//           root.right && root.right === q) ||
//         (root.left && root.left === q &&
//           root.right && root.right === p)) { // p & q is exist in eighter sides
//         console.log("root.left.val", root.left.val)
//         console.log("root.right.val", root.right.val)
//         console.log('p', p);
//         console.log('q', q);
//         return root
//       }
//       if (root.left && ((root.left === p && root.left.left && root.left.left !== q && root.left.right && root.left.right !== q)  || (root.left === q && root.left.left && root.left.left !== p && root.left.right && root.left.right !== p))) {
//         if (level < Level || Level === 0) {
//           val = root.left;
//           Level = level;
//         }
//       }
//       if (root.right && ((root.right === p && root.right.left && root.right.left !== q && root.right.right && root.right.right !== q)  || (root.right === q && root.right.left && root.right.left !== p && root.right.right && root.right.right !== p))) {
//         if (level < Level || Level === 0) {
//           val = root.right;
//           Level = level;
//         }
//       }

//       console.log('in else', p, q, root.val);
//       let leftResult = false;
//       let rightResult = false;
//       if (root.left) {
//         console.log('in else left', p, q, root.val, root.left.val, level);
//         console.log(">>>>>",level);
//         level = level + 1
//         console.log("<<<<<",level);
//         leftResult = exec(root.left, p, q, level);
//       }
//       if (root.right) {
//         console.log('in else right', p, q, root.val, root.right.val, level);
//         console.log(">>>>>",level);
//         level = level + 1
//         console.log("<<<<<",level);
//         rightResult = exec(root.right, p, q, level);
//       }

//       return leftResult || rightResult;
//     }
//     return false;
//   }

//   let res = exec(root, p, q, 1);

//   if (!res) {
//     return val;
//   } else {
//     return res;
//   }

// };

var lowestCommonAncestor = function (root, p, q) {
  // If the value of root node is greater than the value of p node and less than the value of q node...
  if (root.val > p.val && root.val < q.val) {
    return root;
  }
  // If the value of p node and the q node is less than the value of root node...
  else if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // If the value of p node and the q node is greater than the value of root node...
  else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};