package main

import (
	"fmt"
)

func findMaxConsecutiveOnes(nums []int) int {
	currentStreak := 0
	maxConsecutiveCount := 0

	for i := range nums {
		if nums[i] == 1 {
			currentStreak++
			if currentStreak > maxConsecutiveCount {
				maxConsecutiveCount = currentStreak
			}
		} else {
			currentStreak = 0
		}
	}

	return maxConsecutiveCount
}

func main() {
	arr := []int{1, 1, 0, 0, 1, 1, 1, 0}
	arr2 := []int{0, 0, 0, 0, 0, 0, 0, 0}
	arr3 := []int{1}

	fmt.Println(findMaxConsecutiveOnes(arr))
	fmt.Println(findMaxConsecutiveOnes(arr2))
	fmt.Println(findMaxConsecutiveOnes(arr3))
}
