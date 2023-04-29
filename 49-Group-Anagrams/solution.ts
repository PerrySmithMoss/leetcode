/**
 * Hash Table
 * Time is O(n k log k) | Space O(n)
 * https://leetcode.com/problems/group-anagrams
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs: string[]): string[][] {
  const hash: { [key: string]: string[] } = {};

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const sortedWord = word.split("").sort().join("");

    if (!hash[sortedWord]) {
      hash[sortedWord] = [word];
    } else {
      hash[sortedWord].push(word);
    }
  }
  return Object.values(hash);
}
