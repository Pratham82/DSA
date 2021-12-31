for i in range(5,-1,-1):
  for j in range(5):
    if i == j  or i == 5 or i == 0:
      a = '*'
    else:
      a = ' '
    print(a,end=' ')
  print('')

# 5 05 15 25 35 4
# 4 04 14 24 34 4
# 3 03 13 23 33 4
# 2 02 12 22 32 4
# 1 01 11 21 31 4
# 0 00 10 20 30 4

# *****
#    *
#   *
#  *
# *****

# 1 11 21 31 4 
# 2 12 22 32 4 
# 3 13 23 33 4 
# 4 14 24 34 4

# 0 00 10 20 30 4 
# 1 01 11 21 31 4 
# 2 02 12 22 32 4 
# 3 03 13 23 33 4 
# 4 04 14 24 34 4 

# * * * * * 
#         * 
#       *   
#     *     
#   *       
# * * * * * 

for i in range(5):
  for j in range(5):
    # print(f'{i} {j}',end='')
    # print(f'|i {i}| j {j} |',end='')
    if i == 0 or i == 4 or i == j:
      a = '*'
    else:
      a = ' '
    print(a, end='')
  print(' ')


for i in range(5,0,-1):
  for j in range(5,0, -1):
    print(f'|i {i} - j {j} |',end='')
    # if i == 5 or i == 1:
    #   a = '*'
    # else:
    #   a = ' '
    # print(a, end='')
  print('')

# ** Working solution **
print('---')
for i in range(1,6):
  for j in range(1,6):
    # print(f'|i {i} - j {j} |',end='')
    if i == 5 or i == 1 or j + i == 6:
      a = '*'
    else:
      a = ' '
    print(a, end='')
  print('')


# Matrix for understanding
# |i 5 - j 5 ||i 5 - j 4 ||i 5 - j 3 ||i 5 - j 2 ||i 5 - j 1 |
# |i 4 - j 5 ||i 4 - j 4 ||i 4 - j 3 ||i 4 - j 2 ||i 4 - j 1 |
# |i 3 - j 5 ||i 3 - j 4 ||i 3 - j 3 ||i 3 - j 2 ||i 3 - j 1 |
# |i 2 - j 5 ||i 2 - j 4 ||i 2 - j 3 ||i 2 - j 2 ||i 2 - j 1 |
# |i 1 - j 5 ||i 1 - j 4 ||i 1 - j 3 ||i 1 - j 2 ||i 1 - j 1 |

# |i 1 - j 1 ||i 1 - j 2 ||i 1 - j 3 ||i 1 - j 4 ||i 1 - j 5 |
# |i 2 - j 1 ||i 2 - j 2 ||i 2 - j 3 ||i 2 - j 4 ||i 2 - j 5 |
# |i 3 - j 1 ||i 3 - j 2 ||i 3 - j 3 ||i 3 - j 4 ||i 3 - j 5 |
# |i 4 - j 1 ||i 4 - j 2 ||i 4 - j 3 ||i 4 - j 4 ||i 4 - j 5 |
# |i 5 - j 1 ||i 5 - j 2 ||i 5 - j 3 ||i 5 - j 4 ||i 5 - j 5 |