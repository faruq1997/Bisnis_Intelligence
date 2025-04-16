const questions = [
  {
    question: "Apa tujuan utama dari Business Intelligence?",
    options: ["Meningkatkan penjualan secara langsung", "Menyediakan informasi yang dapat mendukung pengambilan keputusan", "Mengurangi biaya produksi", "Mengembangkan aplikasi bisnis"],
    answer: 1
  },
  {
    question: "Komponen utama dari sistem BI adalah:",
    options: ["Keyboard, mouse, monitor", "Data warehouse, ETL, OLAP, dashboard", "Internet, jaringan, router", "Cloud, browser, server"],
    answer: 1
  },
  {
    question: "Peran utama Business Intelligence Analyst adalah:",
    options: ["Membuat hardware", "Menulis kode website", "Menganalisis data dan menyajikan insight", "Menjual produk ke pelanggan"],
    answer: 2
  },
  {
    question: "Berikut ini yang termasuk software visualisasi BI adalah:",
    options: ["Microsoft Word", "Power BI", "Adobe Photoshop", "Notepad"],
    answer: 1
  },
  {
    question: "Dalam BI, istilah 'dashboard' mengacu pada:",
    options: ["Perangkat untuk menampilkan laporan", "Perangkat keras", "Jenis database", "Proses pembersihan data"],
    answer: 0
  },
  {
    question: "Fungsi Data Warehouse adalah:",
    options: ["Menghapus data", "Menyimpan dan mengelola data historis", "Menyembunyikan data dari user", "Mengelola keuangan"],
    answer: 1
  },
  {
    question: "Apa arti ETL dalam konteks BI?",
    options: ["Edit, Transform, Load", "Extract, Transform, Load", "Extend, Transfer, Load", "Execute, Train, Learn"],
    answer: 1
  },
  {
    question: "Apa manfaat utama dari visualisasi data?",
    options: ["Membingungkan user", "Menyembunyikan data", "Memudahkan pemahaman insight", "Menghindari kesalahan input"],
    answer: 2
  },
  {
    question: "Tools yang banyak digunakan untuk manipulasi dan eksplorasi data adalah:",
    options: ["Paint", "Excel", "VLC", "Instagram"],
    answer: 1
  },
  {
    question: "Contoh keputusan berbasis BI adalah:",
    options: ["Menentukan warna logo", "Membuka cabang baru berdasarkan tren penjualan", "Memilih jenis huruf dokumen", "Membeli peralatan kantor"],
    answer: 1
  },
  {
    question: "Salah satu karakteristik data warehouse adalah:",
    options: ["Data berubah secara real-time", "Data tidak terstruktur", "Data bersifat tetap dan historis", "Data disimpan dalam spreadsheet saja"],
    answer: 2
  },
  {
    question: "Tabel fakta dalam star schema berisi:",
    options: ["Deskripsi pelanggan", "Data numerik dan metrik bisnis", "Nama provinsi", "Warna produk"],
    answer: 1
  },
  {
    question: "Dimensi dalam star schema digunakan untuk:",
    options: ["Pengolahan citra", "Deskripsi atribut non-numerik", "Kompresi data", "Menghapus data"],
    answer: 1
  },
  {
    question: "Tujuan utama proses ETL adalah:",
    options: ["Menyimpan file video", "Mengambil data dari berbagai sumber dan mengubahnya menjadi siap analisis", "Menghapus virus dari data", "Mencetak laporan secara manual"],
    answer: 1
  },
  {
    question: "Proses transformasi dalam ETL mencakup:",
    options: ["Mengonversi format data", "Mengubah struktur database", "Menghapus aplikasi", "Memperbesar ukuran file"],
    answer: 0
  },
  {
    question: "Data historis dalam warehouse berguna untuk:",
    options: ["Menyimpan data yang tidak dipakai", "Membuat laporan keuangan", "Analisis tren dan prediksi masa depan", "Backup email"],
    answer: 2
  },
  {
    question: "Data warehouse biasanya tidak digunakan untuk:",
    options: ["Data mining", "OLAP", "Transaksi operasional harian", "Analisis bisnis"],
    answer: 2
  },
  {
    question: "Metadata dalam BI merujuk pada:",
    options: ["Data dari kamera", "Data tentang data", "Data dari pengguna", "Data yang rusak"],
    answer: 1
  },
  {
    question: "Salah satu tools ETL populer adalah:",
    options: ["PowerPoint", "Talend", "Paint", "VLC"],
    answer: 1
  },
  {
    question: "Cloud Data Warehouse contohnya adalah:",
    options: ["Amazon Redshift", "Microsoft Paint", "Winamp", "WhatsApp"],
    answer: 0
  },
  {
    question: "Visualisasi data digunakan untuk:",
    options: ["Menyulitkan pembaca", "Menjelaskan insight dengan lebih cepat dan menarik", "Mengedit gambar", "Menghapus kolom"],
    answer: 1
  },
  {
    question: "OLAP berguna untuk:",
    options: ["Mencetak data", "Menjelajah data secara multidimensi", "Menambahkan password", "Menyalin data"],
    answer: 1
  },
  {
    question: "Yang bukan merupakan fungsi BI:",
    options: ["Menganalisis tren", "Menyimpan data pribadi", "Mendukung keputusan", "Menyediakan laporan"],
    answer: 1
  },
  {
    question: "Salah satu manfaat BI dalam perusahaan:",
    options: ["Menghambat proses kerja", "Mempercepat pengambilan keputusan", "Menambah biaya operasional", "Menutup peluang bisnis"],
    answer: 1
  },
  {
    question: "Alat visualisasi seperti Tableau digunakan untuk:",
    options: ["Menonton video", "Membuat grafik dan dashboard interaktif", "Menghapus file", "Melukis"],
    answer: 1
  },
  {
    question: "Drill down berarti:",
    options: ["Menambahkan data baru", "Menghapus data", "Melihat data lebih detail", "Mencetak grafik"],
    answer: 2
  },
  {
    question: "Salah satu output dari BI adalah:",
    options: ["Laporan analitik", "File musik", "Gambar animasi", "Halaman login"],
    answer: 0
  },
  {
    question: "Salah satu tujuan segmentasi pasar adalah:",
    options: ["Menambah stok produk", "Menargetkan strategi pemasaran", "Menghapus pelanggan", "Mengubah logo"],
    answer: 1
  },
  {
    question: "Apa itu insight dalam BI?",
    options: ["Warna pada dashboard", "Hasil analisis yang memberikan pemahaman", "Nama pengguna", "Ukuran data"],
    answer: 1
  },
  {
    question: "Business Intelligence membantu memahami:",
    options: ["Musik terbaru", "Perilaku pelanggan", "Aplikasi mobile", "Warna dokumen"],
    answer: 1
  },
  {
    question: "Skill yang wajib dimiliki BI Analyst:",
    options: ["Fotografi", "Analitik dan pemrograman", "Menjahit", "Menggambar"],
    answer: 1
  },
  {
    question: "Tool populer untuk analisis di BI:",
    options: ["CorelDraw", "Power BI", "Audacity", "CapCut"],
    answer: 1
  },
  {
    question: "Bahasa pemrograman untuk BI:",
    options: ["HTML", "Python dan R", "CSS", "JavaScript (frontend)"],
    answer: 1
  },
  {
    question: "Peran BI Manager:",
    options: ["Menjual produk", "Mengelola tim BI dan proyek analitik", "Mengurus penggajian", "Membuat poster"],
    answer: 1
  },
  {
    question: "Master Data Services bertanggung jawab atas:",
    options: ["Backup video", "Kolaborasi data lintas divisi", "Pembuatan aplikasi", "Promosi media sosial"],
    answer: 1
  },
  {
    question: "BI Consultant biasanya:",
    options: ["Freelancer dan konsultan eksternal", "Admin sosial media", "Petugas call center", "Asisten pribadi"],
    answer: 0
  },
  {
    question: "Kemampuan research dibutuhkan agar:",
    options: ["Bisa browsing film", "Bisa menyusun insight dari tren", "Bisa mengedit video", "Bisa membuat lagu"],
    answer: 1
  },
  {
    question: "Data literasi berarti:",
    options: ["Kemampuan membaca buku", "Kemampuan membaca dan menginterpretasi data", "Kemampuan membuat puisi", "Kemampuan mengetik cepat"],
    answer: 1
  },
  {
    question: "Tujuan BI Developer:",
    options: ["Membuat mobile game", "Membuat dashboard dan tools analitik", "Mengembangkan iklan", "Menyiapkan laporan keuangan"],
    answer: 1
  },
  {
    question: "Trend Business Intelligence saat ini mengarah pada:",
    options: ["Automasi dan artificial intelligence", "Manual input data", "Flash drive", "Penulisan laporan tangan"],
    answer: 0
  }
];
