## 141. Linked List Cycle

Given head, the `head` of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. Note that `pos` is not passed as a parameter.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

##### Example 1:

> **Input:** head = [3,2,0,-4], pos = 1
> **Output:** true
> **Explination:** There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

##### Example 2:

> **Input:** head = [1,2], pos = 0
> **Output:** true
> **Explination:** There is a cycle in the linked list, where the tail connects to the 0th node.

##### Example 3:

> **Input:** head = [1], pos = -1
> **Output:** false
> **Explination:** There is no cycle in the linked list.

###### Contraints:

- The number of the nodes in the list is in the range `[0, 104]`.
- `-105 <= Node.val <= 105`
- `pos` is `-1` or a valid index in the linked-list.

> **Follow-up**: Can you solve it using O(1) (i.e. constant) memory?
> **Answer**: The solution below has a space complexity of `O(1)`, as it only uses two variables to keep track of the pointers.

## Solution

For this problem we utilize [`Floyd's tortoise and hare algorithm`](https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_tortoise_and_hare:~:text=Floyd%27s%20tortoise%20and%20hare%5Bedit%5D). The idea behind the algorithm is that, if you have two pointers in a linked list, one moving twice as fast (the hare) than the other (the tortoise), then if they intersect, there is a cycle in the linked list. If they don't intersect, then there is no cycle. 

As you can see by the solution below, we first check if there is a `head`, `head.next` or `head.next.next`, if there isn't we know there is no cycle and we can simply return `false`. Otherwise, we initialize two variables, one called `turtle` which will act as our slow pointer, which will shift by one as we traverse the linked list. There other being `hare` which will act as our fast pointer, which will shift by two as we traverse the linked list. Next we enter a `while` loop that will continue running until the `turtle.next`, `hare.next` and `hare.next.next` pointers contain a node. At this point we check if `turtle` is equal to `hare`, if this is the case we know that there is a cycle in the list and we return `true`. If this is not the case we shift our `turtle` pointer by one and `hare` pointer by two. This process is repeated until we reach the end of the linked list, and if we reach this point we know that the list does not contain a cycle, so we return `false`.

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
var hasCycle = function (head: ListNode | null): boolean {
  if (!head || !head.next || !head.next.next) return false;

  let turtle = head.next;
  let hare = head.next.next;

  while (turtle.next && hare.next && hare.next.next) {
    if (turtle === hare) return true;

    turtle = turtle.next;
    hare = hare.next.next;
  }

  return false;
};
```
