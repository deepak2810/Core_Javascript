class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

function addAtEnd(head, val) {
  let cur = head;

  while (cur.next != null) {
    cur = head.next;
  }

  cur.next = new Node(val);
}
