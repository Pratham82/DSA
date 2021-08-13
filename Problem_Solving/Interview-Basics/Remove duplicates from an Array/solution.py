def removeDuplicates(arr: list[int]) -> list[int]:
    newArr = []
    for i in range(0, len(arr)):
        if arr[i] not in newArr:
            newArr.append(arr[i])
    return newArr


print(removeDuplicates([11, 22, 22, 22, 34, 54, 34, 65, 11]))
