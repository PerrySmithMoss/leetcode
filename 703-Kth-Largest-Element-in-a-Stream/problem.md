## 703. Kth Largest Element in a Stream

Design a class to find the `kth` largest element in a stream. Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

Implement `KthLargest` class:

- `KthLargest(int k, int[] nums)` Initializes the object with the integer `k` and the stream of integers `nums`.
- `int add(int val)` Appends the integer `val` to the stream and returns the element representing the `kth` largest element in the stream.

##### Example 1:

> **Input:** ["KthLargest", "add", "add", "add", "add", "add"]
> [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
> **Output**: [null, 4, 5, 5, 8, 8] > **Explanation:**
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3); // return 4
kthLargest.add(5); // return 5
kthLargest.add(10); // return 5
kthLargest.add(9); // return 8
kthLargest.add(4); // return 8

##### Example 2:

> **Input:** stones = [1]
> **Output:** 1

###### Contraints:

- `1 <= k <= 104`
- `0 <= nums.length <= 104`
- `-104 <= nums[i] <= 104`
- `-104 <= val <= 104`
- At most `104` calls will be made to `add`.
- It is guaranteed that there will be at least `k` elements in the array when you search for the `kth` element.

## Solution

Within our `KthLargest` class we first instantiate a `MinHeap` class, passing `k` to be the max size of the `MinHeap`. We then iterate through `nums` and `add` each `number` to our `MinHeap`. This `add` function inside our `MinHeap` class first checks if the heap is less than the `size` we instantiated our `MinHeap` with. If this is the case we push the `number` into the heap and initialize two variables, 1. `i` - this will hold the index of the last element in the heap, 2. `parent` - this will hold the parent node of the last element in the heap `i`. We then start a while loop which will run until the `parent` is greater than or equal to 0 and the value of the last element in the array is less than it's parent's value. Within each iteration of the while loop we swap the last element in the array with it's parent and then reassign `i` to be the `parent` and reassign `parent` to be the parent of `parent`. If the size of the heap becomes less than the max `size` we check if the first element in the heap is less than the `number` being added, if that is the case we reassign the first element in the heap to be the `number` being added. We then run our `heapify` function which will sort our heap from the smallest number to the largest. When a new number is added to the `KthLargest` class is will call our `MinHeap` add function that we just discussed above and then return the first element in the heap. That value being the `Kth` largest element in the stream. 

##### Complexity

- Time O(n log (n))
- Space O(k)

##### Code

```javascript
class KthLargest {
  minHeap: MinHeap;
  constructor(k: number, nums: number[]) {
    this.minHeap = new MinHeap(k);

    for (const number of nums) {
      this.minHeap.add(n);
    }
  }

  add(val: number) {
    this.minHeap.add(val);

    return this.minHeap.peek();
  }
}

class MinHeap {
  size: number;
  minHeap: number[];
  constructor(size: number) {
    this.size = size;
    this.minHeap = [];
  }

  swap(arr: number[], i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  heapify(i: number) {
    let heap = this.minHeap;
    let n = heap.length;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let smallest = i;
    if (left < n && heap[smallest] > heap[left]) smallest = left;
    if (right < n && heap[smallest] > heap[right]) smallest = right;
    if (smallest != i) {
      this.swap(heap, smallest, i);
      this.heapify(smallest);
    }
  }
  add(val: number) {
    let heap = this.minHeap;
    if (heap.length < this.size) {
      heap.push(val);
      let i = heap.length - 1;
      let parent = ((i - 1) / 2) | 0;
      while (parent >= 0 && heap[i] < heap[parent]) {
        this.swap(heap, parent, i);
        i = parent;
        parent = ((parent - 1) / 2) | 0;
      }
    } else if (heap[0] < val) {
      heap[0] = val;
      this.heapify(0);
    }
  }
  peek() {
    return this.minHeap[0];
  }
}
```
