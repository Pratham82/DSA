package main

import "fmt"

func linearSearch(nums []int, target int) int {
	//your code goes here
	index := -1
	for i := range nums {
		if nums[i] == target {
			index = i
			return index
		}
	}
	return index
}

func main() {
	fmt.Println(linearSearch([]int{2, 5, 3, 5}, 5))
	fmt.Println(linearSearch([]int{1, 2, 3}, 9))
}
