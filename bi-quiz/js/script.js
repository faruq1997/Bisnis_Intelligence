let currentAnswers = [];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
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
  currentAnswers = Array(shuffled.length).fill(null);
  window.shuffledQuestions = shuffled;
}

function selectAnswer(qIndex, choiceIndex, btn) {
  const group = document.getElementById(`q${qIndex}`).children;
  for (let b of group) b.classList.remove("btn-primary");
  btn.classList.add("btn-primary");
  currentAnswers[qIndex] = choiceIndex;
}

function submitQuiz() {
  const review = document.getElementById("review-container");
  review.innerHTML = "";
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
  document.getElementById("pdf-button").classList.remove("d-none");
}

function printPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const review = document.getElementById("review-container").innerText;
  const lines = doc.splitTextToSize(review, 180);
  doc.text(lines, 10, 10);
  doc.save("review_kuis_BI.pdf");
}

window.onload = loadQuiz;
