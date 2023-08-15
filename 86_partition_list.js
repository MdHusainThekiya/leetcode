/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {

  if (!head) {
    return head;
  }

  let listOfLessList = [];
  let listOfGratorButBefore = [];
  let listOfEqual = [];
  let listOfRemaining = [];
  let isXpassed = false;
  let dummyHead = new ListNode();
  dummyHead = head;
  while(dummyHead) {
    if (dummyHead.val < x) {
      listOfLessList.push(dummyHead.val);
    } else if (!isXpassed && dummyHead.val === x) {
      isXpassed = true;
      listOfEqual.push(dummyHead.val);
    } else if (!isXpassed && dummyHead.val > x) {
      listOfGratorButBefore.push(dummyHead.val);
    } else {
      listOfRemaining.push(dummyHead.val);
    }
    dummyHead = dummyHead.next;
  }

  dummyHead = null;
  const commonSetter = (mapKey) => {
    if (!dummyHead || (!dummyHead.val && dummyHead.val !== 0)) {
      dummyHead = new ListNode();
      dummyHead.val = mapKey;
    } else {
      let newDummy = dummyHead;
      while(newDummy.next) {
        newDummy = newDummy.next;
      }
      newDummy.next = new ListNode();
      newDummy.next.val = mapKey
    }
  }

  listOfLessList.forEach((mapKey) => {
    commonSetter(mapKey);
  })
  listOfGratorButBefore.forEach((mapKey) => {
    commonSetter(mapKey);
  })
  listOfEqual.forEach((mapKey) => {
    commonSetter(mapKey);
  })
  listOfRemaining.forEach((mapKey) => {
    commonSetter(mapKey);
  })

  return dummyHead;
};