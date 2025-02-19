function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let otherHalf = 0;

  while (x > otherHalf) {
    otherHalf = otherHalf * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }

  return x === otherHalf || x === Math.trunc(otherHalf / 10);
}
