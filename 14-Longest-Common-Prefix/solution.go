package main

import "strings"

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	prefix := strs[0]

	for i := 1; i < len(strs); i++ {
		for strings.Index(strs[i], prefix) != 0 {
			prefix = prefix[:len(prefix)-1]
			if prefix == "" {
				return ""
			}
		}
	}

	return prefix
}

func longestCommonPrefixV2(strs []string) string {
	prefix := strs[0]
	for _, word := range strs {
		i := 0
		for ; i < len(word) && i < len(prefix) && prefix[i] == word[i]; i++ {
		}
		prefix = prefix[:i]
	}
	return prefix
}
