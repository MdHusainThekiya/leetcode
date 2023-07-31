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
var middleNode = function (head) {
  /* first solution using hashmap*/
  // if (!head || !head.next) {
  //     return head
  // }
  // let hashmap = {};
  // let counter = 1;
  // while( head.val ) {
  //     hashmap[counter] = head
  //     if (!head || !head.next) {
  //         break
  //     }
  //     head = head.next
  //     counter++;
  // }
  // if (counter % 2 === 0) { // even
  //     counter = counter/2 + 1
  // } else { // odd
  //     counter = Math.ceil(counter/2);
  // }
  // return hashmap[counter]


  /* two pointer method */
  let twice = head;
  let once = head;
  while (twice && twice.next) {
    twice = twice.next.next;
    once = once.next
  }
  return once
};