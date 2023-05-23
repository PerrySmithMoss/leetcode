/**
 * Hash Map
 * Time is O(log(n)) | Space O(1)
 * https://leetcode.com/problems/integer-to-roman/description/
 *
 * @param {number} num
 * @return {string}
 */
function intToRoman(num: number): string {
  let res = "";

  for (const numeral in numerals) {
    const value = numerals[numeral];
    while (num >= value) {
      num -= value;
      res += numeral;
    }
  }

  return res;
}

const numerals: { [key: string]: number } = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
