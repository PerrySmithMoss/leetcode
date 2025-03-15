## 36. Valid Sudoku

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

##### Example 1:

> **Input:** board =
> [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

> **Output**: `true`

##### Example 2:

> **Input:** [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]] > **Output:** `false` > **Explination:** Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

###### Contraints:

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j] is a digit 1-9 or '.'`

## Solution

For this solution we initialise three arrays containing sets, one to store the row numbers, one to store the column numbers and one to store the sub-boxes numbers. Next we iterate through the nine rows and nine columns. If we encounter an empty value (`"."`) we simply continue to the next value. Next we calculate the boxIndex. The box index is used to map each cell to one of the 9 subgrids (3x3 boxes) in the Sudoku board. The calculations are as follows:

- `Math.floor(i / 3)` calculates the row group.
- `Math.floor(j / 3)` calculates the column group.
- Multiplying the row group by 3 and adding the column group gives a unique index between 0 and 8 for the 9 subgrids.

If our `rows`, `columns` or `boxes` contain the current `num` we know it's a duplicate any we can simply return `false`. Otherwise, we add the `num` and it's relevant index to it's respected data structure (`rows`, `columns` or `boxes`).

If we finish iterating through the Sudoku board and haven't returned `false` at any point we know it's a valid Sudoku board and we simply return `true`.

##### Complexity

- Time O(81) > O(1)
- Space O(27) > O(1)

##### Code

```typescript
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
```

```go
func isValidSudoku(board [][]byte) bool {
	// Create arrays to track numbers seen in rows, columns, and squares
	// Each array has size 9, with indices 0-8 representing numbers 1-9
	var rows [9][9]bool
	var columns [9][9]bool
	var squares [9][9]bool

	for row := 0; row < 9; row++ {
		for col := 0; col < 9; col++ {
			num := board[row][col]

			if num == '.' {
				continue
			}

			// Convert the character to an integer (1-9)
			numVal := num - '1' // '1' -> 0, '2' -> 1, ..., '9' -> 8

			// Calculate the index for the 3x3 sub-grid (box)
			boxIndex := (row/3)*3 + col/3

			// Check if the number has already been seen in the row, column, or square
			if rows[row][numVal] || columns[col][numVal] || squares[boxIndex][numVal] {
				return false // Duplicate found
			}

			// Mark the number as seen in the row, column, and square
			rows[row][numVal] = true
			columns[col][numVal] = true
			squares[boxIndex][numVal] = true
		}
	}

	return true
}
```
