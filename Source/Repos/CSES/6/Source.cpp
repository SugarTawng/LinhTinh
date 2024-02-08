#include <iostream>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie();

	long long t, x, y, z, z2, ans;
	cin >> t;
	while (t--) {
		cin >> y >> x;
		z = max(x, y);
		z2 = (z - 1)*(z - 1);
		if (z % 2) {
			if (y == z) ans = z2 + x;
			else ans = z2 + 2 * z - y;
		}
		else {
			if (x == z) ans = z2 + y;
			else ans = z2 + 2 * z - x;
		}
		cout << ans << "\n";
	}
	return 0;
}