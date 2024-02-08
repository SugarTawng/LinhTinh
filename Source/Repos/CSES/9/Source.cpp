#include <iostream>

using namespace std;

int main() {
	int n;
	cin >> n;
	int s = 1;
	for (int i = 0;i < n;i++)
		s = 2 * s % ((int)1e9 + 7);
	cout << s;
	return 0;
}