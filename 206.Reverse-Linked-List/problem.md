## 206. Reverse Linked List

Given the `head` of a singly linked list, reverse the list, and return the reversed list.

##### Example 1:

> **Input:** head = [1,2,3,4,5] > **Outpt:** [5,4,3,2,1]

##### Example 2:

> **Input:** head = [1,2] > **Outpt:** [2,1]

##### Example 3:

> **Input:** head = []
> **Outpt:** []

###### Contraints:

- The number of nodes in the list is the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

> **Question**: A linked list can be reversed either iteratively or recursively. Could you implement both?
> **Answer**: Check the `reverseListRecursively` solution below.

## Solution

We first check if the `head` is `null` or the `head.next` is `null`, if either statement is `true` we know there is no point iterating over the nodes and thus we can short circuit the function and return the `head` straight away. Otherwise, we initialize two variables, one called `current`, and the other called `prev`. The `current` will keep track of the current node as we iterate through the list of nodes, this is initially set to `head` node as this is the first node we start our loop with. The other variable `prev` will hold the node previous to the `head` node, initially set to `null` because its the node before the `current`, AKA `null`. Next, the function enteres a `while` loop that will continue running until `current` is a falsy value (null, undefined etc.). We then initialize a variable called `tempNext`, which will hold the next node in the list upon each iteration. It is crucial that we hold the next node in our `tempNext` variable before we point the `cur.next` node to the `prev`, if we didn't do this, we would not be able to access that next node after pointing `cur.next` to the `prev` node. Aferwhich, we update the previous node to the current node, as the loop is moving through the list in ascending order. We end this block by setting the current node to the `tempNext` variable we created. Lastely, we return the `prev` varaible, as this is now the head of the reversed linked list.

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
 * Linked List (Iterative)
 *
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
var reverseList = function (head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;

  let current: ListNode | null = head;
  let prev: ListNode | null = null;

  while (current) {
    let tempNext: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = tempNext;
  }

  return prev;
};

/**
 * Linked List (Recursive)
 *
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
var reverseListRecursively = function (head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;

  var res = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return res;
};
```
