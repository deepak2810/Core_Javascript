// program to swap two numbers using xor operator.

let a = 10;
let b = 20;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a);
console.log(b);
