const questions = [
  {
    question: "Apa fungsi utama dari Business Intelligence?",
    options: ["Mengelola data penjualan", "Mengambil keputusan berbasis data", "Menghitung keuntungan perusahaan", "Mengatur jadwal kerja"],
    answer: 1
  },
  {
    question: "Apa itu ETL dalam data warehouse?",
    options: ["Email, Text, Language", "Extract, Transform, Load", "Edit, Track, Link", "Evaluate, Try, Learn"],
    answer: 1
  },
  // Tambahkan hingga 40 soal ya!
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const answersContainer = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const progressBar = document.getElementById("progress-bar");
const currentDisplay = document.getElementById("current");
const totalDisplay = document.getElementById("total");

totalDisplay.innerText = questions.length;

function loadQuestion() {
  const q = questions[currentQuestion];
  questionContainer.innerHTML = `<strong>${q.question}</strong>`;
  answersContainer.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-dark answer-btn";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(idx);
    answersContainer.appendChild(btn);
  });
  nextBtn.disabled = true;
  resultContainer.innerHTML = "";
  currentDisplay.innerText = currentQuestion + 1;
  progressBar.style.width = `${((currentQuestion) / questions.length) * 100}%`;
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const buttons = document.querySelectorAll(".answer-btn");
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

function showResult() {
  questionContainer.innerHTML = "";
  answersContainer.innerHTML = "";
  nextBtn.style.display = "none";
  progressBar.style.width = "100%";
  resultContainer.innerHTML = `
    <h4>Skor Anda: ${score} / ${questions.length}</h4>
    <p class="text-muted">Selamat belajar Business Intelligence! 🎉</p>
    <a href="" class="btn btn-secondary mt-3">Coba Lagi</a>
  `;
}

loadQuestion();
