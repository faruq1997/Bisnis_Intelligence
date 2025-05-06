## Data Integration di Excel
```excel
=VLOOKUP(A2,'Data Nasabah'!$A$2:$G$61,{2,3,4,5,6,7},FALSE)
```

**Penjelasan per elemen:**

* `VLOOKUP`: Fungsi untuk mencari data di kolom pertama dari sebuah tabel dan mengembalikan nilai dari kolom lain yang sebaris.
* `A2`: Nilai yang dicari (lookup value). Dalam hal ini, Excel akan mencari nilai dari sel `A2`.
* `'Data Nasabah'!$A$2:$G$61`: Tabel sumber data, mulai dari kolom A hingga G dan baris 2 sampai 61 di sheet bernama **Data Nasabah**.
* `{2,3,4,5,6,7}`: Ini **tidak valid** dalam fungsi `VLOOKUP` biasa. Fungsi `VLOOKUP` hanya menerima satu indeks kolom (misalnya `2` untuk kolom B). Daftar array `{2,3,4,...}` hanya dapat dipakai dalam **array formula** atau versi Excel yang mendukung **dynamic array** (seperti Excel 365 atau Excel 2019 ke atas).
* `FALSE`: Menandakan bahwa pencarian harus **tepat sama** (exact match), bukan pendekatan (approximate match).
