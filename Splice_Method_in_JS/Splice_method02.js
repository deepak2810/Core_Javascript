// We are given an index from which we want to delete all the elements and also how many elements to delete in the array ?

const test_arr = ["Jan", "Feb", "March", "April", "May", "June"];

function spliceDemo(arr, startindex, deletecount) {
  const deleted_elements = arr.splice(startindex, deletecount);
  return deleted_elements;
}

console.log(spliceDemo(test_arr, 3, 3));
