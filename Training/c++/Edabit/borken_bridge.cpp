#include <string>
#include <iostream>
using namespace std;

bool isSafeBridge(string s)
{
	bool isSafe = true;
	for (int i = 0; i < s.length(); i++)
	{
		if (s[i] == ' ')
		{
			isSafe = false;
		}
	}
	return isSafe;
}

int main()
{

	// isSafeBridge("TTTT");
	cout << isSafeBridge("####") << endl;
	cout << isSafeBridge("## ####");
}