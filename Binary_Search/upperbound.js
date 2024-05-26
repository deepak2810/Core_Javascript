function upperBound(arr, n, target) {
  let left = 0,
    right = n - 1,
    ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      ans = mid;
      right = mid - 1;
    }
  }

  return ans;
}

let arr = [3, 6, 7, 7, 8, 10];

let m = arr.length;

let target = 6;

console.log(upperBound(arr, m, target));
