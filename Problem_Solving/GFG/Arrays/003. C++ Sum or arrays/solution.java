class Compute {

  public long getSum(long a[], long n) {
    // Your code goes here
    int sum = 0;
    for (int i : a)
      sum += i;
    return sum;
  }
}
