package solutions

func romanToInt(s string) int {
	m := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	total := 0
	n := len(s)

	for i := 0; i < n; i++ {
		if i < n-1 && m[s[i]] < m[s[i+1]] {
			total -= m[s[i]]
			continue
		}

		total += m[s[i]]
	}

	return total
}
