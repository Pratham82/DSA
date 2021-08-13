#include <iostream>
#include <string>
#include <vector>
#include <ostream>
using namespace std;

vector<int> reverseArr(int num)
{
	std::vector<int> arr = {};
	// for (int i = n1.length() - 1; i > 0; i--)
	// {
	// 	arr.insert(arr.end(), n1[i]);
	// }
	// for (int i : arr)
	// {
	// 	cout << arr[i] << endl;
	// }
	// for (int i = n1.length() - 1; i >= 0; i--)
	// {
	// 	s1 += n1[i];
	// }
	// for (int j = 0; j < s1.length(); j++)
	// {
	// 	cout << s1[j] << endl;
	// 	int n = int(s1[j]);
	// 	arr.push_back(n);
	// }
	// int n2 = std::stoi(s1);
	// cout << n2;
	// for (int i : arr)
	// {
	// 	cout << i << endl;
	// }
	int rev_num = 0;
	while (num > 0)
	{
		rev_num = rev_num * 10 + num % 10;
		cout << rev_num << endl;
		// num = num / 10;
	}
	std::string s1 = std::to_string(rev_num);
	// for (char c : s1)
	// {
	// 	cout << c << endl;
	// 	// arr.push_back(atoi(c));
	// }
	// for (int i : arr)
	// {
	// 	cout << i << endl;
	// }
	return arr;
}
int main(int argc, char const *argv[])
{
	reverseArr(1485979);
}
