def Day_1_part_1():
    lines = []
    while True:
        line = input()
        if line:
            lines.append(line)
        else:
            break
    "\n".join(lines)
    new_arr = list(map(lambda x: int(x), lines))
    arr_len = int(len(lines))
    op = 0
    for i in range(arr_len):
        for j in range(1, arr_len):
            if new_arr[i] + new_arr[j] == 2020:
                # print(new_arr[i] * new_arr[j])
                op = new_arr[i] * new_arr[j]
                break
    return op


print(Day_1_part_1())
