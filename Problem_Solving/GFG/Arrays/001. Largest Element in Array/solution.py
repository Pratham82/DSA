def largest(arr: list, n: int):
    max = 0
    for i in range(0, len(arr)):
        if arr[i] > max:
            max = arr[i]
    return max
