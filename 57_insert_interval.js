/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {

  // if length is 0
  if (intervals.length === 0) {
    return [newInterval];
  }

  // if new interval is at bigginning
  if (newInterval[1] < intervals[0][0]) {
    intervals.unshift(newInterval);
    return intervals;
  }

  // if new inerval is at end
  if (newInterval[0] > intervals[intervals.length - 1][1]) {
    intervals.push(newInterval);
    return intervals;
  }

  let isMergedPending = true;
  let finalIntervals = [];

  for (let index = 0; index < intervals.length; index++) {
    const currInterval = intervals[index];

    if (newInterval[1] < currInterval[0] && isMergedPending) {
      finalIntervals.push(newInterval);
      finalIntervals.push(currInterval);
      isMergedPending = false;
    } else if (newInterval[1] >= currInterval[0] && newInterval[0] < currInterval[0] && newInterval[1] <= currInterval[1] && isMergedPending) {
      newInterval[1] = currInterval[1];
    } else if (newInterval[1] >= currInterval[0] && newInterval[0] < currInterval[0] && newInterval[1] > currInterval[1] && isMergedPending) {
      continue;
    } else if (newInterval[1] >= currInterval[0] && newInterval[1] <= currInterval[1] && newInterval[0] >= currInterval[0] && newInterval[0] <= currInterval[1] && isMergedPending) {
      newInterval[1] = currInterval[1];
      newInterval[0] = currInterval[0];
    } else if (newInterval[1] >= currInterval[0] && newInterval[0] >= currInterval[0] && newInterval[0] <= currInterval[1] && isMergedPending) {
      newInterval[0] = currInterval[0];
    } else if (newInterval[1] >= currInterval[0] && newInterval[0] > currInterval[1] && isMergedPending) {
      finalIntervals.push(currInterval);
    } else if (newInterval[1] < currInterval[0] && !isMergedPending) {
      finalIntervals.push(currInterval);
    } else if (newInterval[1] >= currInterval[0] && newInterval[1] <= currInterval[1] && isMergedPending) {
      newInterval[1] = currInterval[1]
    }
  }

  if (isMergedPending) {
    finalIntervals.push(newInterval)
  }

  return finalIntervals;

};