// Magic metrics problem in JS.

let met = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];

// arr[0][0]
// arr[0][1]
// arr[0][2]

function rowSum(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[n][i];
  }

  return sum;
}

let a = 0;
let ans = 0;

while (a < met.length) {
  a++;
}

console.log(ans);
