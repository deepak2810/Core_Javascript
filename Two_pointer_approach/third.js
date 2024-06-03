function twoSum(nums, target) {
  let n = nums.length;
  let ans = [];

  for (let i = 0; i < n; i++) {
    ans.push([nums[i], i]);
  }

  ans.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = n - 1;

  while (left < right) {
    let currentSum = ans[left][0] + ans[right][0];

    if (currentSum < target) {
      left++;
    } else if (currentSum > target) {
      right--;
    } else {
      return [ans[left][1], ans[right][1]].sort((a, b) => a - b);
    }
  }

  return -1;
}

let arr = [2, 7, 11, 15];

let target = 17;

console.log(twoSum(arr, target));
