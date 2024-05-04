// function reverse(str) {
//   let a = 0;
//   let b = str.length - 1;

//   let temp;

//   while (a < b) {
//     temp = str[a];
//     str[a] = str[b];
//     str[b] = temp;
//   }

//   console.log(str);
// }

// console.log(reverse("abc"));

let str = "aaabb";

let count = 1;

let ans = "";
let char = str[0];

for (let i = 1; i < str.length; i++) {
  char = str.charAt(i);

  if (char == str[i]) {
    count++;
  } else {
    if (count > 1) {
      ans += count;
    } else {
      ans += char;
    }
  }

  // char = str[i];
  count = 1;
}

console.log(ans);
