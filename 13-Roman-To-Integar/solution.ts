function romanToInt(s: string): number {
  const numeralVals: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let prevVal = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const curChar = s[i];
    const curVal = numeralVals[curChar];

    if (curVal < prevVal) {
      sum -= curVal;
    } else {
      sum += curVal;
    }

    prevVal = curVal;
  }

  return sum;
}

function romanToIntLeftToRight(s: string): number {
  const numeralVals = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const curVal = numeralVals.get(s[i])!;
    const nextVal = numeralVals.get(s[i + 1]) ?? 0;

    if (curVal < nextVal) {
      sum -= curVal;
    } else {
      sum += curVal;
    }
  }

  return sum;
}
