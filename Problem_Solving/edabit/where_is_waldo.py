def where_is_waldo(arr):
  waldo = 0
  res = []
  for i1,i in enumerate(arr):
    for j1, j in enumerate(i):
      if waldo != j:
        res = [i1,j1]
      waldo = j
  return res

print(where_is_waldo([
	["A", "A", "A"],
	["A", "A", "A"],
	["A", "B", "A"]
]))
print(where_is_waldo([
	["O", "O", "O", "O"],
	["O", "O", "O", "O"],
	["O", "O", "O", "O"],
	["O", "O", "O", "O"],
	["P", "O", "O", "O"],
	["O", "O", "O", "O"]
]))
print(where_is_waldo([
	["c", "c", "c", "c"],
	["c", "c", "c", "d"]
]))
