#include <iostream>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);

	long n, a1, ans;
	cin >> n;
	for (int i = 1;i <= n;i++) {
		a1 = i * i;
		ans = a1 * (a1 - 1) / 2;
		if (i > 2) {
			ans -= 4 * (i - 1) * (i - 2);
		}
		cout << ans << "\n";
	}
}