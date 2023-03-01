/**
 * JavaScript in-built methods
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
export function isPalindrome(s: string): boolean {
  let cleanString = s.toLowerCase().replace(/[^a-z\d]/gi, "");

  for (let i = 0, j = cleanString.length - 1; i < j; i++, j--) {
    if (cleanString[i] !== cleanString[j]) {
      return false;
    }
  }

  return true;
}

/**
 * JavaScript in-built methods
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
export function isPalindromeAlternative(s: string): boolean {
  let cleanString = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
  let reversedString = cleanString.split("").reverse().join("");
  return cleanString === reversedString;
}
