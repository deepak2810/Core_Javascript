// Matrix based program in JS.

function iterateMatrix(arr) {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      console.log(arr[row][col]);
    }
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

iterateMatrix(matrix);

function onlyLine(arr, b) {
  console.log(arr[b]);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(onlyLine(matrix, 0));
