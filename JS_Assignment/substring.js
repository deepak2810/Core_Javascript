// let test = "This is a example string example";
// let stest = "example";

// const a = console.log(test.indexOf(stest));
// const b = console.log(test.lastIndexOf(stest));

// if (a !== b) {
//   console.log("false");
// }

function checkForSubstr(str, substr) {
  // let index_first = str.indexOf(substr);
  // const index_last = str.lastIndexOf(substr);

  const a = str.indexOf(substr);
  const b = str.lastIndexOf(substr);

  if (a == b) {
    return "true";
  } else {
    return "false";
  }
}

let test = "abcdefghi";
let stest = "def";

console.log(checkForSubstr(test, stest));
