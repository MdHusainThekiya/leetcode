/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
    this.val = (val===undefined ? null : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

  /**
   * remove BELOW this when run on leetcode
   */
  list1 = list1.node;
  list2 = list2.node;
  /**
   * remove ABOVE this when run on leetcode
   */


  if (!list1 && !list2) {
    return list1
  } else if (!list1) {
    return list2
  } else if (!list2) {
    return list1
  }

  let curr = new LinkedList();

  while (list1 || list2) {

    if (list1 && list2) {

      if (list1.val <= list2.val) {

      curr.addAtLast(list1.val);
      list1 = list1.next;

      } else {

        curr.addAtLast(list2.val);
        list2 = list2.next;

      }

    } else if (list1 && !list2) {

      curr.addAtLast(list1.val);
      list1 = list1.next;

    } else if (!list1 && list2) {

      curr.addAtLast(list2.val);
      list2 = list2.next;

    }

  }

  return curr.node;

};

function LinkedList() {

  this.node = new ListNode();
  this.size = 0;

  this.add = (val) => {
    if (this.node.val === null) {
      this.node.val = val;
      this.size++;
    } else {
      let dummy = new ListNode();
      dummy.val = val;
      dummy.next = this.node;
      this.node = dummy;
      this.size++;
    }
  }

  this.addAtLast = (val) => {

    let curr = this.node;

    if (curr.val == null) {
      curr.val = val;
      return;
    }

    while(curr.next) {
      curr = curr.next;
    }

    let dummy = new ListNode();
    dummy.val = val

    curr.next = dummy

    this.size++;
  }

  this.getAll = () => {

    let curr = this.node;
    while(curr.next) {
      console.log(curr.val);
      curr = curr.next;
    }
    console.log(curr.val);
  }

}

let list1 = new LinkedList();
let list2 = new LinkedList();
list1.add(4);
list1.add(2);
list1.add(1);
list2.add(4);
list2.add(3);
list2.add(1);
mergeTwoLists(list1, list2);