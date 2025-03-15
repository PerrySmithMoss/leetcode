package main

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
