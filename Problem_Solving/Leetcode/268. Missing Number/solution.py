class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        for i in  range(0, len(nums) +1):
            if i not in nums:
                return i 

# a = [0,1]
a = [0,3,4,5,1,2]

def missingNumber2(arr):
    actual_sum = 0
    arr_sum = sum(arr)
    # 0 - 2 =  0 +1 +2 = 3
    for i in range(len(arr) + 1):
        actual_sum += i
        print(actual_sum)
    return actual_sum - arr_sum


def missingNumber3(arr):
    return sum([i for i in range(len(arr) +1)]) - sum(arr)

def missingNumber1(arr):
    return list(filter(lambda x: x != None,[i if i not in arr else None for i in range(len(arr) +1)]))[0]

print(missingNumber2(a))
# print(missingNumber3(a))
# print(missingNumber1(a))