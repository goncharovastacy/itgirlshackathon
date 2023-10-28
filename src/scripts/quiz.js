"use strict";

const htmlData = [
  {
    question: "Что такое HTML?",
    answers: [
      {
        answer:
          "Это язык программирования, используемый для создания и структурирования веб-страниц.",
        isTrue: "false",
      },
      {
        answer:
          "Это язык разметки, используемый для создания и структурирования веб-страниц.",
        isTrue: "true",
      },
      {
        answer:
          "Это язык разметки, используемый для описания внешнего вида страниц (цвета, шрифт, стили, размеры)",
        isTrue: "false",
      },
      {
        answer:
          "Язык программирования, который добавляет интерактивность и динамику на веб-страницы",
        isTrue: "false",
      },
    ],
  },
  {
    question: "Какой тег используется для создания заголовка на веб-странице?",
    answers: [
      { answer: "<header>", isTrue: "false" },
      { answer: "<title>", isTrue: "false" },
      { answer: "<h1>", isTrue: "true" },
      { answer: "<p>", isTrue: "false" },
    ],
  },
  {
    question:
      "Какой тег используется для создания ссылки на другую веб-страницу?",
    answers: [
      { answer: "<img>", isTrue: "false" },
      { answer: "<a>", isTrue: "true" },
      { answer: "<link>", isTrue: "false" },
      { answer: "<div>", isTrue: "false" },
    ],
  },
  {
    question: "Какой тег используется для вставки изображения на веб-страницу?",
    answers: [
      { answer: "<img>", isTrue: "true" },
      { answer: "<div>", isTrue: "false" },
      { answer: "<a>", isTrue: "false" },
      { answer: "<p>", isTrue: "false" },
    ],
  },
  {
    question: "Какой тег используется для создания абзаца текста?",
    answers: [
      { answer: "<p>", isTrue: "true" },
      { answer: "<h1>", isTrue: "false" },
      { answer: "<div>", isTrue: "false" },
      { answer: "<span>", isTrue: "false" },
    ],
  },
];

let data;

let dataIndex;

let questionsDiv = document.querySelector(".questions-div");
questionsDiv.innerHTML = "";
const title = document.getElementById("title");

const links = document.querySelectorAll(".cards-link");
links.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.id === "html") {
      data = htmlData;
      defaultValues();
    } else if (e.target.id === "css") {
      data = cssData;
      defaultValues();
    } else if (e.target.id === "js") {
      data = jsData;
      defaultValues();
    } else if (e.target.id === "react") {
      data = reactData;
      defaultValues();
    }
  });
});

const defaultValues = () => {
  dataIndex = 0;
  questionsDiv.innerHTML = "";
  title.textContent = data[dataIndex].question;

  for (let i = 0; i < data[dataIndex].answers.length; i++) {
    questionsDiv.innerHTML += `<div class="answer__button">
        <input id="radio-${i}" type="radio" name="radio" value="${data[dataIndex].answers[i].isTrue}" />
        <label for="radio-${i}">${data[dataIndex].answers[i].answer}</label>
       </div>`;
  }
};

const nextQuestion = () => {
  dataIndex++;
  questionsDiv.innerHTML = "";
  title.textContent = data[dataIndex].question;

  for (let i = 0; i < data[dataIndex].answers.length; i++) {
    questionsDiv.innerHTML += `<div class="answer__button">
        <input id="radio-${i}" type="radio" name="radio" value="${data[dataIndex].answers[i].isTrue}" />
        <label for="radio-${i}">${data[dataIndex].answers[i].answer}</label>
       </div>`;
  }
};
