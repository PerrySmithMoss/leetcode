import { ListNode } from "../206-Reverse-Linked-List/solution";

/**
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
