# colt-algorithm-course

## Contents
- [Big O](#big-o)
    - Big O of Objects
    - Big O of Object Methods
    - Big O of Arrays
    - Big O of Array Methods
- [Problem Solving Patterns](#problem-solving-patterns)
- [Recursive Function](#recursive-function)
- [Searching Algorithms](#searching-algorithms)
    - [Binary Search](#binary-search)
    - KMP String Search
- [Basic Sorting Algorithms](#basic-sorting-algorithms)
    - [Bubble Sort](#bubble-sort)
    - [Selection Sort](#selection-sort)
    - [Insertion Sort](#insertion-sort)
- [Better Sorting Algorithms](#better-sorting-algorithms)
    - [Merge Sort](#merge-sort)
    - [Quick Sort](#quick-sort)
    - [Radix Sort](#radix-sort)
- [Data Structures](#data-structures)
    - [Singly Linked List](#singly-link-list)
    - [Doubly Linked List](#doubly-linked-list)
    - [Stack](#stack)
    - [Queue](#queue)
    - [Binary Search Trees](#binary-search-trees)
## Big O
- constant time: O(1)
- logarithmic time: O(log n)
- linear time: O(n)
- quadratic time: O(n^2)

### Big O of Objects
* Access - O(1)
* Insertion - O(1)
* Removal - O(1)
* Searching - O(N)

### Big O of Object Methods
* Object.keys - O(N)
* Object.values - O(N)
* Object.entries - O(N)
* hasOwnProperty - O(1)


### Big O of Arrays
* Access - O(1)
* Insertion - depends (if it's not added to last index, whole array will need to be re-indexed)
* Removal - depends
* Searching - O(N)
* Swapping - O(1)

### Big O of Array Methods
* push - O(1)
* pop - O(1)
* shift - O(N)
* unshift - O(N)
* concat - O(N)
* slice - O(N)
* splice - O(N)
* sort - O(N * log N)
* forEach / map / filter / reduce / etc.  - O(N)

    * note: time complexity may vary, depends on browser's engine
    * Since V8 v7.0 and Chrome 70 Timsort algorithm is used
        * for smaller arrays, time complexity: O(n) | space complexity: 0(1)
        * for larger arrays, time complexity: O(n log(n)) | space complexity: O(n)
    * The older version of V8 uses Quick Sort
        * for small arrays (up to 10 elements) time complexity: O(n^2) | space complexity: O(1).
        * for larger arrays, time complexity:  Θ(n log(n)) (average case) | space complexity is O(log(n))

## Problem Solving Patterns
* Frequency Counter 
    * create objects as dictionaries to count occurrences of each member. The keys are members' representative, the values are occurrences;
    * suitable for counting / searching for unique members
* Multiple Pointers
    * must use with sorted members, like a sorted number array
    * create pointers correspond to position like index
    * one might moves towards the end and another might moves toward the beginning, or even start in the middle, it's depends
    * suitable to count unique values, find duplicate, find a specific pair, or get result of specific members that go through some operation
* Sliding Window
    * create a window (array or number) from one position to another
    * the window might be a sum of number or string
    * remove the first member of the sum, then replace with latest member, hench 'sliding' the window
    * we'll get a result of new result of the new subset without calculating the whole subset repeatedly
    * suitable for keeping 
        * track of a subset of data in an array/string etc, such as finding the longest unique subset of an array
        * things we iterate over sequentially, like contiguous sequence of elements
        * minimum/maximum of something, shortest/longest of something, contained something
* Divide & Conquer
    * divide a data set into smaller chunks, repeat a process with a subset of data
    * must be sorted
    * tremendously decrease time complexity
    * i.e. quick search, merge sort, binary-search, 

## Recursive Function
* function that repeatedly calls itself
* need base case to stop, normally with a return keyword
* repeat with different input
* i.e. DOM travel, open nested folders
* for arrays, use slice, spread operator, concat to not mutate the. For strings, use slice, substr, or substring

## Searching Algorithms
### Binary Search
* eliminates half of the remaining elements at a time
* only works on 'sorted' arrays
* use divide and conquer
* implementation
    1. Accept a sorted array and a value.
    2. Create a left pointer at the start of the array, and a right array at the end of the array.
    3. While the left pointer comes before the right pointer:
        * create a pointer at the middle.
        * if the wanted value is found, return the index.
        * if the value is too small move left pointer up.
        * if the value is too large move the right pointer down.
    4. return -1 if the value isn't found.

## <a name="#basic-sorting-algorithms">Basic Sorting Algorithms (better on small data set)</a>

### Bubble Sort
* the largest values bubble up to the top, 1 at a time
* if next element is larger, swap. Loop until the end of collection
* rinse & repeat until there's no swapping in that round
* optimized version
    * add a condition to break loop is that round doesn't need swapping
    * outer loop should loops from the back, cuz we'll be already know those last elements behind i is already sorted, 
    * this way, we'll have fewer loop each round since we don't loop through sorted elements
    * let i = arr.length - 1; i > 0; i--
    * let j = 0; j < i; j++
* Time complexity:
    * in general: O(n^2)
    * nearly sorted: almost O(n) for optimized bubble sort,  O(n^2) if not so

### Selection Sort
* compare all value, then place the smallest one to the front, rinse and repeat
* still bad, but potentially better than bubble sort since it only swaps at the end of each loop
* Time complexity:
    * in general: O(n^2)
    * in best case: still O(n^2)

### Insertion Sort
* left half is always sorted (not complete tho)
* pick the current value out then compare back to the beginning, one by one.
* replace previous value (from the back) with its value then move on (not swapping);
* if current value is smaller, keep going.
* if current value is larger, keep going until it reach the half left that's already sorted
* if current value is smaller, but larger than next value, put current value there, hence 'inserted' in
* works well in online algorithms where data coming in live or streaming and need to be inserted at the moment 
* Time complexity:
    * in general: O(n^2)
    * nearly sorted: almost O(n) like online algorithms that got new information at the end

## Better Sorting Algorithms
### Merge Sort
* Exploit the fact that 1 element (arrays of 0) is always sorted.
* Divide & conquer by 
    1. repeatedly break arrays into halves until each one is empty or has one element, do this recursively.
        * break point: return early if having 0-1 member.
    2. merge sorted arrays back together with merge function.
        * merge & sort 2 sorted arrays together with 2 pointers for each array's length.
* Merge helper implementation:
    1. Create empty array, look at the smallest values in each input array (using multiple pointer).
    2. Loop until the pointer exceeds any array length.
    3. Push leftover members, since it's sorted, to the result array (do it for both array since we didn't check which array is larger).
* Time complexity:
    * best, average, worst, : O(n log n)
    * O(log n) for decomposition * O(n) for comparing in merging.
    * best sorting algorithm if data doesn't any have specific quirk or characteristic.
* Space Complexity:
    * O(n)
    * Larger array need more space to store sub arrays.

### Quick Sort
* Use Pivot to recursively rearrange lesser values to the left side of it and the greater values to the right side of it.
* The runtime of quick sort depends on where you pick the pivot.
* Ideally, the pivot should be chosen so that it's roughly the median value in the data set.
    * But For simplicity sake, we mostly choose the first element to be the pivot (we don't know where the median value is).
* Pivot helper implementation:
    1. Accept 3 arguments: an array, a start index, an end index.
    2. Designate an element in the array as a pivot (can be the start of the array).
    3. Store the current pivot index in a variable.
    4. Loop through the array and rearrange elements so that all values lesser than the pivot is moved to the left of it, likewise for the right side.
        * if the 'pivot value' is greater than the current element, increment the 'pivot index variable' and swap the current element with the element in the pivot index.
        * it shouldn't create a new array.
        * the moved elements don't need to be sorted among themselves.
    5. Swap the starting element (the old pivot) with the pivot index.
    6. Return the index of the pivot.
* Quick sort implementation:
    1. Accept arr, left, and right for later use in recursion (pass it to itself and the pivot helper).
    2. Recursively call the pivot helper on the subarray to the left of updated pivot index, likewise for the right side of the index.
    3. The base case occurs when considering a subarray with less than 2 elements (recursively call only when left < right).
* Time Complexity:
    * Best, Average: O(n log n).
    * Worst: O(n^2).
    * O(log n) decomposition (when breaking an array into subarrays) * O(n) comparison per decomposition.
    * If the array is already sorted (and we take the first element as the pivot), we will recursively decompose the array (minus one element) again & again, hence O(n^2).
* Space Complexity:
    * O(log n).

### Radix Sort
* Unlike previous sorting algorithms, which are comparison sort. Radix doesn't make direct comparison.
* Only works with specific quirk, in this case, it only works on numbers.
* Exploits the fact that information about size of a number is encoded in the number of digits.
* Compare each digit instead of the whole values.
* Implementation:
    1. Create 3 helper functions:
        1. getDigit helper uses math knowledge (floor and modula)
        2. digitCount helper figures out the largest number of digit in the array.
        3. mostDigits helper returns the number of digits in the largest numbers in the list (using digitCount).
    2. Define a function that accepts list of numbers.
    3. Figure out how many digits the largest number has (mostDigits helper).
    4. Loop from k = 0 to this largest number of digits, for each iteration of this loop:
        1. Create buckets for each digits (array that has 10 subarrays 0-9).
        2. Place each number in the corresponding bucket based on its kth digit.
    5. Replace existing array with values in the buckets (concatenated subarrays) in each outer loop.
    6. return bucket list in the end
* Time Complexity:
    * Best, Average, Worst: O(nk).
    * n = length of array, k = number of digits
* Space Complexity:
    * O(n + k).


## Data Structures

### Singly Link List
- A linked list of nodes that point to the next node.
- Doesn't have index, unlike array.
- It's a foundation for Stacks & Queues data structure.
- Pros: Good for adding and removing member at the beginning, because it doesn't have to re-index the whole array.
- Cons: Have to travel the whole list, can't access by index. Not suitable for random accessing.
- Time Complexity:
    - Insertion: O(1)
      - push, unshift: O(1)
      - insert: use get, so O(n)
    - Removal: O(1) or O(n)
      - shift: O(1)
      - pop: O(n) 
      - remove: use get, so O(n)
    - Searching: O(n)
    - Access: O(n)
- Implementation
    - Node class: val, next
    - SinglyLinkedList class: head, tail, length
    - methods:
        - push
        - pop (have to traverse through the whole list)
        - shift
        - unshift
        - get
        - set
        - insert
        - remove
        - reverse (for practice)
        - print / traverse (for method checking)

### Doubly Linked List
- Almost identical to Singly Linked Lists, except every node has another pointer to the 'previous' node.
- Can access backward from the last node, easier to reverse.
- Hence can access and find a specific node in half the time.
- Use more memory (extra pointer) as a tradeoff for more flexibility.
- Time Complexity:
    - Insertion: O(1)
      - push, unshift: O(1)
      - insert: use get, so O(n)
    - Removal: O(1) or O(n)
      - shift: O(1)
      - pop: O(1) 
      - (can access tail directly)
      - remove: use get, so O(n)
    - Searching: O(n) 
        - (actually O(n/2) which is better than singly liked list)
    - Access: O(n)
        - (actually O(n/2) which is better than singly liked list)

### Stack
- LIFO (last in first out).
- Prioritize insertion and removal.
- Are foundational for more complex data structures.
- i.e. undo & redo, managing function invocation, routing (the history object forward & backward).
- Singly-linked-list-based stack;
    - treat singly linked list head as its last to achieve O(1) pop and push
    - add from the beginning and remove from the beginning to achieve O(1) insertion & removal.
- Time Complexity:
    - Insertion: O(1)
    - Removal: O(1)
    - Searching: O(n)
    - Access: O(n)

### Queue
- FIFO (first in first out).
- Prioritize insertion and removal.
- Useful for processing tasks and are foundational for more complex data structures.
- i.e. background tasks, uploading resource, printing / task processing.
- Singly-linked-list-based queue;
    add from the end and remove from the beginning to achieve O(1) insertion & removal.
- Time Complexity:
    - Insertion: O(1)
    - Removal: O(1)
    - Searching: O(n)
    - Access: O(n)

### Binary Search Trees
- 