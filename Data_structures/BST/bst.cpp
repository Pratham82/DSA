#include <bits/stdc++.h>
#include <array>

using namespace std;
int bst(vector<int> arr, int val)
{
  int low = 0;
  int high = arr.size();

  while (low <= high)
  {
    int mid = (low + high) / 2;
    if (val < arr[mid])
    {
      high = mid - 1;
    }
    else if (val > arr[mid])
    {
      low = mid + 1;
    }
    else
    {
      return mid;
    }
  }
  return -1;
}
int main(int argc, char *argv[])
{
  int arr[] = {10, 20, 30, 40, 50, 60, 70, 80, 90};
  vector<int> arr1 = {10, 20, 30, 40, 50, 60, 70, 80, 90};
  int a = 80;
  cout << bst(arr1, 90);
  cout << bst(arr1, 900);
}
