// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");

let arr = [
  [1, 2, 3],

  [4, 5, 6],

  [7, 8, 9],
];

// for (let i = 0; i<arr.length; i++){
// (arr[i].reverse());
// }

// console.log(arr);

function transposeMatrix(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  // Initialize a new array

  let transpose = [];

  // Iterate over the columns of original array

  for (let j = 0; j < col; j++) {
    transpose[j] = [];

    for (let i = 0; i < row; i++) {
      transpose[j][i] = matrix[i][j];
    }
  }

  for (let a = 0; a < transpose.length; a++) {
    transpose[a].reverse();
  }

  return transpose;
}

console.log(transposeMatrix(arr));
