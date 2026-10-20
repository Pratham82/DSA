package main

import (
	"fmt"
	"math"
)

func secondLargestElement(nums []int) int {
	max := math.MinInt
	secondMax := math.MinInt

	for _, v := range nums {
		if v > max {
			secondMax = max
			max = v
		} else if v > secondMax && v != max {
			secondMax = v
		}
	}

	if secondMax == math.MinInt {
		return -1
	}
	return secondMax
}

func main() {
	arr := []int{3, 2, 1, 5, 2}
	arr2 := []int{10, 10, 10, 10, 10}
	arr3 := []int{8, 8, 7, 6, 5}

	fmt.Println(secondLargestElement(arr))
	fmt.Println(secondLargestElement(arr2))
	fmt.Println(secondLargestElement(arr3))
}
