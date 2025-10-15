# Binary Search Algorithm - Part 1

**Published:** October 14, 2025
**Category:** Programming
**Read Time:** 8 min

Binary search is a first glance that can make you fully appreciate the charm of algorithms. Today we'll start from the most basic binary search and go all the way to the clouds!

## Classic Binary Search

Binary search is the most fundamental binary algorithm, used to find a specific element in a **sorted** array.
- Each time it halves the search interval
- Compares the middle value and determines the next search interval
- It's more convenient to use recursion
- Time complexity is O(log n)

Here's a classic template:
``` python
def binary_search(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # Not found
```
Even a dog can learn it, so learn it!

## Binary Search on Answer

This is a very clever technique! Its idea is that when you want to solve a problem, you do binary search on its answer. It's like constantly asking yourself, "If the answer to this problem is 5, after calculating, it seems it should be bigger than 5", then continue binary searching the next search space. For specific problems, it usually works for "finding the maximum of the minimum" and "finding the minimum of the maximum" problems, because these problems can provide the judgment of whether to choose the left interval or right interval in binary search. In short, this usually means finding a critical point.

The code template for this algorithm:
``` python
def binary_search_answer(left, right, check_func):
    while left < right:
        mid = (left + right + 1) // 2  # Round up to avoid infinite loop

        if check_func(mid):
            left = mid  # Try a larger value
        else:
            right = mid - 1  # Narrow the range

    return left
```
The `check_func()` function is used to determine the upper and lower intervals according to the problem requirements, returning a bool variable.

We use an example to help understand:

### Banana Eating Problem (LeetCode 875)

#### Problem Description
There are `n` piles of bananas, the `i`th pile has `piles[i]` bananas. The guard comes back every hour, and you must finish eating all bananas within `h` hours.

Every hour you can choose one pile of bananas and eat `k` bananas (k is the speed you choose). So:
- For a pile with `x` bananas, you need `ceil(x / k)` hours to finish eating this pile

What's the minimum speed `k` so you can finish eating all bananas within `h` hours?

PS: The `ceil()` function is in the `math` library, representing rounding up

#### Example
```
Input: piles = [3,6,7,11], h = 8
Output: 4
Explanation: When speed k=4:
- 1st pile: ceil(3/4) = 1 hour
- 2nd pile: ceil(6/4) = 2 hours
- 3rd pile: ceil(7/4) = 2 hours
- 4th pile: ceil(11/4) = 3 hours
Total 8 hours, exactly able to finish eating within 8 hours
```

#### Analysis!
At first glance, this problem has nothing to do with binary search, but you keenly realize that the required seems to be a **critical point**, of course you can eat at a very fast speed and finish all bananas instantly, but you want to elegantly finish eating them exactly within h hours, which satisfies the condition of binary search on answer.
You smack your lips, hmm~, so think about it, if I guess I eat at speed `k1`, how can I judge whether my next search speed range should be larger than `k1` or smaller?
You suddenly realize! If I can't finish eating in h hours, it means I'm eating too slowly, so I should search in the speed range larger than `k1`. If I can finish eating, it means it's not elegant enough, so I go to the speed range smaller than `k1` to search.
*bingo*
Next, I need to solve the range of answers, what range should I do the initial binary search on? What are the maximum and minimum possible speeds?
Obviously, you can't eat half a banana per hour, so the minimum is `1`
Also, because you can only eat one pile at a time (can't finish this pile and eat that pile in one hour), the maximum is `max(piles)`. Because any larger doesn't make sense.
Now your "Binary Search on Answer Heart Sutra" has been cultivated to the elementary level, a mere "Banana Palm Technique" martial art shouldn't be difficult to take down?
#### "Banana Palm Technique"

```python
import math

def min_eating_speed(piles, h):
    def can_eat_all(speed):
        total_hours = 0
        for pile in piles:
            total_hours += math.ceil(pile / speed)
        return total_hours <= h

    # Binary search answer range
    left, right = 1, max(piles)

    while left < right:
        mid = (left + right) // 2

        if can_eat_all(mid):
            # Can eat all, try smaller speed
            right = mid
        else:
            # Can't eat all, need larger speed
            left = mid + 1

    return left
```
The divine skill has been completed, time to go out and travel, you can continue practicing this miraculous technique at [Luogu Binary Arena](https://www.luogu.com.cn/training/111)! Here I'll share another harder problem
### Sequence Segmentation (Luogu P1182)
#### Problem Description
For a positive integer sequence of length N, divide it into M segments, each segment is continuous, and the maximum value of the sum of each segment is minimized.

For example, the sequence `[4, 2, 4, 5, 1]` is divided into `3` segments, when divided into `[4, 2], [4, 5], [1]`, the maximum sum is 9, while when divided into `[4], [2, 4], [5, 1]`, the maximum sum is only 6. The latter is a better segmentation method and is the answer to the problem.

The first line inputs N, M. The second line contains N non-negative integers forming a sequence.
Output a positive integer representing the answer.
#### Problem Analysis!
The problem output doesn't require giving the grouping method, but the problem clearly states **minimize the maximum value**, you sit up in shock!
We build the framework of binary search on answer, that is, determine the binary search interval and establish the binary search judgment logic.
1. **Determine binary search interval**: The maximum value of the sum can't be larger than the sum of the entire sequence, right. The minimum value of the sum can't be smaller than the maximum value in the sequence, right. So we establish the upper and lower bounds.
2. **Establish binary search judgment logic**: Suppose I say the maximum sum of each segment is x, how can I judge if this sum can be achieved?
    You can think about it first, then continue reading
    You discover you only need to **greedily** do the grouping, the final result will speak for itself! The specific logic is as follows:
    - Start traversing the sequence, accumulate the sum
    - Once adding the next number would exceed x, it means the previous numbers must be cut off here to satisfy the maximum sum of each segment being x. So we cut off and start accumulating from zero from the next item, repeat.
    - Finally, if more than M groups are divided, it means the sum is too small and can't be divided. If less than M groups, it means M is too large and there's still room for operation
*bingo*
Now we start writing code happily:
#### "Sequence Splitting Sword Technique"
``` python
def maxi_sum_section(n, m, a): # a represents the sequence
    def can_divide(x): # Convention False means x doesn't hold after substitution, need larger x
        sec_cnt, sec_sum = 1, 0 # Respectively represent segment count, segment sum
        for i in a:
            sec_sum += i
            if sec_sum > x: # The original segment plus this number exceeds the limit, so segment
                sec_sum = i # Initialize the sum of the new segment to the next number
                sec_cnt += 1 # Segment count +1
            if sec_cnt > m:
                return False
        return True

    left, right = max(a), sum(a)
    while left < right:
        mid = (left + right + 1) // 2  # Round up to avoid infinite loop

        if can_divide(mid): # Convention False means mid value is too small, can't find a situation that satisfies the condition
            right = mid  # Try smaller value
        else:
            left = mid - 1  # Try larger value

    return left

```
## Summary - Introduction to Binary Search
Through this section's introduction, I believe you've mastered the clever usage of binary search in some "maximum-minimum" and "judgment" type problems. However, this is just the basic application of binary search thinking. Binary search not only works on number intervals, but can also extend to answer spaces, and even combine with other algorithms to solve more complex problems.

If you feel unsatisfied, please look forward to the second chapter, where we'll delve into the advanced gameplay of binary search, including the essence of binary search on answer, how to discover binary search, its wonderful uses in "judgment + construction" type problems, and combinations with other techniques (such as prefix sums, greedy, dp, etc.).

Keep moving forward, see you in chapter two!
*That last paragraph was of course written by the AI teacher*

