/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
  let monoStack = [];
  let twoD = [];

  for(let i=0; i < position.length; i++) {
    twoD.push([position[i], speed[i]]);
  }

  twoD = twoD.sort((a,b) => {
    if (a[0] > b[0]) {
      return -1
    } else if (a[0] < b[0]) {
      return 1
    } else {
      return 0
    }
  })
  
  for(let i=0; i < twoD.length; i++) {
    let [position, speed] = twoD[i];
    let time = (target - position) / speed;
    if (monoStack.length > 0 && time <= monoStack[monoStack.length - 1]) {
      continue;
    } else {
      monoStack.push(time);
    }
  }

  return monoStack.length

};