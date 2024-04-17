const arr = [];

function fizzBuzz(n) {
  let count3 = 0;
  let count5 = 0;
  for (let i = 1; i <= n; i++) {
    count3++;
    count5++;

    if (count3 == 3 && count5 == 5) {
      count3 = 0;
      count5 = 0;
      arr.push("FizzBuzz");
    } else if (count3 == 3) {
      arr.push("Fizz");
      count3 = 0;
    } else if (count5 == 5) {
      arr.push("Buzz");
      count5 = 0;
    } else {
      arr.push(i);
    }
  }

  return arr;
}

console.log(fizzBuzz(15));
