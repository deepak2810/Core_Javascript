/**
 * @param {number[]} arr
 * @param {number} index
 * @param {number} ele
 */
function replaceElement(arr, index, ele) {
  // You only need to implement this function.
  if (index > arr.length - 1) {
    arr.push(ele);
  } else {
    arr[index] = ele;
  }
}

var arr = [9, 1, 7, 4];
if (replaceElement([9, 1, 3, 4], 2, 7) && arr != [9, 1, 7, 4])
  console.log(
    "Test fails: Expected [9, 1, 7, 4] for input arr = [9, 1, 3, 4], index = 2 and ele = 7"
  );
else
  console.log(
    "Sample test case for input arr = [9, 1, 3, 4], index = 2 and ele = 7 passed!"
  );

module.exports = replaceElement;
