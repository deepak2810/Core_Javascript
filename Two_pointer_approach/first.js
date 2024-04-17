function twoPointer(arr) {
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] > arr[right]) {
      return false;
    }

    left++;
    right++;
  }

  return true;
}

let arr = [10, 20, 30, 40, 50, 60];

console.log(twoPointer(arr));
