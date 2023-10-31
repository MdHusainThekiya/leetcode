var HashMap = function (hash = "", timestamp = "", value = "") {
  this.hash = hash;
  this.timestamp = timestamp;
  this.value = value;
}

var TimeMap = function () {
  this.map = {};
  this.arr = {};
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function (key, value, timestamp) {
  if (typeof key !== 'string'
    || typeof value !== 'string'
    || typeof timestamp !== 'number') {
    return false;
  }

  if (!this.map[key] || typeof this.map[key] !== 'object') {
    this.map[key] = {};
  }
  this.map[key][timestamp] = value;

};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function (key, timestamp) {

  let first = this.map[key] && this.map[key][timestamp] || "";

  if (first && first !== "") {
    return first
  }

  let timeStampArray = Object.keys(this.map[key] || {});

  if (timeStampArray <= 0) {
    return first
  }



  if (timeStampArray[timeStampArray.length - 1] < timestamp) {
    return this.map[key][timeStampArray[timeStampArray.length - 1]] || "";
  }

  for (let i = 0; i < timeStampArray.length; i++) {
    if (timeStampArray[i] < timestamp && timestamp < timeStampArray[i + 1]) {
      return this.map[key][timeStampArray[i]] || "";
    }
  }

  return "";

  // let leftPointer = 0;
  // let rightPointer = timeStampArray.length - 1;

  // let tTimeStamp = getBinarySearchedTimestamp(timeStampArray, leftPointer, rightPointer, timestamp);

  // console.log("tTimeStamp", key, tTimeStamp, this.map[key], this.map[key][tTimeStamp])

  // return this.map[key][tTimeStamp] || "";
};

// let getBinarySearchedTimestamp = (timeStampArray, leftPointer, rightPointer, timestamp) => {

//     console.log(timeStampArray, leftPointer, rightPointer, timestamp);

//     if (rightPointer - leftPointer <= 1) {
//         console.log(parseInt(timeStampArray[leftPointer]) < timestamp && timestamp < parseInt(timeStampArray[rightPointer]))
//         if (parseInt(timeStampArray[leftPointer]) < timestamp && timestamp < parseInt(timeStampArray[rightPointer])) {
//             return timeStampArray[leftPointer]
//         } else if (parseInt(timeStampArray[rightPointer]) < timestamp) {
//             return timeStampArray[rightPointer]
//         } else {
//             return "";
//         }
//     }

//     let midPointer = Math.ceil((rightPointer + leftPointer) / 2);

//     if (midPointer === leftPointer) {

//         if (parseInt(timeStampArray[midPointer]) < timestamp && parseInt(timeStampArray[midPointer+ 1]) > timestamp) {
//             return timeStampArray[midPointer]
//         }

//     } else if (midPointer === rightPointer) {
//         if (timestamp < parseInt(timeStampArray[midPointer]) && timestamp > parseInt(timeStampArray[midPointer- 1])) {
//             return timeStampArray[midPointer- 1]
//         }
//     } else {
//         if (parseInt(timeStampArray[midPointer]) < timestamp){
//             rightPointer = midPointer
//         } else if (parseInt(timeStampArray[midPointer]) > timestamp) {
//             leftPointer = midPointer
//         } else {
//             console.log("here in else")
//         }

//     }

//     getBinarySearchedTimestamp(timeStampArray, leftPointer, rightPointer, timestamp);

// }

/**  
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/