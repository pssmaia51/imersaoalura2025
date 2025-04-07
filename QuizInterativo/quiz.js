let currentQuestionIndex = 0;
let score = 0;
let attempts = 0;
let timer;
let timeLeft = 15;

let questions = [
  {
    question: "Qual é a capital da França?",
    answers: ["Paris", "Roma", "Madri", "Berlim"],
    correct: "Paris"
  },
  {
    question: "Quem escreveu 'Dom Quixote'?",
    answers: ["Miguel de Cervantes", "William Shakespeare", "Machado de Assis", "José Saramago"],
    correct: "Miguel de Cervantes"
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    answers: ["Terra", "Marte", "Júpiter", "Saturno"],
    correct: "Júpiter"
  },
  {
    question: "Em que continente fica o Egito?",
    answers: ["Ásia", "África", "Europa", "América"],
    correct: "África"
  },
  {
    question: "Quantos lados tem um hexágono?",
    answers: ["5", "6", "7", "8"],
    correct: "6"
  },
  {
    question: "Quem pintou a Mona Lisa?",
    answers: ["Leonardo da Vinci", "Pablo Picasso", "Van Gogh", "Michelangelo"],
    correct: "Leonardo da Vinci"
  },
  {
    question: "Qual é o símbolo químico da água?",
    answers: ["H2O", "CO2", "NaCl", "O2"],
    correct: "H2O"
  },
  {
    question: "Quem descobriu o Brasil?",
    answers: ["Pedro Álvares Cabral", "Dom Pedro I", "Cristóvão Colombo", "Américo Vespúcio"],
    correct: "Pedro Álvares Cabral"
  },
  {
    question: "Quantos segundos há em um minuto?",
    answers: ["60", "100", "30", "90"],
    correct: "60"
  },
  {
    question: "Qual animal é conhecido como o rei da selva?",
    answers: ["Leão", "Tigre", "Elefante", "Pantera"],
    correct: "Leão"
  }
];

function startTimer() {
  clearInterval(timer);
  timeLeft = 15;
  document.getElementById("timer").textContent = `Tempo: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Tempo: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function loadQuestion() {
  const questionObj = questions[currentQuestionIndex];
  attempts = 0;
  document.getElementById("question").textContent = questionObj.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  questionObj.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(answer);
    answersDiv.appendChild(btn);
  });

  updateProgressBar();
  startTimer();
  document.getElementById("score").textContent = `Pontuação atual: ${score}`;
}

function checkAnswer(answer) {
  const correct = questions[currentQuestionIndex].correct;
  const resultDiv = document.getElementById("result");
  if (answer === correct) {
    score++;
    resultDiv.textContent = "✅ Resposta correta!";
    nextQuestionDelayed();
  } else {
    attempts++;
    if (attempts < 2) {
      resultDiv.textContent = "❌ Errado! Tente novamente.";
    } else {
      resultDiv.textContent = `❌ Errou de novo! A resposta correta era: ${correct}`;
      nextQuestionDelayed();
    }
  }
}

function nextQuestionDelayed() {
  clearInterval(timer);
  setTimeout(() => {
    document.getElementById("result").textContent = "";
    nextQuestion();
  }, 2000);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function updateProgressBar() {
  const progress = ((currentQuestionIndex) / questions.length) * 100;
  document.getElementById("progress").style.width = `${progress}%`;
}

function showResult() {
  clearInterval(timer);
  document.getElementById("quiz").style.display = "none";
  document.getElementById("question").textContent = "Fim do quiz!";
  document.getElementById("answers").innerHTML = "";
  document.getElementById("result").textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
  document.getElementById("score").textContent = `Pontuação final: ${score}`;
  document.getElementById("restart").style.display = "inline-block";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  attempts = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("score").textContent = "";
  document.getElementById("restart").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

document.getElementById("gerarIa").addEventListener("click", () => {
  const novaPergunta = {
    question: "Qual é a fórmula da velocidade média?",
    answers: ["Vm = ΔS / ΔT", "Vm = m * a", "Vm = E / t", "Vm = F / m"],
    correct: "Vm = ΔS / ΔT"
  };
  questions.push(novaPergunta);
  currentQuestionIndex = questions.length - 1;
  loadQuestion();
});

document.getElementById("restart").addEventListener("click", restartQuiz);

loadQuestion();