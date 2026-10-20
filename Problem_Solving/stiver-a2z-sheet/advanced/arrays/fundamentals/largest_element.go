package main

import "fmt"

func largestElement(nums []int) int {
	max := nums[0]

	for _, v := range nums {
		if v > max {
			max = v
		}
	}

	return max
}

func main() {
	fmt.Println(largestElement([]int{3, 2, 1, 5, 2}))
	fmt.Println(largestElement([]int{-4, -1, -9}))
}
