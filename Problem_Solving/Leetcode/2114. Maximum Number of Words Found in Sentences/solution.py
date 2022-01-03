class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        words = []
        for sentence in sentences:
            words.append(len(sentence.split(' ')))
         
        return max(words)