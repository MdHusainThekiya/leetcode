const Stack = function (val = null, childs = {}, min = null) {
  this.val = val;
  this.childs = childs;
  this.min = min;
}

var MinStack = function () {
  this.stack = new Stack();
  this.length = 0;
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function (val) {
  if (this.length === 0) {
    this.stack = new Stack(val);
    this.stack.min = val;
  } else {
    if (this.stack.min > val) {
      this.stack = new Stack(val, this.stack, val);
    } else {
      this.stack = new Stack(val, this.stack, this.stack.min);
    }
  }
  this.length++;
  return this.stack;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  if (this.length !== 0) {
    this.stack = this.stack.childs;
    this.length--;
    return true;
  }
  return false;
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.stack.val;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.stack.min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/