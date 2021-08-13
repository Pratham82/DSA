#include <vector>
#include <string>
#include <iostream>
std::vector<int> reverseArr(int num)
{
    std::vector<int> arr = {};
    int rev = 0;
    while (num > 0)
    {
        rev = rev * 10 + rev % 10;
        num = num / 10;
        arr.push_back(rev);
    }
    for (int i : arr)
    {
        cout << i << endl;
    }
}

int main(int argc, const char **argv)
{
    reverseArr(1485979);
}
