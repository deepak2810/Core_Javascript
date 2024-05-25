function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle_idex = Math.floor((left + right) / 2);

    if (target == arr[middle_idex]) {
      return middle_idex;
    }

    if (target < arr[middle_idex]) {
      right = middle_idex - 1;
    } else {
      left = middle_idex + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, 3, 4, 6, 10], 10));
console.log(binarySearch([1, 2, 34, 5, 6], 12));
