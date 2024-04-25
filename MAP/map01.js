let arr = [1, 2, 3, 4, 5];

const squares = arr.map(square);
const cubes = arr.map(cubes);

console.log(cubes);

function square(n) {
  return Math.pow(n, 2);
}

function cubes(n) {
  return Math.pow(n, 3);
}
