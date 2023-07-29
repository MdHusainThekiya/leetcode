/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let hashmap = new Map();
  while (head && head.next) {
    if (hashmap.get(head)) {
      return true;
    }
    hashmap.set(head, true);
    head = head.next
  }
  return false;
};