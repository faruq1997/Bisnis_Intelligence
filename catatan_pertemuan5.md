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

## Data Cleansing
Cari nilai yang kosong, bisa lakukan scanning perbaris ataupun dilakukan filtering dahulu, lalu cek nilai tiap kolom/fitur.
- Jika ada data yang tidak sesuai/seragam bisa disepakati untuk diseragamkan dahulu.
- Jika ada data yang kosong bisa diisi dengan rata-rata atau dengan nilai yang relevan/sesuai dengan isian data

## Data selection
- Analisis kolom/fitur mana saja yang akan digunakan, semisal jika kolom/fitur tersebut tidak berkorelasi, maka tidak usah digunakan. Biasanya untuk tahu bisa pakai Correlation Matrix. Kita akan pelajari itu nanti
- Untuk sekarang silahkan hapus saja kolom Id, No HP, Email, Alamat karena tidak kita butuhkan
