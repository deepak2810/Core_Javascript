let arr = [1, 2, 3, 4, 5];

const squares = arr.map(square);

console.log(squares);

function square(n) {
  return Math.pow(n, 2);
}
