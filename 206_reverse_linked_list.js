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
var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }
  let reverseListNode = new ListNode();
  while(head && head.next) {
    reverseListNode.val = head.val;
    head = head.next
    let dummy = new ListNode();
    dummy.val = head.val;
    dummy.next = reverseListNode;
    reverseListNode = dummy;
  }
  return reverseListNode;
};