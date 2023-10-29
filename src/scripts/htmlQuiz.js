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
      { answer: "header", isTrue: "false" },
      { answer: "title", isTrue: "false" },
      { answer: "h1", isTrue: "true" },
      { answer: "p", isTrue: "false" },
    ],
  },
  {
    question:
      "Какой тег используется для создания ссылки на другую веб-страницу?",
    answers: [
      { answer: "img", isTrue: "false" },
      { answer: "a", isTrue: "true" },
      { answer: "link", isTrue: "false" },
      { answer: "div", isTrue: "false" },
    ],
  },
  {
    question: "Какой тег используется для вставки изображения на веб-страницу?",
    answers: [
      { answer: "img", isTrue: "true" },
      { answer: "div", isTrue: "false" },
      { answer: "a", isTrue: "false" },
      { answer: "p", isTrue: "false" },
    ],
  },
  {
    question: "Какой тег используется для создания абзаца текста?",
    answers: [
      { answer: "p", isTrue: "true" },
      { answer: "h1", isTrue: "false" },
      { answer: "div", isTrue: "false" },
      { answer: "span", isTrue: "false" },
    ],
  },
];

let dataIndex;
let counter = 0;

let questionsDiv = document.querySelector(".questions-div");
const title = document.getElementById("title");
const nextButton = document.getElementById("next-question");
let quizDiv = document.querySelector(".quiz");

const defaultValues = () => {
  dataIndex = 0;
  questionsDiv.innerHTML = "";
  title.textContent = htmlData[dataIndex].question;

  for (let i = 0; i < htmlData[dataIndex].answers.length; i++) {
    questionsDiv.innerHTML += `<div class="answer__button">
        <input id="radio-${i}" type="radio" name="radio" value="${htmlData[dataIndex].answers[i].isTrue}" />
        <label for="radio-${i}">${htmlData[dataIndex].answers[i].answer}</label>
        </div>`;
  }
};

document.addEventListener("DOMContentLoaded", defaultValues);

const nextQuestion = () => {
  dataIndex++;
  questionsDiv.innerHTML = "";
  title.textContent = htmlData[dataIndex].question;

  for (let i = 0; i < htmlData[dataIndex].answers.length; i++) {
    questionsDiv.innerHTML += `<div class="answer__button">
        <input id="radio-${i}" type="radio" name="radio" value="${htmlData[dataIndex].answers[i].isTrue}" />
        <label for="radio-${i}">${htmlData[dataIndex].answers[i].answer}</label>
        </div>`;
  }
};

const count = () => {
  const values = document.querySelectorAll(".answer__button input");
  values.forEach((el) => {
    if (el.checked && el.value === "true") {
      counter++;
    }
  });
};

const endGame = () => {
  questionsDiv.innerHTML = "";
  title.textContent = `Ты ответила правильно на ${counter} вопросов из 5`;
};

nextButton.addEventListener("click", () => {
  count();
  if (dataIndex < 4) {
    nextQuestion();
    // console.log(questionsDiv);
  } else {
    endGame();
  }
});
