def monk_rotation():
  t = int(input())
  n,k = map(int,input().split(" "))
  a = list(map(int,input().split(" ")))
  new_arr = []
  for i in range(k):
    new_arr.append(a[len(a) -1])
    a.pop()
  rev= list(reversed(new_arr)) +a
  con = list(map(lambda n: str(n),rev))
  print(" ".join(con))



monk_rotation()