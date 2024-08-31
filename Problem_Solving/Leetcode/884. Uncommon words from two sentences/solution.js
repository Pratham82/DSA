/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  // created dictionary for storing the words and it's counts
  let res = [];
  const dictionaryS1 = new Map();
  const dictionaryS2 = new Map();

  const wordArrayS1 = s1.split(" ");
  const wordArrayS2 = s2.split(" ");

  for (let i = 0; i < wordArrayS1.length; i++) {
    if (dictionaryS1.has(wordArrayS1[i])) {
      dictionaryS1.set(wordArrayS1[i], dictionaryS1.get(wordArrayS1[i]) + 1);
    } else {
      dictionaryS1.set(wordArrayS1[i], 1);
    }
  }

  for (let i = 0; i < wordArrayS2.length; i++) {
    if (dictionaryS2.has(wordArrayS2[i])) {
      dictionaryS2.set(wordArrayS2[i], dictionaryS2.get(wordArrayS2[i]) + 1);
    } else {
      dictionaryS2.set(wordArrayS2[i], 1);
    }
  }

  // loop thorugh first dictionary
  for (let i = 0; i < wordArrayS1.length; i++) {
    // check if the word count is 1 and doesn't appear in another word
    const currentWord = wordArrayS1[i];
    const count = dictionaryS1.get(currentWord);

    if (count === 1 && !dictionaryS2.has(currentWord)) {
      res.push(currentWord);
    }
  }

  for (let i = 0; i < wordArrayS2.length; i++) {
    // check if the word count is 1 and doesn't appear in another word
    const currentWord = wordArrayS2[i];
    const count = dictionaryS2.get(currentWord);

    if (count === 1 && !dictionaryS1.has(currentWord)) {
      res.push(currentWord);
    }
  }

  return res;
};

console.log(uncommonFromSentences("apple apple", "banana"));

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
