---
name: pattern-notes
description: Saves a short note on the pattern and approach behind a solution, beside that solution. Use when the user says "pattern-notes", "note this pattern", "save notes", or asks to record the approach.
---

# pattern-notes

1. Identify the solution file (user-named, else the one discussed in the session).
2. Write or append `notes.md` in the same folder. Keep it short:
   - **Problem**: one line.
   - **Pattern**: e.g. sliding window, binary search on answer, two pointers, hash set.
   - **Approach**: 3-5 bullets in the user's own reasoning from the session.
   - **Complexity**: time and space.
   - **Pitfalls**: edge cases or mistakes that came up.
3. If `notes.md` exists, add a new section. Never overwrite.
4. Do not touch the solution file.
