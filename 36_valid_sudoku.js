/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

  let hashMap = {};
  let threeMap = {};

  let threeRowCounter = 1;

  for (let row = 0; row < board.length; row++) {

    let threeColumnCounter = 1;

    for (let column = 0; column < board[row].length; column++) {

      if (board[row][column] !== ".") {

        let tempVal = hashMap[board[row][column]];

        if (!Array.isArray(tempVal)) {
          hashMap[board[row][column]] = [[row,column]];
        } else {

          for(let i = 0; i < tempVal.length; i++) {
            let [tRow, tColumn] = tempVal[i];
            if (tRow == row || tColumn == column) {
              return false;
            }
          }

          hashMap[board[row][column]].push([row,column]);

        }

        if (threeMap[`${threeRowCounter}${threeColumnCounter}`]) {
          if (threeMap[`${threeRowCounter}${threeColumnCounter}`].has(board[row][column])) {
            return false;
          }
        } else {
          threeMap[`${threeRowCounter}${threeColumnCounter}`] = new Set();
        }

        threeMap[`${threeRowCounter}${threeColumnCounter}`].add(board[row][column]);

      }

      if ((column + 1) % 3 === 0) {
        threeColumnCounter++;
      }

    }

    if ((row + 1) % 3 === 0) {
      threeRowCounter++;
    }

  }

  return true;
};