var HashMap = function (hash = "", timestamp = "", value = "") {
  this.hash = hash;
  this.timestamp = timestamp;
  this.value = value;
}

var TimeMap = function () {
  this.map = {};
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) this.map[key] = []
  this.map[key].push([value, timestamp]);
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function (key, timestamp) {
  const arr = this.map[key] || [];

  let [l, r] = [0, arr.length - 1];
  let res = "";
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const [v, t] = arr[mid];
    if (timestamp === t) return v;
    if (timestamp >= t) {
      l = mid + 1;
      res = v;
    } else r = mid - 1;

  }
  return res;
};


/**  
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/