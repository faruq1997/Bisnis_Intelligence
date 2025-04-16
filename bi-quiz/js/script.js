import { questions } from './quiz.js';

let shuffledQuestions = [];
let userAnswers = [];

window.onload = () => {
  shuffledQuestions = [...questions];
  shuffleQuestions(shuffledQuestions);
  renderQuestions();
};

function shuffleQuestions(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function renderQuestions() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  shuffledQuestions.forEach((q, idx) => {
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

function selectAnswer(qIdx, optIdx, btn) {
  userAnswers[qIdx] = optIdx;
  const btnGroup = document.getElementById(`options-${qIdx}`);
  [...btnGroup.children].forEach(b => b.classList.remove("btn-primary"));
  btn.classList.add("btn-primary");
}

function submitQuiz() {
  showReview();
}

function showReview() {
  let html = '';
  shuffledQuestions.forEach((q, i) => {
    const correct = q.correct;
    const selected = userAnswers[i];
    html += `<h6>${i + 1}. ${q.question}</h6>`;
    q.options.forEach((opt, j) => {
      let classes = "mb-1";
      if (j === correct) classes += " text-success fw-bold";
      if (j === selected && j !== correct) classes += " text-danger";
      if (j === selected && j === correct) classes += " bg-success text-white";
      html += `<div class="${classes}">- ${opt}</div>`;
    });
    html += "<hr>";
  });

  document.getElementById("review-container").innerHTML = html;
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
    y: 10
  });
}
