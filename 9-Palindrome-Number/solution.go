package solutions

import "strconv"

// Half reverse of x
func isPalindrome(x int) bool {
	/* (x < 0) check if number is negative
	(x % 10 == 0) x modulus 10 returns the remainder of x / 10,
	mathematically if you divide any number by 10 it will return
	you the last digit of the int. We then check if this last
	number is equal to 0 and check that x is not equal to 0 because
	any number ending in 0 (except 0 itself) cannot be a palindrome
	unless it starts with 0 (which is not possible in an integer)
	*/
	if x < 0 || (x%10 == 0 && x != 0) {
		return false
	}

	otherHalf := 0
	for x > otherHalf {
		// x%10 extracts the last, second to last, third from last... digit
		// otherHalf*10 gives us the first, second, third... digit
		// we then add the first and second half to give us the
		otherHalf = otherHalf*10 + x%10

		// we then reduce x by dividing x by 10 (AKA removing the last digit)
		// and then keep reducing the last last digit till x is less than
		// the other half
		x /= 10
	}

	// The number is a palindrome if:
	// 1. otherHalf == x (even-length numbers)
	// 2. otherHalf/10 == x (odd-length numbers, ignoring middle digit)
	return x == otherHalf || x == otherHalf/10
}

// Full reverse of x
func isPalindromeFullReverse(x int) bool {
	if x < 0 || (x%10 == 0 && x != 0) {
		return false
	}

	original, reversed := x, 0

	for x > 0 {
		reversed = reversed*10 + x%10
		x /= 10
	}

	return original == reversed
}

// Recursive
func isPalindromeRecursive(x int) bool {
	if x < 0 || (x%10 == 0 && x != 0) {
		return false
	}
	return helper(x, 0)
}

func helper(x, reversed int) bool {
	if x == 0 {
		return reversed == 0
	}
	return helper(x/10, reversed*10+x%10)
}

// String Conversion
func isPalindromeStringConversion(x int) bool {
	if x < 0 {
		return false // Negative numbers are never palindromes
	}

	s := strconv.Itoa(x) // Convert integer to string

	left, right := 0, len(s)-1
	for left < right {
		if s[left] != s[right] {
			return false // Mismatch, not a palindrome
		}
		left++
		right--
	}
	return true
}
