import java.util.Arrays;

class Compute {

  public void rotate(long arr[], long n) {
    long x = arr[arr.length - 1];
    for (int i = arr.length - 1; i > 0; i--)
      arr[i] = arr[i - 1];
    arr[0] = x;
  }
}
