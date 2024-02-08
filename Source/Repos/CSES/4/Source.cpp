#include <iostream>
using namespace std;

int main() {
	long long n, x, fix=0, ans = 0;
	cin >> n;
	for (int i = 0; i < n;i++) {
		cin >> x;
		fix= max(fix,x);
		ans += fix - x;
	}
	cout << ans;
	return 0;
}