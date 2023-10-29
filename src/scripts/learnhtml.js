"use script";

import cardsHTML from "./../assets/data/cardsHTML.json" assert { type: "json" };
import questionsHTML from "./../assets/data/questionsHTML.json" assert { type: "json" };

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
  par.textContent = cardsHTML[k].title;
  textOne.textContent = cardsHTML[k].text;
});

next.addEventListener("click", () => {
  if (k < 9) {
    k++;
    par.textContent = cardsHTML[k].title;
    textOne.textContent = cardsHTML[k].text;
  } else {
    divCard.style.display = "none";
    quizDiv.style.display = "block";
  }
});

back.addEventListener("click", () => {
  if (k > 0) {
    k--;
    par.textContent = cardsHTML[k].title;
    textOne.textContent = cardsHTML[k].text;
  }
});

const defaultValues = () => {
  dataIndex = 0;
  questionsDiv.innerHTML = "";
  title.textContent = questionsHTML[dataIndex].question;

  for (let i = 0; i < questionsHTML[dataIndex].answers.length; i++) {
    questionsDiv.innerHTML += `<div class="answer__button">
        <input id="radio-${i}" type="radio" name="radio" value="${questionsHTML[dataIndex].answers[i].isTrue}" />
        <label for="radio-${i}">${questionsHTML[dataIndex].answers[i].answer}</label>
       </div>`;
  }
};

document.addEventListener("DOMContentLoaded", defaultValues);

const nextQuestion = () => {
  dataIndex++;
  questionsDiv.innerHTML = "";
  title.textContent = questionsHTML[dataIndex].question;

  for (let i = 0; i < questionsHTML[dataIndex].answers.length; i++) {
    questionsDiv.innerHTML += `<div class="answer__button">
        <input id="radio-${i}" type="radio" name="radio" value="${questionsHTML[dataIndex].answers[i].isTrue}" />
        <label for="radio-${i}">${questionsHTML[dataIndex].answers[i].answer}</label>
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
