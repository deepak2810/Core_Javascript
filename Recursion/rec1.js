function recursion(N) {
  let sum = 0;

  if (N < 1) {
    return;
  }
  recursion(N - 1);
  /// after recursion.
  console.log(N);
  //   sum += N;
}

recursion(10);
