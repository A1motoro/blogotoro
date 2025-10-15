# Sorting - Part 1

**Published:** October 14, 2025
**Category:** Programming
**Read Time:** 8 min

Sorting is one of the most classic types of problems. As our first encounter with algorithms, today we'll take the initial steps into the world of sorting.
Sorting is the process of arranging the disordered numbers in an array into an ordered sequence. *This is obvious, my friend*

## Selection Sort $O(n^2)$

When faced with an unordered sequence, selection sort works like this:
1. Traverse and find the largest one
2. Add it to the sequence and delete it from the original sequence
3. Loop until the new sequence has the same length as the original sequence
Thus you get a great ordered sequence. The advantages of this algorithm are:
- Easy to write
- Matches human intuition
- Suitable for beginners to understand algorithms
The disadvantages are:
- **Slow**
- Uses space for two sequences

The idea is very simple, let's implement it:

```python
def selection_sort(arr):
    sorted_arr = []
    while len(sorted_arr) < len(arr):
        max = 0 # Assume all numbers are positive integers
        for i in arr:
            if i > max:
                max = i
        arr.remove(max) # Remove the first element that equals this value

    return sorted_arr
```

Of course, you might say, *Ahhhh I don't know the remove() method, what can I do??????* For this problem, we can **flag** these deleted numbers. If a number has been processed, set `flag` to `False`, and when we traverse it again, the `flag` condition won't trigger, so it will be skipped.

```python
def selection_sort(arr):
    n = len(arr)
    flag = [False] * n  # Create flag array, all False
    sorted_arr = []

    for _ in range(n):  # Need to execute n times
        max_value = float('-inf')
        max_index = -1

        # Find the maximum value among unmarked elements
        for i in range(n):
            if not flag[i] and arr[i] > max_value:
                max_value = arr[i]
                max_index = i

        # Mark as processed and add to sorted result
        if max_index != -1:
            flag[max_index] = True
            sorted_arr.insert(0, max_value)  # Insert in descending order

    return sorted_arr
```

You can replace `arr` with any integer array, and you'll get descending order (largest to smallest) sorting. If you want ascending order (smallest to largest), just change `insert(0, max_value)` to `append(max_value)`, or find the smallest number each time and insert it at the end.

This method is very intuitive in thinking, but the efficiency is actually very low, with time complexity about $O(n^2)$, and it's mainly used for sorting teaching and understanding in practice.

~Don't tell me you don't know how to find the maximum value in a sequence~

## Insertion Sort $O(n^2)$

Just like playing poker, whenever you get a card, put it in a position that's smaller than the front and larger than the back. This way, the sequence is ordered at every moment. See VCR:

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        # Scan left, move all larger than key to the right
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr

# Example
nums = [5, 2, 9, 1, 6]
print(insertion_sort(nums))  # Output: [1, 2, 5, 6, 9]
```

The step of moving everything to the right can be optimized with linked lists, we won't expand on that here, interested students can learn it themselves.

## Bubble Sort $O(n^2)$

Bubble sort is actually like each number bubbling to its proper position
1. **Repeated comparison**: From beginning to end, compare each pair of adjacent elements.
2. **Larger goes back**: If the front is larger than the back, swap their positions, letting the larger one "bubble" back one space.
3. **Determine one maximum per round**: After one round, the largest number is "bubbled" to the last position, like a bubble floating to the surface of the array.
4. **Range shrinks**: Next time only need to continue comparing in the unbubbled front part—the more and more elements at the end are already in their proper positions, ignore them.
5. **Repeat N-1 rounds**: Each round determines the position of the maximum value in the current unsorted sequence, until all bubbles float up steadily and the sequence is ordered.

Let's use the sequence [3, 4, 2, 1, 6] as an example to explain each step of bubble sort in detail (ascending):

Initial sequence: [3, 4, 2, 1, 6]

**Round 1**:
- Compare 3 and 4, no swap needed, sequence unchanged [3, 4, 2, 1, 6]
- Compare 4 and 2, 4>2, swap, sequence becomes [3, 2, 4, 1, 6]
- Compare 4 and 1, 4>1, swap, sequence becomes [3, 2, 1, 4, 6]
- Compare 4 and 6, 4<6, no swap needed, sequence [3, 2, 1, 4, 6]
- End of round, maximum element 6 has "floated" to the end

**Round 2** (only look at first 4 numbers): Because after round 1, the largest number is guaranteed to be at the far right.
- Compare 3 and 2, 3>2, swap, sequence [2, 3, 1, 4, 6]
- Compare 3 and 1, 3>1, swap, sequence [2, 1, 3, 4, 6]
- Compare 3 and 4, 3<4, no swap needed, sequence [2, 1, 3, 4, 6]

**Round 3** (only look at first 3 numbers):
- Compare 2 and 1, 2>1, swap, sequence [1, 2, 3, 4, 6]
- Compare 2 and 3, 2<3, no swap needed, sequence [1, 2, 3, 4, 6]

**Round 4** (only look at first 2 numbers):
- Compare 1 and 2, 1<2, no swap needed, sequence [1, 2, 3, 4, 6]

All ordered! Each round the largest number "bubbles" to the ordered position on the right.

You can use the following code to experience the bubble sort process:

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # Early termination optimization
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

nums = [3, 4, 2, 1, 6]
print(bubble_sort(nums))
# Output: [1, 2, 3, 4, 6]
```


## Bucket Sort $O(n)$

Bucket sort is a **legend**! It's a genius idea!

Ahem!
Bucket sort is a sorting algorithm that utilizes the "bucketing + counting" concept. Suitable for sorting integer collections where the **value range is known and small**.

For example, to sort 10 numbers from 0-9, just:

1. Create 10 buckets (can use an array of length 10), each bucket counts how many times each number appears.
2. Count how many times each number appears.
3. Pour out the numbers in order.

**Example: Sort [2, 5, 3, 5, 7, 2, 8]:**
1. Create buckets `bucket = [0]*10`
2. Scan once, increment corresponding bucket when encountering a number
   2 appears 2 times, 3 appears 1 time, 5 appears 2 times, 7 appears 1 time, 8 appears 1 time
   `bucket = [0,0,2,1,0,2,0,1,1,0]`
3. Pour out each type of number from buckets in order:
   2,2,3,5,5,7,8

**Code as follows:**
```python
def bucket_sort(arr, max_num):
    # Bucket array, length = maximum value + 1
    bucket = [0] * (max_num + 1)
    for num in arr:
        bucket[num] += 1
    res = []
    for num in range(len(bucket)):
        res.extend([num] * bucket[num])
    return res

nums = [2, 5, 3, 5, 7, 2, 8]
print(bucket_sort(nums, max_num=9))
# Output: [2, 2, 3, 5, 5, 7, 8]
```

Ah! Teacher teacher, bucket sort only needs one pass of loop, why don't we all use bucket sort!
The teacher tells you with a gloomy face that something is wrong:
Ah! Child! Teacher tells you, although bucket sort has time complexity O(n) and looks fast, it has many limitations:

**1. High space complexity**
- Need to create an array of length `max_num + 1`
- If the data range is large (like 0~1000000), need to create 1 million buckets
- Memory consumption is huge!

**2. Only suitable for integers**
- Bucket sort can only handle integers
- Cannot directly use floating point numbers, strings, etc.

**3. Data range must be known and finite**
- If you don't know the maximum value, cannot determine bucket quantity
- If data range is large, space overhead explodes

**4. Low efficiency when data distribution is uneven**
- If most buckets are empty, waste space
- For example, only 2 numbers: 1 and 1000000, but need to create 1 million buckets

But you are a genius, child! You thought, **you don't have to create so many buckets at the beginning, you can create buckets when you encounter them!**, and in Python, you can just use **dictionary** to solve this. So you came up with the simplified version of bucket sort:

## Counting Sort $O(n + k)$

Counting sort is an optimized version of bucket sort, it uses dictionary to dynamically store the occurrence count of each number, avoiding the problem of pre-allocating large amounts of space.

**Your smart core idea:**
1. Count the occurrence of each number, but don't record the ones that don't appear first
2. Output in numerical order

**Example: Sort [2, 5, 3, 5, 7, 2, 8]:**
1. Count: `{2: 2, 3: 1, 5: 2, 7: 1, 8: 1}`
2. Output in order: 2,2,3,5,5,7,8

See VCR, not VCT:

```python
def counting_sort(arr):
    """
    Counting sort (dictionary optimized version)
    arr: Array to be sorted
    No need to know maximum value in advance, automatically adapts to data range
    """
    # Create counting dictionary, only create "buckets" for actually appearing numbers
    count = {}

    # Count occurrence of each element
    for num in arr:
        count[num] = count.get(num, 0) + 1

    # Rebuild array in numerical order
    result = []
    for num in sorted(count.keys()):  # Sort from small to large
        result.extend([num] * count[num])

    return result

# Example
nums = [4, 2, 3, 1, 4, 2, 3]
sorted_nums = counting_sort(nums)
print(sorted_nums)  # [1, 2, 2, 3, 3, 4, 4]

# Advantage: Supports larger range data, no need to know max_val in advance
nums2 = [100, 5, 200, 1, 100, 5, 300]
sorted_nums2 = counting_sort(nums2)
print(sorted_nums2)  # [1, 5, 5, 100, 100, 200, 300]
```

## Next, let's explore deeper into the sorting realm!!!! The above sorting algorithms generally cannot meet the time complexity requirements of algorithm competitions, see Chapter 2 Sorting Algorithms - Advanced!
