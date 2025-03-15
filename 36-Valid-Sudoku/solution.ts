/**
 * Arrays / sets
 * Time O(1) | Space O(1)
 * https://leetcode.com/problems/valid-sudoku/
 */
function isValidSudokuWithArray(board: string[][]): boolean {
  const rows = Array.from({ length: 9 }, () => new Set<string>());
  const columns = Array.from({ length: 9 }, () => new Set<string>());
  const boxes = Array.from({ length: 9 }, () => new Set<string>());

  // Iterate rows.
  for (let i = 0; i < 9; i++) {
    // Iterate columns.
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === ".") continue;

      const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);

      if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) {
        // Duplicated num found.
        return false;
      }

      rows[i].add(num);
      columns[j].add(num);
      boxes[boxIndex].add(num);
    }
  }

  return true;
}

/**
 * Set
 * Time O(1) | Space O(1)
 * https://leetcode.com/problems/valid-sudoku/
 */
function isValidSudoku(board: string[][]): boolean {
  // validate rows
  for (let i = 0; i < 9; i++) {
    const rowNums = new Set();
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      if (rowNums.has(num)) return false;
      else if (num !== ".") rowNums.add(num);
    }
  }

  // validate columns
  for (let i = 0; i < 9; i++) {
    const columnNums = new Set();
    for (let j = 0; j < 9; j++) {
      const num = board[j][i];

      if (columnNums.has(num)) return false;
      else if (num !== ".") columnNums.add(num);
    }
  }
  const boxStarts: [number, number][] = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6],
  ];

  // validate sub-boxes
  for (const [squareRow, squareColumn] of boxStarts) {
    const boxNums = new Set();

    for (let row = squareRow; row < squareRow + 3; row++) {
      for (let col = squareColumn; col < squareColumn + 3; col++) {
        const num = board[row][col];
        if (boxNums.has(num)) return false;
        else if (num !== ".") boxNums.add(num);
      }
    }
  }

  return true;
}

// Chad solution
// Too dumb to come up with this :(
function isValidSudokuCHAD(board: string[][]): boolean {
  let rows = new Uint16Array(9);
  let cols = new Uint16Array(9);
  let boxes = new Uint16Array(9);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === ".") continue;

      let bit = 1 << (+num - 1); // Convert num to bitmask
      let boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);

      if (rows[i] & bit || cols[j] & bit || boxes[boxIndex] & bit) {
        return false; // Duplicate found
      }

      rows[i] |= bit;
      cols[j] |= bit;
      boxes[boxIndex] |= bit;
    }
  }

  return true;
}
