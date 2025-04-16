const questions = [
  {
    question: "Apa tujuan utama dari Business Intelligence?",
    options: ["Meningkatkan penjualan secara langsung", "Menyediakan informasi yang dapat mendukung pengambilan keputusan", "Mengurangi biaya produksi", "Mengembangkan aplikasi bisnis"],
    correct: 1
  },
  {
    question: "Komponen utama dari sistem BI adalah:",
    options: ["Keyboard, mouse, monitor", "Data warehouse, ETL, OLAP, dashboard", "Internet, jaringan, router", "Cloud, browser, server"],
    correct: 1
  },
  {
    question: "Peran utama Business Intelligence Analyst adalah:",
    options: ["Membuat hardware", "Menulis kode website", "Menganalisis data dan menyajikan insight", "Menjual produk ke pelanggan"],
    correct: 2
  },
  {
    question: "Berikut ini yang termasuk software visualisasi BI adalah:",
    options: ["Microsoft Word", "Power BI", "Adobe Photoshop", "Notepad"],
    correct: 1
  },
  {
    question: "Dalam BI, istilah 'dashboard' mengacu pada:",
    options: ["Perangkat untuk menampilkan laporan", "Perangkat keras", "Jenis database", "Proses pembersihan data"],
    correct: 0
  },
  {
    question: "Fungsi Data Warehouse adalah:",
    options: ["Menghapus data", "Menyimpan dan mengelola data historis", "Menyembunyikan data dari user", "Mengelola keuangan"],
    correct: 1
  },
  {
    question: "Apa arti ETL dalam konteks BI?",
    options: ["Edit, Transform, Load", "Extract, Transform, Load", "Extend, Transfer, Load", "Execute, Train, Learn"],
    correct: 1
  },
  {
    question: "Apa manfaat utama dari visualisasi data?",
    options: ["Membingungkan user", "Menyembunyikan data", "Memudahkan pemahaman insight", "Menghindari kesalahan input"],
    correct: 2
  },
  {
    question: "Tools yang banyak digunakan untuk manipulasi dan eksplorasi data adalah:",
    options: ["Paint", "Excel", "VLC", "Instagram"],
    correct: 1
  },
  {
    question: "Contoh keputusan berbasis BI adalah:",
    options: ["Menentukan warna logo", "Membuka cabang baru berdasarkan tren penjualan", "Memilih jenis huruf dokumen", "Membeli peralatan kantor"],
    correct: 1
  },
  {
    question: "Salah satu karakteristik data warehouse adalah:",
    options: ["Data berubah secara real-time", "Data tidak terstruktur", "Data bersifat tetap dan historis", "Data disimpan dalam spreadsheet saja"],
    correct: 2
  },
  {
    question: "Tabel fakta dalam star schema berisi:",
    options: ["Deskripsi pelanggan", "Data numerik dan metrik bisnis", "Nama provinsi", "Warna produk"],
    correct: 1
  },
  {
    question: "Dimensi dalam star schema digunakan untuk:",
    options: ["Pengolahan citra", "Deskripsi atribut non-numerik", "Kompresi data", "Menghapus data"],
    correct: 1
  },
  {
    question: "Tujuan utama proses ETL adalah:",
    options: ["Menyimpan file video", "Mengambil data dari berbagai sumber dan mengubahnya menjadi siap analisis", "Menghapus virus dari data", "Mencetak laporan secara manual"],
    correct: 1
  },
  {
    question: "Proses transformasi dalam ETL mencakup:",
    options: ["Mengonversi format data", "Mengubah struktur database", "Menghapus aplikasi", "Memperbesar ukuran file"],
    correct: 0
  },
  {
    question: "Data historis dalam warehouse berguna untuk:",
    options: ["Menyimpan data yang tidak dipakai", "Membuat laporan keuangan", "Analisis tren dan prediksi masa depan", "Backup email"],
    correct: 2
  },
  {
    question: "Data warehouse biasanya tidak digunakan untuk:",
    options: ["Data mining", "OLAP", "Transaksi operasional harian", "Analisis bisnis"],
    correct: 2
  },
  {
    question: "Metadata dalam BI merujuk pada:",
    options: ["Data dari kamera", "Data tentang data", "Data dari pengguna", "Data yang rusak"],
    correct: 1
  },
  {
    question: "Salah satu tools ETL populer adalah:",
    options: ["PowerPoint", "Talend", "Paint", "VLC"],
    correct: 1
  },
  {
    question: "Cloud Data Warehouse contohnya adalah:",
    options: ["Amazon Redshift", "Microsoft Paint", "Winamp", "WhatsApp"],
    correct: 0
  },
  {
    question: "Visualisasi data digunakan untuk:",
    options: ["Menyulitkan pembaca", "Menjelaskan insight dengan lebih cepat dan menarik", "Mengedit gambar", "Menghapus kolom"],
    correct: 1
  },
  {
    question: "OLAP berguna untuk:",
    options: ["Mencetak data", "Menjelajah data secara multidimensi", "Menambahkan password", "Menyalin data"],
    correct: 1
  },
  {
    question: "Yang bukan merupakan fungsi BI:",
    options: ["Menganalisis tren", "Menyimpan data pribadi", "Mendukung keputusan", "Menyediakan laporan"],
    correct: 1
  },
  {
    question: "Salah satu manfaat BI dalam perusahaan:",
    options: ["Menghambat proses kerja", "Mempercepat pengambilan keputusan", "Menambah biaya operasional", "Menutup peluang bisnis"],
    correct: 1
  },
  {
    question: "Alat visualisasi seperti Tableau digunakan untuk:",
    options: ["Menonton video", "Membuat grafik dan dashboard interaktif", "Menghapus file", "Melukis"],
    correct: 1
  },
  {
    question: "Drill down berarti:",
    options: ["Menambahkan data baru", "Menghapus data", "Melihat data lebih detail", "Mencetak grafik"],
    correct: 2
  },
  {
    question: "Salah satu output dari BI adalah:",
    options: ["Laporan analitik", "File musik", "Gambar animasi", "Halaman login"],
    correct: 0
  },
  {
    question: "Salah satu tujuan segmentasi pasar adalah:",
    options: ["Menambah stok produk", "Menargetkan strategi pemasaran", "Menghapus pelanggan", "Mengubah logo"],
    correct: 1
  },
  {
    question: "Apa itu insight dalam BI?",
    options: ["Warna pada dashboard", "Hasil analisis yang memberikan pemahaman", "Nama pengguna", "Ukuran data"],
    correct: 1
  },
  {
    question: "Business Intelligence membantu memahami:",
    options: ["Musik terbaru", "Perilaku pelanggan", "Aplikasi mobile", "Warna dokumen"],
    correct: 1
  },
  {
    question: "Skill yang wajib dimiliki BI Analyst:",
    options: ["Fotografi", "Analitik dan pemrograman", "Menjahit", "Menggambar"],
    correct: 1
  },
  {
    question: "Tool populer untuk analisis di BI:",
    options: ["CorelDraw", "Power BI", "Audacity", "CapCut"],
    correct: 1
  },
  {
    question: "Bahasa pemrograman untuk BI:",
    options: ["HTML", "Python dan R", "CSS", "JavaScript (frontend)"],
    correct: 1
  },
  {
    question: "Peran BI Manager:",
    options: ["Menjual produk", "Mengelola tim BI dan proyek analitik", "Mengurus penggajian", "Membuat poster"],
    correct: 1
  },
  {
    question: "Master Data Services bertanggung jawab atas:",
    options: ["Backup video", "Kolaborasi data lintas divisi", "Pembuatan aplikasi", "Promosi media sosial"],
    correct: 1
  },
  {
    question: "BI Consultant biasanya:",
    options: ["Freelancer dan konsultan eksternal", "Admin sosial media", "Petugas call center", "Asisten pribadi"],
    correct: 0
  },
  {
    question: "Kemampuan research dibutuhkan agar:",
    options: ["Bisa browsing film", "Bisa menyusun insight dari tren", "Bisa mengedit video", "Bisa membuat lagu"],
    correct: 1
  },
  {
    question: "Data literasi berarti:",
    options: ["Kemampuan membaca buku", "Kemampuan membaca dan menginterpretasi data", "Kemampuan membuat puisi", "Kemampuan mengetik cepat"],
    correct: 1
  },
  {
    question: "Tujuan BI Developer:",
    options: ["Membuat mobile game", "Membuat dashboard dan tools analitik", "Mengembangkan iklan", "Menyiapkan laporan keuangan"],
    correct: 1
  },
  {
    question: "Trend Business Intelligence saat ini mengarah pada:",
    options: ["Automasi dan artificial intelligence", "Manual input data", "Flash drive", "Penulisan laporan tangan"],
    correct: 0
  }
];


let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const correctsContainer = document.getElementById("corrects");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const progressBar = document.getElementById("progress-bar");
const currentDisplay = document.getElementById("current");
const totalDisplay = document.getElementById("total");

totalDisplay.innerText = questions.length;

function loadQuestion() {
  const q = questions[currentQuestion];
  questionContainer.innerHTML = `<strong>${q.question}</strong>`;
  correctsContainer.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-dark correct-btn";
    btn.innerText = opt;
    btn.onclick = () => checkcorrect(idx);
    correctsContainer.appendChild(btn);
  });
  nextBtn.disabled = true;
  resultContainer.innerHTML = "";
  currentDisplay.innerText = currentQuestion + 1;
  progressBar.style.width = `${((currentQuestion) / questions.length) * 100}%`;
}

function checkcorrect(selected) {
  const correct = questions[currentQuestion].correct;
  const buttons = document.querySelectorAll(".correct-btn");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correct) btn.classList.add("btn-success");
    else if (idx === selected) btn.classList.add("btn-danger");
  });
  if (selected === correct) score++;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderQuestions() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  questions.forEach((q, idx) => {
    const qCard = document.createElement("div");
    qCard.className = "mb-4";
    qCard.innerHTML = `
      <h5>${idx + 1}. ${q.question}</h5>
      <div id="options-${idx}" class="btn-group-vertical w-100" role="group"></div>
    `;
    container.appendChild(qCard);

    const optGroup = document.getElementById(`options-${idx}`);
    q.options.forEach((opt, oidx) => {
      const btn = document.createElement("button");
      btn.className = "btn btn-outline-secondary mb-1";
      btn.innerText = opt;
      btn.onclick = () => selectAnswer(idx, oidx, btn);
      optGroup.appendChild(btn);
    });
  });
}

function showResult() {
  let reviewHtml = "";
  questions.forEach((q, idx) => {
    const user = userAnswers[idx];
    const correct = q.correct;
    reviewHtml += `<h5>${idx + 1}. ${q.question}</h5>`;
    q.options.forEach((opt, i) => {
      let style = '';
      if (i === correct) style = 'text-success fw-bold';
      if (i === user && i !== correct) style = 'text-danger';
      if (i === user && i === correct) style = 'text-success fw-bold border border-success';
      reviewHtml += `<div class="${style}">- ${opt}</div>`;
    });
    reviewHtml += "<hr>";
  });
  document.getElementById("review-container").innerHTML = reviewHtml;
  document.getElementById("pdf-button").classList.remove("d-none");
}

function printPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.html(document.getElementById("review-container"), {
    callback: function (doc) {
      doc.save("review-kuis-BI.pdf");
    },
    x: 10,
    y: 10,
  });
}

loadQuestion();
