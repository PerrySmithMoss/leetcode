package main

func twoSum(nums []int, target int) []int {
	m := make(map[int]int, len(nums))

	for i, num := range nums {
		if value, exists := m[target-num]; exists {
			return []int{i, value}
		}
		m[num] = i
	}
	return nil
}
