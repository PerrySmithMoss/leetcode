/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Map();
  const cols = new Map();
  const squares = new Map();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = board[r][c];

      if (num === ".") continue; // Skip empty cells

      const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

      // Initialize Sets if they don't exist
      if (!rows.has(r)) rows.set(r, new Set());
      if (!cols.has(c)) cols.set(c, new Set());
      if (!squares.has(squareKey)) squares.set(squareKey, new Set());

      // Check for duplicate numbers
      if (
        rows.get(r)?.has(num) ||
        cols.get(c)?.has(num) ||
        squares.get(squareKey)?.has(num)
      ) {
        return false;
      }

      // Store the number in the corresponding row, col, and square
      rows.get(r).add(num);
      cols.get(c).add(num);
      squares.get(squareKey).add(num);
    }
  }

  return true;
};

const tCase = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(tCase));
