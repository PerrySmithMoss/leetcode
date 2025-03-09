package main

func productExceptSelf(nums []int) []int {
	res := make([]int, len(nums))

	// calculate the product of numbers to the left of nums[i]
	prefix := 1
	for idx, val := range nums {
		res[idx] = prefix
		prefix *= val
	}

	// Although this value is used as a suffix, we assign it to
	// 'prefix' to optimize time and memory.
	prefix = 1

	// calculate the product of numbers to the right of nums[i]
	for i := len(nums) - 1; i >= 0; i-- {
		res[i] *= prefix
		prefix *= nums[i]
	}

	return res
}
