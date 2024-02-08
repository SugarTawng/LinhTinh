#include <iostream>
using namespace std;

int main() {
	int choose;
	// Yêu cầu 1
	cout << "---- - Page Replacement algorithm-----" << endl;
	cout << "1. Chuoi tham chieu mac dinh." << endl;
	cout << "2. Nhap chuoi tham chieu bang tay" << endl;
	cin >> choose;

	if (choose == 1) {
		int defarr[] = { 0, 2, 1, 6, 4, 0, 1, 0, 3, 1, 2, 1 };
		for (int i = 0;i < 12;i++) {
			cout << defarr[i] << " ";
		}

		// Yêu cầu 2
		cout << "------Page Replacement algorithm-----" << endl;
		cout << "Nhap so khung trang: " << endl;
		int framee;
		cin >> framee;


		// Yêu cầu 3
		cout << "------Page Replacement algorithm-----" << endl;
		cout << "1.	Giai thuat FIFO" << endl;
		cout << "2.	Giai thuat OTP(optimal)" << endl;
		cout << "3.	Giai thuat LRU" << endl;
		cin >> choose;
		if (choose == 1) {
			cout << "Ban da chon FIFO";
		}
		else if (choose == 2) {
			cout << "Ban da chon cai thu 2";
		}
		else {
			cout << "Ban da chon cai thu 3";
		}

		// code đề cho
		int i, j, n=12, a[50], frames[5], frame=framee, k, available, count = 0;
		for (i = 1;i <= 12;i++)
			a[i] = defarr[i-1];
		for (i = 0;i < frame;i++)
			frames[i] = -1; // Giả sử ban đầu các frame trống
		j = 0;
		printf("\t|Chuoi|\t|Khung trang");
		for (k = 0;k < frame - 1;k++)
			printf("\t");
		printf("|\n");
		for (i = 1;i <= n;i++)
		{
			printf("\t|  %d  |\t", a[i]);
			available = 0; // trang không có sẵn
			for (k = 0;k < frame;k++)
				if (frames[k] == a[i]) // kiểm tra trang có sẵn
					available = 1; // trang có sẵn
			if (available == 0) // thay thế trang nếu không có sẵn
			{
				frames[j] = a[i];
				j = (j + 1) % frame;
				count++;
				printf("|");
				for (k = 0;k < frame;k++)
					printf("%d\t", frames[k]);
				printf("| F"); // Dấu hiệu nhận biết xảy ra lỗi trang
			}
			else
			{
				printf("|");
				for (k = 0;k < frame;k++)
					printf("%d\t", frames[k]);
				printf("|");
			}
			printf("\n");
		}
		printf("So trang loi la: %d\n", count);


	}
	else {
		int n, cusarr[100];
		cout << "Nhap vao so phan tu cua chuoi" << endl;
		cin >> n;
		cout << "Nhap vao cac phan tu: " << endl;
		for (int i = 0;i < n;i++) {
			cin >> cusarr[i];
		}
		for (int i = 0;i < n;i++) {
			cout << cusarr[i] << " ";
		}

		// Yêu cầu 2
		cout << "------Page Replacement algorithm-----" << endl;
		cout << "Nhap so khung trang: " << endl;
		int framee;
		cin >> framee;

		// Yêu cầu 3
		cout << "------Page Replacement algorithm-----" << endl;
		cout << "1.	Giai thuat FIFO" << endl;
		cout << "2.	Giai thuat OTP(optimal)" << endl;
		cout << "3.	Giai thuat LRU" << endl;
		cin >> choose;
		if (choose == 1) {
			cout << "m da chon FIFO";
		}
		else if (choose == 2) {
			cout << "m da chon cai thu 2";
		}
		else {
			cout << "m da chon cai thu 3";
		}
		
		//code đề cho
		int i, j, a[50], frames[5], frame = framee, k, available, count = 0;
		for (i = 1;i <= n;i++)
			a[i] = cusarr[i - 1];
		for (i = 0;i < frame;i++)
			frames[i] = -1; // Giả sử ban đầu các frame trống
		j = 0;
		printf("\t|Chuoi|\t|Khung trang");
		for (k = 0;k < frame - 1;k++)
			printf("\t");
		printf("|\n");
		for (i = 1;i <= n;i++)
		{
			printf("\t|  %d  |\t", a[i]);
			available = 0; // trang không có sẵn
			for (k = 0;k < frame;k++)
				if (frames[k] == a[i]) // kiểm tra trang có sẵn
					available = 1; // trang có sẵn
			if (available == 0) // thay thế trang nếu không có sẵn
			{
				frames[j] = a[i];
				j = (j + 1) % frame;
				count++;
				printf("|");
				for (k = 0;k < frame;k++)
					printf("%d\t", frames[k]);
				printf("| F"); // Dấu hiệu nhận biết xảy ra lỗi trang
			}
			else
			{
				printf("|");
				for (k = 0;k < frame;k++)
					printf("%d\t", frames[k]);
				printf("|");
			}
			printf("\n");
		}
		printf("So trang loi la: %d\n", count);

	}
		return 0;
	
}