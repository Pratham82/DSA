---
name: check-solution
description: Reviews the user's DSA solution with hints, not answers. Use when the user says "check", "check my solution", "review my soln", or asks if a solution is correct or optimal.
---

# check-solution

Target: the file the user names, else the most recently modified `solution.*` under `Problem_Solving/`.

1. Read the file.
2. Run it: `node <file>` for JS, `python3 <file>` for Python. Do not use `npm run lc`, which starts a watcher that never exits.
3. Compare printed output with the expected output for the samples. Report mismatches.
4. Think through edge cases (empty input, single element, duplicates, negatives, overflow, sorted/unsorted). Name the ones that fail or are untested.
5. State time and space complexity. Say whether a better bound exists.
6. Give nudges as questions or small hints. Do not write the corrected solution unless the user asks.
7. Do not edit the file.
