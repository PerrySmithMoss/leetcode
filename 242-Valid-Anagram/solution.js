/**
 * 😍 This is naughty solution!
 * This GIF shares my expression - https://media.tenor.com/5lLcKZgmIhgAAAAM/american-psycho-patrick-bateman.gif
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  return count.every((c) => c === 0);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramUsingMap = function (s, t) {
  if (s.length !== t.length) return false;

  const m = new Map();

  for (const char of s) {
    if (m.has(char)) {
      m.set(char, m.get(char) + 1);
    } else {
      m.set(char, 1);
    }
  }

  for (const char of t) {
    const charVal = m.get(char);

    if (charVal === undefined || charVal === 0) {
      return false;
    }

    m.set(char, charVal - 1);
  }

  return true;
};
