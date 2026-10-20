## Max Consecutive Ones (max_consecutive_ones.go)

**Problem**: Given a binary array, return the length of the longest run of 1s.

**Pattern**: Single pass with a running counter (streak tracking).

**Approach**
- Keep `currentStreak` and `maxConsecutiveCount`.
- On `1`: increment `currentStreak`, then update the max if it is larger.
- On `0`: reset `currentStreak` to 0.
- Update the max on every increment so a run ending at the last index is counted.

**Complexity**: O(n) time, O(1) space. Optimal, every element must be read.

**Pitfalls**
- Resetting the streak only when it beat the max: a shorter run after a longer one carried over (`[1,1,1,0,1,1,0,1,1]`).
- Updating the max only on `0`: a trailing run of 1s was never compared (`[1]`, `[0,1,1]`).
- Test all zeros, all ones, single element, empty slice.
