/**
 * Hash Map
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s: string, t: string): boolean {
  if (t.length !== s.length) return false;

  const sVals: { [key: string]: number } = {};
  const tVals: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    sVals[sChar] = sVals[sChar] + 1 || 1;
    tVals[tChar] = tVals[tChar] + 1 || 1;
  }

  for (let key in sVals) {
    if (sVals[key] !== tVals[key]) return false;
  }
  return true;
}
