/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const m = new Map();

  for (let i = 0; i < strs.length; i++) {
    const curWord = strs[i];
    const sortedWord = curWord.split("").sort().join("");

    if (!m.has(sortedWord)) {
      m.set(sortedWord, [curWord]);
    } else {
      m.get(sortedWord).push(curWord);
    }
  }

  return Array.from(m.values());
};
