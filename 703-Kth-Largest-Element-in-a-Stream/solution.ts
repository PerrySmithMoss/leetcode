/**
 * MaxPriorityQueue / Max Heap
 * Time O(n log n) | Space O(k)
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * @param {number} k
 * @param {number[]} nums
 * @return {KthLargest}
 */
class KthLargest {
  minHeap: MinHeap;
  constructor(k: number, nums: number[]) {
    this.minHeap = new MinHeap(k);

    for (const n of nums) {
      this.minHeap.add(n);
    }
  }

  add(val: number) {
    this.minHeap.add(val);

    return this.minHeap.peek();
  }
}

/**
 * @param {number} size
 * @param {number[]} minHeap
 * @return {MinHeap}
 */
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
