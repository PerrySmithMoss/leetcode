package solutions

func containsDuplicate(nums []int) bool {
	m := make(map[int]bool, len(nums))

	for i := 0; i < len(nums); i++ {
		_, ok := m[nums[i]]
		if ok {
			return true
		}
		m[nums[i]] = true
	}
	return false
}
