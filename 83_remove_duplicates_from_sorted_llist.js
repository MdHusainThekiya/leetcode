/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {

  if (!head || !head.next) {
    return head;
  }

  let tHead = head;

  while (tHead && tHead.next) {
    if (tHead.val === tHead.next.val) {
      tHead.next = tHead.next.next
    } else {
      tHead = tHead.next
    }
  }

  return head;
};

const {LinkedList} = require('./index');
console.log(deleteDuplicates(new LinkedList().bulkAdd([1,1,2,3,3])));