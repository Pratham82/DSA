# DSA

Personal DSA practice repo (LeetCode, Striver A2Z, GFG, courses). Not a library. Mostly JavaScript, some Python.

## Layout
- `Problem_Solving/Leetcode/` — one folder per problem, flat, keyed by number.
- `Problem_Solving/stiver-a2z-sheet/{basics,advanced}/` — section folders prefixed `N_`.
- `Problem_Solving/{GFG,Hackerrank,Interview-Basics,Advent_of_code,edabit,pepcoding}/` — other sources.
- `Courses/`, `Data_structures/` — course material and notes (`.md` beside the code).
- `Training/` — Grokking-algo and C++ practice. Compiled binaries are committed there; leave them alone.

## Conventions
- LeetCode folder: `<num>. <Title>`. New folders use 3-digit zero-pad (`001.`, `540.`). Do not rename old ones.
- LeetCode file: `solution.js` (default) or `solution.py`.
- Stiver files: `snake_case.js`.
- JS template: LeetCode JSDoc block, `var fn = function(...) {...};`, inline `//` approach comments, `console.log(fn(sample))` calls at the bottom.
- Python template: `class Solution:` with method, then `print(Solution().method(sample))`.
- No test framework. Verify by running the file and reading console output.

## Run
- `npm run lc <num> [js|py]` — nodemon watcher (`Problem_Solving/runlc.js`).
- Python watcher hardcodes macOS `/opt/homebrew/bin/python3`. On Linux run `python3 <file>` directly.

## Commits
Short, lowercase: `added soln for lc 540`, `add solution for lc 3`.

## Working rules
- User is learning. Give hints first. Give a full solution only when asked.
- Do not add dependencies or mass-rename/reformat existing files.
- Commit only when asked. Never push.

## Skills (`.claude/skills/`)
`new-lc`, `check-solution`, `pattern-notes`, `commit-solution`.
