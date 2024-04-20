// JS program for normal linear search.

function linearsearch(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return i;
    }
  }

  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(linearsearch(arr, 10));
