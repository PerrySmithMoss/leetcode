/**
 * Hash Table with UNI
 * Time is O(n * k) | Space O(n * K)
 * https://leetcode.com/problems/group-anagrams
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs: string[]): string[][] {
  const hash: Record<string, string[]> = {};

  for (const word of strs) {
    const count: number[] = new Array(26).fill(0);

    for (let i = 0; i < word.length; i++) {
      const charIndex = word.charCodeAt(i) - "a".charCodeAt(0);
      count[charIndex]++;
    }

    const key = count.toString();

    if (!hash[key]) {
      hash[key] = [];
    }
    hash[key].push(word);
  }

  return Object.values(hash);
}

/**
 * Hash Table
 * Time is O(n k log k) | Space O(n)
 * https://leetcode.com/problems/group-anagrams
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagramsWithSort(strs: string[]): string[][] {
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
