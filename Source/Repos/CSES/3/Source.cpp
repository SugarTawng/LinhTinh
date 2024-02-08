#include <iostream>
using namespace std;

int main() {
	string s;
	cin >> s;
	int len = 0, maxi = 0;
	char l = 'A';
	for (char d : s) {
		if (d == l) {
			len++;
			maxi = max(len, maxi);
		}
		else {
			l = d;
			len = 1;
		}
	}
	cout << maxi;
}