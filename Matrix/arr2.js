let arr = [
  [2, 3, 4],
  [5, 6, 7],
  [9, 10, 11],
];

function iterateColumn(arr, col) {
  for (let row = 0; row < arr.length; row++) {
    console.log(arr[row][col]);
  }
}

console.log(iterateColumn(arr, 1));
