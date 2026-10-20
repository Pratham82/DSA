---
name: commit-solution
description: Commits new or changed DSA solution files with the repo's message style. Use when the user says "commit-solution", "commit this solution", or "commit my soln".
---

# commit-solution

1. Run `git status` and `git diff --stat`. Identify solution files (`solution.*`, Stiver files, `notes.md`).
2. Stage only those files by explicit path. Never use `git add -A` or `git add .`. Skip unrelated changes and tell the user what was skipped.
3. Write the message in the repo style: short, lowercase.
   - LeetCode: `added soln for lc <num>` (optionally append the title).
   - Other: `add solution for <source> <topic>`.
4. Commit. End the message with the attribution line from the session's system reminder, if one is present.
5. Never push. Never amend or force anything.
