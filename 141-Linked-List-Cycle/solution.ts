import { ListNode } from "../206-Reverse-Linked-List/solution";

/**
 * Linked List (Iterative)
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next || !head.next.next) return false;

  let turtle = head.next;
  let hare = head.next.next;

  while (turtle.next && hare.next && hare.next.next) {
    if (turtle === hare) return true;

    turtle = turtle.next;
    hare = hare.next.next;
  }

  return false;
}
