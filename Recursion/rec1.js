function recursion(N) {
  if (N < 1) {
    return;
  }

  console.log(N);
  recursion(N - 1);
}

recursion(10);
