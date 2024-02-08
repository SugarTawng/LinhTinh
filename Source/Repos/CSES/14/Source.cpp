#include <iostream>
using namespace std;


int main() {
	int n, p[20];
	cin >> n;
	long s = 0, ans = 0;
	for (int i = 0;i < n;i++) {
		cin >> p[i];
		s += p[i];
	}
	for (int i = 0;i < 1 << n;i++) {
		long cs = 0;
		for (int j = 0;j < n;j++) {
			if (i >> j & 1)
				cs += p[j];
		}
		if (cs <= s / 2)
			ans = max(ans, cs);
	}
	cout << s - 2 * ans;
}