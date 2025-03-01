package main

import "fmt"

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	counts := make(map[rune]int)

	for _, char := range s {
		counts[char]++
	}
	for _, char := range t {
		counts[char]--
	}

	for _, count := range counts {
		if count != 0 {
			return false
		}
	}

	return true
}

func isAnagramTwoMaps(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	sM := make(map[rune]int)
	tM := make(map[rune]int)

	for _, char := range s {
		sM[char]++
	}

	for _, char := range t {
		tM[char]++
	}

	for key, value := range sM {
		if tM[key] != value {
			return false
		}
	}

	return true
}

func main() {
	// Example strings
	s := "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
	t := "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbba"

	fmt.Println(isAnagram(s, t))
}
