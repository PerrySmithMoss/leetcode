/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of s) {
    if (char in pairs) {
      stack.push(pairs[char]);
    } else {
      const match = stack.pop();
      if (char !== match) return false;
    }
  }

  return stack.length === 0;
};

console.log("isValid: ", isValid("()[]{}"));
