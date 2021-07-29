#include <string>
#include <iostream>

using namespace std;
std::string longBurp(int n)
{
	string val = "Bu";
	for (int i = 0; i < n; i++)
	{
		val += "r";
	}

	return val + "p";
}
int main(int argc, char const *argv[])
{
	/* code */
	cout << longBurp(3);
}
