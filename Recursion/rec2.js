function naturalSum(N) {
  if (N <= 1) {
    return 1;
  }

  return N * naturalSum(N - 1);
}

console.log(naturalSum(4));
