// function fibonacci(N) {
//   let p1 = 0;
//   let p2 = 1;

//   for (let i = 0; i < N; i++) {
//     let c = p1 + p2;
//     p1 = p2;
//     p2 = c;
//   }

//   return p1;
// }

// function fibonaccisecond(n) {
//   if (n <= 1) {
//     return 1;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

function tribonacci(n) {
  if (n <= 2) {
    return 0;
  }

  if (n == 3) {
    return 1;
  }

  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

console.log(tribonacci(5));
