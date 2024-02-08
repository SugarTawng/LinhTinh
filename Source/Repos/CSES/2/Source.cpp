#include <iostream>
using namespace std;

int main() {
	long long n, s=0, x;
	cin >> n;
	for (int i = 0;i < n-1;i++) {
		cin >> x;
		s += x;
	}
	cout << n * (n + 1) / 2 - s;
}