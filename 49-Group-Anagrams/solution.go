package main

import (
	"sort"
	"strings"
)

// Time O(k * n)
// Time O(k * n)
func groupAnagrams(strs []string) [][]string {
	m := make(map[[26]int][]string, len(strs))

	for _, word := range strs {
		var count [26]int
		for i := 0; i < len(word); i++ {
			count[word[i]-'a']++
		}

		m[count] = append(m[count], word)
	}

	var anagrams [][]string
	for _, value := range m {
		anagrams = append(anagrams, value)
	}

	return anagrams
}

// Time O(k * n log n)
// Space O(k * n log n)
func groupAnagramsWithSort(strs []string) [][]string {
	m := make(map[string][]string, len(strs))

	for _, word := range strs {
		wordSlice := strings.Split(word, "")
		sort.Strings(wordSlice)
		sortedWord := strings.Join(wordSlice, "")

		m[sortedWord] = append(m[sortedWord], word)
	}

	var anagrams [][]string
	for _, value := range m {
		anagrams = append(anagrams, value)
	}

	return anagrams
}
