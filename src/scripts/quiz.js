"use strict";

const data = dataJson;

let dataIndex;

const defaultValues = () => {
  dataIndex = 0;
  question.textContent = data[dataIndex].question;

  for (let i = 0; i < data[dataIndex].answers.length; i++) {
    questionsDiv.innerHTML += `<div class="answer__button">
        <input id="radio-${i}" type="radio" name="radio" value="${data[dataIndex].answers[i].isTrue}" />
        <label for="radio-${i}">${data[dataIndex].answers[i].answer}</label>
       </div>`;
  }
};

const nextQuestion = () => {
  dataIndex++;
  // citiesDiv.innerHTML = '';
  question.textContent = data[dataIndex].question;

  for (let i = 0; i < data[dataIndex].cities.length; i++) {
    questionsDiv.innerHTML += `<div class="answer__button">
        <input id="radio-${i}" type="radio" name="radio" value="${data[dataIndex].answers[i].isTrue}" />
        <label for="radio-${i}">${data[dataIndex].answers[i].answer}</label>
       </div>`;
  }
};

document.addEventListener("DOMContentLoaded", defaultValues);
