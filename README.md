# colt-algorithm-course

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
