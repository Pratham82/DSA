class Solution:
    def printNos(self, n):
        # Code here
        print(n, end = " ")
        if n == 1:
            return
        self.printNos(n - 1)
