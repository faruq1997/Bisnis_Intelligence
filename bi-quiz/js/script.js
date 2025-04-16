let currentAnswers = [];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  // Mengacak urutan soal
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  
  // Menampilkan soal-soal di dalam quiz
  shuffled.forEach((q, i) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question-card mb-4";
    qDiv.innerHTML = `
      <p><strong>Soal ${i + 1}:</strong> ${q.question}</p>
      <div class="btn-group-vertical w-100" id="q${i}">
        ${q.choices.map((c, j) => `
          <button type="button" class="btn btn-outline-secondary" onclick="selectAnswer(${i}, ${j}, this)">${c}</button>
        `).join("")}
      </div>
    `;
    container.appendChild(qDiv);
  });
  
  // Menyimpan jawaban yang belum dipilih, mulai dengan null untuk setiap soal
  currentAnswers = Array(shuffled.length).fill(null);
  window.shuffledQuestions = shuffled;
}

function selectAnswer(qIndex, choiceIndex, btn) {
  const group = document.getElementById(`q${qIndex}`).children;
  
  // Menghapus highlight warna dari semua tombol
  for (let b of group) b.classList.remove("btn-primary");
  
  // Menambahkan highlight warna pada tombol yang dipilih
  btn.classList.add("btn-primary");
  
  // Menyimpan jawaban yang dipilih
  currentAnswers[qIndex] = choiceIndex;
}

function submitQuiz() {
  const review = document.getElementById("review-container");
  review.innerHTML = ""; // Bersihkan review sebelumnya
  
  // Menampilkan review jawaban yang dipilih dan jawaban benar
  window.shuffledQuestions.forEach((q, i) => {
    const userAnswer = currentAnswers[i];
    const correct = q.answer === userAnswer;
    review.innerHTML += `
      <div class="mb-3">
        <strong>Soal ${i + 1}:</strong> ${q.question}<br/>
        <span class="${correct ? 'text-success' : 'text-danger'}">
          Jawaban Anda: ${q.choices[userAnswer] || "Belum dijawab"}
        </span><br/>
        <span class="text-primary">Jawaban Benar: ${q.choices[q.answer]}</span>
      </div>
    `;
  });
  
  // Menampilkan tombol untuk cetak PDF setelah quiz selesai
  document.getElementById("pdf-button").classList.remove("d-none");
}

function printPDF() {
  // Menggunakan jsPDF untuk mengonversi review ke PDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Mendapatkan isi review untuk dicetak
  const review = document.getElementById("review-container").innerText;
  
  // Memecah teks agar sesuai dengan lebar halaman
  const lines = doc.splitTextToSize(review, 180);
  
  // Menambahkan teks ke dalam dokumen PDF
  doc.text(lines, 10, 10);
  
  // Menyimpan PDF
  doc.save("review_kuis_BI.pdf");
}

// Memuat kuis saat halaman selesai dimuat
window.onload = loadQuiz;
