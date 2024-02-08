#pragma once
#pragma once
#include <iostream>
using namespace std;
class arrlist
{
private:
	int n;
	int* arr;
public:
	arrlist();
	void nhap();
	void xuat();
	friend istream& operator>>(istream& is, arrlist& a) {
		is >> a.n;
		a.arr = new int[a.n];
		for (int i = 0; i < a.n; i++)
		{
			is >> a.arr[i];
		}
		return is;
	}
	friend ostream& operator<<(ostream& os, const arrlist& a) {
		for (int i = 0; i < a.n;i++) {
			os << a.arr[i];
		}
		return os;
	}
	arrlist& operator=(const arrlist& b) {
		for (int i = 0;i < n;i++) {
			arr[i] = b.arr[i];
		}
		return *this;
	}

	int IndexOf(int value)const;
	~arrlist();
};
arrlist::arrlist()
{
	arr = NULL;
	n = 0;
}
void arrlist::nhap()
{
	cout << "\nNhap vao so luong phan tu: ";
	cin >> n;
	if (n != 0)
	{
		arr = new int[n];
		for (int i = 0; i < n; i++)
		{
			cin >> arr[i];
		}
	}
	else
	{
		cout << "\nKhong co phan tu de cap phat";
	}
}
void arrlist::xuat()
{
	for (int i = 0; i < n; i++)
	{
		cout << "\nMang can xuat la: " << arr[i] << endl;
	}
}



arrlist::~arrlist()
{
	delete[] arr;
}
