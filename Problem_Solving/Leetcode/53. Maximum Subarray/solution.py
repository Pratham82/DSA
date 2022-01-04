"""
Brute force approach O(n^2) time limit exceeded

Steps:
1. There wil be 2 loops basically, the outer loop will starts from 0 to the end of array, inner loop will start from the starting point of the outer loop and runs till end of the array.

Eg. 
outer loop 
  i = 0 - end of array
    inner loop
      j = i -  end of array
2. Keep track current sum of values which takes sum of inner loop, from j - end of array, Initialize in the outerloop.
3. Compare the current sum with maximum sum, if current sum is higher then replace current sum with higher sum
4. In the end return maxSum value
"""

# def maxSubarray(nums):
#   maxSum = nums[0]
#   for i in range(len(nums)):
#     # currentSumValues =[]
#     currentSum = 0
#     for j in range(i, len(nums)):
#       # currentSumValues.append(nums[j])
#       currentSum += nums[j]
#       if currentSum > maxSum:
#         maxSum = currentSum
  
#   return maxSum
  

"""
O(n) Solution

Here we will be iterating over the array only once, and while iterating keeping the sum of values in currentSum, at any point of time currentSum becomes < than 0, reinitialize currentSum with 0 else keep addding current sum and compare it with max sum. In end return maxSum

Steps:
1. Initiate maxSum with first element in array, and currentSum with 0
2. Loop over over the array
3. If the the currentSum is -ve i.e < than 0, then reassign currentSum to 0
4. Keep adding the value of next elements in currentSum
5. Check if the currentSum value is higher than maxSum, if it is then reassign maxSum to currentSum's value
6. Return maxSum 
"""

def maxSubarray(nums):
  maxSum = nums[0]
  currentSum = 0
  for i in nums:
    if currentSum < 0:
      currentSum = 0
    currentSum += i
    if currentSum > maxSum:
      maxSum = currentSum

  return maxSum

print(maxSubarray([5,4,-1,7,8]))
print(maxSubarray([-1]))
print(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))
