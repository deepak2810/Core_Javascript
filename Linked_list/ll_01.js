// define linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let n = new Node(20);
let n1 = new Node(30);
let n2 = new Node(40);
let n3 = new Node(50);

/// creating next .

n.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = new Node(60);

console.log(n);
console.log(n1);
console.log(n2);
