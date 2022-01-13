# Print name N times using recursion 
def print_name(i,n):
    i += 1
    print('Prathamesh')
    if i >n:
        return
    print_name(i,n)
print_name(1, 10)


# Print linearly from 1 to N
def print_1_to_n(i,n):
    print(i)
    i+=1
    if i > n:
        return
    print_1_to_n(i,n)

print_1_to_n(1,10)