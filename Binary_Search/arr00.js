let str = "hello world";

function reverseArr(str) {
  let arr = str.split(" ");

  //   console.log(arr);

  let res = arr.filter((i) => i !== "");

  let i = 0;

  let j = arr.length - 1;

  let temp;

  while (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
  }

  return arr.join("");
}

console.log(reverseArr(str));
