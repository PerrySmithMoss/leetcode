## 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

##### Example 1:

> **Input:** list1 = [1,2,4] list2 = [1,3,4] 
> **Output:** [1,1,2,3,4,4]

##### Example 2:

> **Input:** list1 = [], list2 = []
> **Output:** []

##### Example 3:

> **Input:** list1 = [], list2 = [0] 
> **Output:** [0]

###### Contraints:

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in non-decreasing order.

## Solution

We begin by first instantiating a new head node called `mergedList`. We then begin enter a `while` loop that will continue running until `list1` or `list2` is a falsy value (null, undefined etc.). At this point we check if the first value in `list1` is less than the first value in `list2`, whichever value is smaller we append it to the new `head` node and move the `current` pointer to the next node. This process is repeated until we reach the end of a linked list. We then set `current.next` to the remaining list, as that list will contain the last node. Lastely, we return the next node because the `head` is initialized to 0.

##### Complexity

- Time O(n)
- Space O(1)

##### Code

```javascript
/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  val: number;
  next: ListNode | null;
}

/**
 * Merge Two Linked Lists (Iterative)
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const head = new ListNode();
  let current = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1) current.next = list1;
  if (list2) current.next = list2;

  return head.next;
};
```
