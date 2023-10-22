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


const {LinkedList} = require('./index.js');

let linkedList = new LinkedList();
let array = [1,1,2,3,3];
for (let index = 0; index < array.length; index++) {
  linkedList.add(array[index]);
}

console.log(deleteDuplicates(linkedList));