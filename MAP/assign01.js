let arr = [1, 2, 2, 3, 3];

let res_map = new Map();

for (let i = 0; i < arr.length; i++) {
  if (res_map.has(arr[i])) {
    let count = res_map.get(arr[i]);
    count++;
    res_map.set(arr[i], count);
  } else {
    res_map.set(arr[i], 1);
  }
}

console.log(res_map);
