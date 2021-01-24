def game_with_nos(arr):
    for i in range(0, len(arr) - 1):
        arr[i] = arr[i] ^ arr[i + 1]
    return arr


print(game_with_nos([10, 11, 1, 2, 3]))
