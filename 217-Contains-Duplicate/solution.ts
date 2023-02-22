/**
 * Hash Set
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {Array<number>} nums
 * @return {boolean}
 */
export function containsDuplicateUsingHashSet(nums: Array<number>): boolean {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else return true;
  }
  return false;
}

/**
 * Hash Object
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {Array<number>} nums
 * @return {boolean}
 */
export function containsDuplicateUsingHashObject(nums: Array<number>): boolean {
  const val: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const curVal = nums[i];
    if (val[curVal] !== undefined) {
      return true;
    }
    val[curVal] = curVal;
  }
  return false;
}


/**
 * Hash Map
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {Array<number>} nums
 * @return {boolean}
 */
export function containsDuplicateUsingHashMap(nums: Array<number>): boolean {
  const seen = new Map();

  for (let num = 0; num < nums.length; num++) {
     if (seen.has(nums[num])) return true;
     seen.set(nums[num], nums[num]);
  }

  return false;
}
