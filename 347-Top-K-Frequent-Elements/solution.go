package solutions

func topKFrequent(nums []int, k int) []int {
	freq := make(map[int]int, len(nums))

	for _, num := range nums {
		freq[num]++
	}

	count := make([][]int, len(nums)+1)

	for num, freq := range freq {
		count[freq] = append(count[freq], num)
	}

	res := make([]int, 0, k)

	for i := len(count) - 1; i >= 0; i-- {
		for _, num := range count[i] {
			res = append(res, num)
			if len(res) == k {
				return res
			}
		}
	}

	return res
}
