// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function removeKFromList(l,k) {
  if (l === null) return null;
  else {
    l.next = removeKFromList(l.next, k);
    return (l.value === k) ? l.next : l;
  }
}


function isListPalindrome(l) {
  let arr = [];

  while (l) {
    arr.push(l.value);

    l = l.next
  }

  return (arr.toString() == arr.reverse().toString());
}
