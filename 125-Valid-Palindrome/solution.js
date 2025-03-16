/**
 * My original solution... Mehh...
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftChar = s[left].toLowerCase();
    const leftCharCode = leftChar.charCodeAt(0);
    const rightChar = s[right].toLowerCase();
    const rightCharCode = rightChar.charCodeAt(0);
    const isLeftAlphaNumeric =
      (leftCharCode >= 97 && leftCharCode <= 122) ||
      (leftCharCode >= 48 && leftCharCode <= 57);
    const isRightAlphaNumeric =
      (rightCharCode >= 97 && rightCharCode <= 122) ||
      (rightCharCode >= 48 && rightCharCode <= 57);

    if (!isLeftAlphaNumeric) {
      left++;
      continue;
    } else if (!isRightAlphaNumeric) {
      right--;
      continue;
    } else if (leftCharCode !== rightCharCode) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

/**
 * Improved solution
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeImproved = function (s) {
  if (s.length === 0 || s.length === 1) return true;

  let left = 0,
    right = s.length - 1;

  while (left < right) {
    let leftCode = s.charCodeAt(left);
    let rightCode = s.charCodeAt(right);

    // Skip non-alphanumeric characters
    while (left < right && !isAlphaNumeric(leftCode)) {
      left++;
      leftCode = s.charCodeAt(left);
    }
    while (left < right && !isAlphaNumeric(rightCode)) {
      right--;
      rightCode = s.charCodeAt(right);
    }

    if (toLower(leftCode) !== toLower(rightCode)) return false;

    left++;
    right--;
  }

  return true;
};

// Check if the character code is alphanumeric
function isAlphaNumeric(code) {
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

// Convert uppercase letters to lowercase using bitwise OR
function toLower(code) {
  return code | 32;
}
