/** GLOBAL COMMON FUNCTIONS HERE IN index.js */

const index = module.exports = {};
 
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
index.ListNode = ListNode;

/**
 * @class LinkedList
 * @method add
 * @method addAtLast
 * @method getAll
 * @method bulkAdd
 * @property node
 * @property size
 */
index.LinkedList = function () {

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

    while (curr.next) {
      curr = curr.next;
    }

    let dummy = new ListNode();
    dummy.val = val

    curr.next = dummy

    this.size++;
  }

  this.getAll = () => {

    let curr = this.node;
    while (curr.next) {
      console.log(curr.val);
      curr = curr.next;
    }
    console.log(curr.val);
  }

  this.bulkAdd = (valArray = []) => {
    for (let index = 0; index < valArray.length; index++) {
      this.add(valArray[index])
    }
  }

}