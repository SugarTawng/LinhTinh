#include <iostream>
#include <string>
#include <cstring>
#include <numeric>
#include <algorithm>

using namespace std;

int main() {
	string s[8];
	bool b[15];
	for (int i = 0;i < 8;i++) {
		cin >> s[i];
	}
	int ans = 0, p[8];
	iota(p, p + 8, 0);
	do
	{
		bool ok = 1;
		for (int i = 0;i < 8;i++)
			ok &= s[i][p[i]] == '.';
		memset(b, 0, 15);
		for (int i = 0;i < 8;i++) {
			if (b[i + p[i]])
				ok = 0;
			b[i + p[i]] = 1;
		}
		memset(b, 0, 15);
		for (int i = 0;i < 8;i++) {
			if (b[i + 7 - p[i]])
				ok = 0;
			b[i + 7 - p[i]] = 1;
		}
		ans += ok;
	} while (next_permutation(p,p+8));
	cout << ans;
	return 0;
}