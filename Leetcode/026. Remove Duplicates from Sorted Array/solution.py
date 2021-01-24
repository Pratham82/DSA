def removeDuplicates(nums: list[int]) -> int:
    if len(nums) == 0:
        return 0
    if len(nums) == 1:
        return 1

    j = 1
    for i in range(1, len(nums)):
        if nums[i] != nums[i - 1]:
            nums[j] = nums[i]
            j += 1
    for delete_index in range(i, j - 1, -1):
        del nums[delete_index]
    return j


print(removeDuplicates([1, 2]))
