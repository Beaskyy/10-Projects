const quizData = [
  {
    question: "How old is Florin",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2019",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the president of US",
    a: "Florin Pop",
    b: "Joe Biden",
    c: "Donald Trump",
    d: "Barrack Obama",
    correct: "b",
  },
  {
    question: "What does HTML stands for",
    a: "Hyper Text Markup Language",
    b: "Hyper Texting Markup Language",
    c: "Hypertext Markup Language",
    d: "HyperTexting Markup Language",
    correct: "c",
  },
  {
    question: "What year was JavaSrcipt launched",
    a: "1996",
    b: "1997",
    c: "1998",
    d: "none of the above",
    correct: c,
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d

}

submitBtn.addEventListener('click', () => {
  currentQuiz++;

  if(currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert('You finished! Get yourself and Orange Lemonade')
  }
  
})
