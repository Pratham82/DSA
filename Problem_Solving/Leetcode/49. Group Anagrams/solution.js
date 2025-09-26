/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

  // my apporach
  let dict = {}

  for (let i = 0; i < strs.length; i++) {
    console.log(strs[i])
    let sortedWord = strs[i].split('').sort().join('')

    // check if the sorted word is present in the obj
    if (dict[sortedWord]) {
      // if it does then push the word
      dict[sortedWord].push(strs[i])
    } else {
      // it it's not then just initialize it with the word
      dict[sortedWord] = [strs[i]]
    }
  }

  return Object.values(dict)

  // TODO: Optimied apporach
};

console.log('aet'.includes('eat'))


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
