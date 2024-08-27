class Solution:
    def sumOfSeries(self,n):
        # #code here
        # if n == 1:
        #     return 1
        # return n**3 + self.sumOfSeries(n -1)

        # sum = 0
        # for i in range(1, n+1):
        #     sum += i**3
        # return sum

        return (n * (n + 1)//2) **2
