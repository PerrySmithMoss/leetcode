import { ListNode } from "../206-Reverse-Linked-List/solution";

/**
 * Merge Two Linked Lists (Iterative)
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(
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
}
