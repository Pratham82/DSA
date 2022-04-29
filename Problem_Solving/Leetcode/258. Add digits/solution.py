# from functools import reduce
# from numpy import number


def addDigits(num: int) -> int:
    # numArr = list(map(lambda x: int(x), list(str(num))))
    # res = reduce(lambda x, y: x + y, numArr)
    # res = 0
    # for i in numArr:
    #     res += i
    # return addDigits(res) if res > 4.5 else res

    # arr = []
    # c = len(str(num))
    # for i in range(c):
    #     rem = num % 10
    #     num /= 10
    #     print(num)
    #     arr.append((int(rem)))

    arr = []
    while num >= 1:
        rem = num % 10
        num = int(num / 10)
        arr.append((int(rem)))

    res = 0
    for i in arr:
        res += i
    return addDigits(res) if res > 9 else res


print(addDigits(5431))
print(addDigits(1))
# addDigits(1345)
# addDigits(38)
# addDigits(38)
