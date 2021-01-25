def rotate(arr, n):
    last = arr[n - 1]
    for i in range(len(arr) - 1, 0, -1):
        arr[i] = arr[i - 1]

    arr[0] = last
    return arr


print(rotate([21, 22, 23, 24, 25], 5))
# print(rotate([1, 2]))
