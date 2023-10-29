"use script";

import cardsReact from "./../assets/data/cardsReact.json" assert { type: "json" };
import questionsReact from "./../assets/data/questionsReact.json" assert { type: "json" };

const back = document.getElementById("prev-term");
const next = document.getElementById("next-term");
const par = document.getElementById("par");
const textOne = document.getElementById("textOne");
const divCard = document.querySelector(".card-container");
const quizDiv = document.querySelector(".quiz-container");
let questionsDiv = document.querySelector(".questions-div");
const title = document.getElementById("title");
const nextButton = document.getElementById("next-question");

let k = 0;
let dataIndex;
let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
  par.textContent = cardsReact[k].title;
  textOne.textContent = cardsReact[k].text;
});

next.addEventListener("click", () => {
  if (k < 9) {
    k++;
    par.textContent = cardsReact[k].title;
    textOne.textContent = cardsReact[k].text;
  } else {
    divCard.style.display = "none";
    quizDiv.style.display = "block";
  }
});

back.addEventListener("click", () => {
  if (k > 0) {
    k--;
    par.textContent = cardsReact[k].title;
    textOne.textContent = cardsReact[k].text;
  }
});

const defaultValues = () => {
  dataIndex = 0;
  questionsDiv.innerHTML = "";
  title.textContent = questionsReact[dataIndex].question;

  for (let i = 0; i < questionsReact[dataIndex].answers.length; i++) {
    questionsDiv.innerHTML += `<div class="answer__button">
        <input id="radio-${i}" type="radio" name="radio" value="${questionsReact[dataIndex].answers[i].isTrue}" />
        <label for="radio-${i}">${questionsReact[dataIndex].answers[i].answer}</label>
       </div>`;
  }
};

document.addEventListener("DOMContentLoaded", defaultValues);

const nextQuestion = () => {
  dataIndex++;
  questionsDiv.innerHTML = "";
  title.textContent = questionsReact[dataIndex].question;

  for (let i = 0; i < questionsReact[dataIndex].answers.length; i++) {
    questionsDiv.innerHTML += `<div class="answer__button">
        <input id="radio-${i}" type="radio" name="radio" value="${questionsReact[dataIndex].answers[i].isTrue}" />
        <label for="radio-${i}">${questionsReact[dataIndex].answers[i].answer}</label>
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
  nextButton.style.display = "none";
};

nextButton.addEventListener("click", () => {
  count();
  if (dataIndex < 4) {
    nextQuestion();
  } else {
    endGame();
  }
});
