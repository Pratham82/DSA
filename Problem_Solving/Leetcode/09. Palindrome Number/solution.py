class Solution:
    def isPalindrome(self, x: int) -> bool:
        reversedNumber = int(('').join(list(reversed(list(str(abs(x)))))))
        return reversedNumber == x
