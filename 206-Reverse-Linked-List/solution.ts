//   Definition for singly-linked list.
export class ListNode {
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  val: number;
  next: ListNode | null;
}

/**
 * Linked List (Iterative)
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/reverse-linked-list
 *
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
function reverseList(head: ListNode | null): ListNode | null {
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
}

/**
 * Linked List (Recursive)
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/reverse-linked-list
 *
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
function reverseListRecursively(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;

  var res = reverseListRecursively(head.next);

  head.next.next = head;
  head.next = null;

  return res;
}
