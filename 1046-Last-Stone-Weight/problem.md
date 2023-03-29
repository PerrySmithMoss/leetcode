## 1046. Last Stone Weight

You are given an array of integers `stones` where `stones[i]` is the weight of the `ith` stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights `x` and `y` with `x <= y`. The result of this smash is:

If `x == y`, both stones are destroyed, and
If `x != y`, the stone of weight `x` is destroyed, and the stone of weight `y` has new weight `y - x`.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return `0`.

##### Example 1:

> **Input:** stones = [2,7,4,1,8,1] 
> **Output**: 1
> **Explanation:**
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

##### Example 2:

> **Input:** stones = [1] 
> **Output:** 1

###### Contraints:

- `1 <= stones.length <= 30`
- `1 <= stones[i] <= 1000`

## Solution

For this solution we initialize a `MaxPriorityQueue` (pQ) and set that to the `pQ` variable. We then loop over the `stones` array and add each element to the `pQ`. Upon each addition to the `pQ` it will sort the values from largest to smallest, hence the name 'Max' priority queue. Once the stones have been added and sorted we will create a `while` loop which will run until the `pQ` size is greater than `1`. Within each iteration we subtract the second largest value from the largest value, if the difference is greater than `0` we add that difference back into the `pQ`. When the `pQ` has a size of `1` or less we either return `0` if the size is `0` or we return the last element. 

##### Complexity

- Time O(n log n)
- Space O(n)

##### Code

```javascript
class MaxPriorityQueue {
  heap: number[];
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }
  getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index: number) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index: number) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index: number) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index: number) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index: number) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index: number) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne: number, indexTwo: number) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item: number) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] > this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const pQ = new MaxPriorityQueue();

  for (const stone of stones) pQ.add(stone);

  while (pQ.size() > 1) {
    let diff = pQ.remove() - pQ.remove();

    if (diff > 0) pQ.add(diff);
  }

  return pQ.size() === 0 ? 0 : pQ.peek();
};
```
