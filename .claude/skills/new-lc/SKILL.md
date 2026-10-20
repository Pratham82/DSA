---
name: new-lc
description: Scaffolds a new LeetCode solution folder and starter file. Use when the user says "new-lc", "new lc", "start lc <num>", or wants to begin a LeetCode problem.
---

# new-lc

Args: `<number> <Title> [js|py]`. Default language is js.

1. Look in `Problem_Solving/Leetcode/` for an existing folder with the same number, ignoring zero padding (`9.`, `09.`, `009.` are the same). If found, stop and tell the user.
2. Create `Problem_Solving/Leetcode/<NNN>. <Title>/` with the number zero-padded to 3 digits.
3. Write the starter file:
   - JS: `solution.js` with the JSDoc block (`@param`, `@return`), an empty `var <camelCaseTitle> = function(...) {};` and a `console.log(...)` placeholder at the bottom.
   - Python: `solution.py` with `class Solution:`, an empty method, and a `print(...)` placeholder.
4. If the user gave a problem link or description, fill in the real signature and sample inputs. Otherwise ask for the signature.
5. Do not write the solution unless the user asks.
6. Tell the user the run command: `npm run lc <num> [js|py]`.
