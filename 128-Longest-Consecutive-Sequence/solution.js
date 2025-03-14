/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const uniq = new Set(nums);
  let longest = 0;

  for (const num of uniq) {
    if (!uniq.has(num - 1)) {
      let length = 0;
      while (uniq.has(num + length)) length += 1;
      longest = Math.max(longest, length);
    }
  }

  return longest;
};
