# arr  = sorted([435,56,67,76,67,65,213,43])
arr2 =[43, 56, 65, 67, 76, 213, 435]


def binary_search(arr, n):
  low = 0
  high= len(arr) - 1

#  Loop will run from 0- 6
  while low <= high:
    mid = (low + high) /2
    # initial value of guess
    guess = arr[(round(mid))]

# At every step we will check if the guessed number is === to the given number
    # if the guessed number is equal to the given number then we will return the index of the guessed number
    if guess == n:
      return mid
    # If the guessed number is smaller than given number then we will increase starting range
    if guess < n:
      low = mid + 1
    # If the guessed number is larger than given number then we will decrease ending range
    else:
      high = mid - 1
  return None

print(binary_search(arr2, 213))
