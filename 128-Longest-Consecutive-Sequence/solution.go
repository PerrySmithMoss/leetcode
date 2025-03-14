package main

func longestConsecutive(nums []int) int {
	intSet := make(map[int]struct{}, len(nums))

	for _, num := range nums {
		if _, exists := intSet[num]; !exists {
			intSet[num] = struct{}{}
		}
	}

	longest := 0
	for num := range intSet {
		if _, exists := intSet[num-1]; !exists {
			length := 0
			for _, nextNumExists := intSet[num+length]; nextNumExists; _, nextNumExists = intSet[num+length] {
				length++
			}
			longest = max(longest, length)
		}
	}

	return longest
}
