function solve(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];

    if (currentSum < target) {
      left++;
    } else if (currentSum > target) {
      right--;
    } else {
      return [arr[left], arr[right]];
    }
  }

  return [-1, -1];
}

let arr = [3, 4, 5, 6, 7];
let target = 12;

console.log(solve(arr, target));
