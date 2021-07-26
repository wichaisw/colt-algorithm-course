# colt-algorithm-course

## Big O

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
    * create objects as dictionaries to count occurrence of each members. The keys are members' representative, the values are occurrences;
    * suitable for counting / searching for unique members
* Multiple Pointers
    * must use with sorted members, like a sorted number array
    * create pointers correspond to position like index
    * one might moves towards the end and another might moves toward the beginning, or even start in the middle, it's depends
    * suitable to count unique values, find duplicate, or get result of specific members that go through some operation
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
* eliminates half of the remaining elements at at time
* only works on 'sorted' arrays
* use divide and conquer


## Basic Sorting ALgorithms (better on small data set)

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
* replace previous value (from the back) with its its value then move on (not swapping);
* if current value is smaller, keep going.
* if current value is larger, keep going until it reach the half left that's already sorted
* if current value is smaller, but larger than next value, put current value there, hence 'inserted' in
* works well in online algorithms where data coming in live or streaming and need to be inserted at the moment 
* Time complexity:
    * in general: O(n^2)
    * nearly sorted: almost O(n) like online algorithms that got new information at the end

## Better Sorting Algorithms
### Merge Sort
* exploit the face that 1 element (arrays of 0) is always sorted
* divide & conquer by 
    * repeatedly split an array until each one has only 1 element
    * merge them back into sorted 2 elements arrays
    * merge 2 element sorted arrays by comparing first item with another first item, the second with another second one.
    * merge & sort 2 sorted arrays together with 2 pointers for each array's length
