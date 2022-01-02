t = int(input())

def checkIfPrime(n):
  count = 0
  for i in range(1, n+1):
      if n % i == 0:
        count += 1
  print('prime' if count <= 2 else 'not prime' )

for i in range(t):
  n = int(input())
  op = checkIfPrime(n)


# 5
# 13
# 2
# 3
# 4
# 5