const back = document.getElementById("prev-term");
const next = document.getElementById("next-term");
const par = document.getElementById("par");
const textOne = document.getElementById("textOne");
const divCard = document.querySelector(".card-container");
const quizDiv = document.querySelector(".quiz-container");

const cardsHTML = [
  {
    title: "HTML",
    text: "(HyperText Markup Language) - это язык разметки, используемый для создания и структурирования веб-страниц.",
  },
  {
    title: "Тег",
    text: "Тег в HTML представляет собой знаковую последовательность, заключенную в угловые скобки, которая используется для определения структуры и содержимого веб-страницы. Например, <p> - это тег, который обозначает абзац.",
  },
  {
    title: "Элемент",
    text: "Это комбинация открывающего и закрывающего тега, вместе с их содержимым. Например, <p> - </p> является элементом абзаца. Элемент включает в себя тег, который определяет тип элемента, и его содержимое, которое может быть текстом, другими элементами или комментариями.",
  },
  {
    title: "Атрибут",
    text: "В HTML атрибуты используются внутри открывающих тегов элементов для предоставления дополнительной информации о теге. Атрибуты состоят из имени и значения, разделенных знаком равно.",
  },
  {
    title: "Заголовок",
    text: "В HTML заголовки (<h1> до <h6>) используются для обозначения заголовков и подзаголовков веб-страницы. Они предоставляют структурную информацию и визуально выделяются.",
  },
  {
    title: "Ссылка",
    text: "В HTML ссылки (<a>) используются для создания гиперссылок на другие веб-страницы, документы или ресурсы. Они позволяют пользователям переходить по разным страницам.",
  },
  {
    title: "Список",
    text: "В HTML списки (<ul>, <ol>, <li>) используются для структурирования элементов в виде маркированного или нумерованного списка. Они создают визуальное разделение и упорядочение данных.",
  },
  {
    title: "Форма",
    text: "В HTML формы (<form>) используются для сбора данных от пользователя, таких как текстовые поля, чекбоксы или кнопки. Они служат для отправки данных на сервер для обработки.",
  },
  {
    title: "Таблицы",
    text: "В HTML таблицы (<table>, <tr>, <td>) используются для представления данных в виде сетки из строк и столбцов. Они позволяют создавать упорядоченные и структурированные данные.",
  },
  {
    title: "Элемент body",
    text: "Внутри элемента <body> размещаются все элементы и содержимое, которые нужно отображать на странице, включая текст, изображения, видео, ссылки, таблицы и другие элементы HTML. Например, если вы хотите добавить абзац текста на страницу, вы можете поместить его внутри элемента <p>, который будет размещен внутри элемента <body>.",
  },
];

let k = 0;
const last = cardsHTML.length-1;

document.addEventListener("DOMContentLoaded", () => {
  par.textContent = cardsHTML[k].title;
  textOne.textContent = cardsHTML[k].text;
});

next.addEventListener("click", () => {
  if (k < last-1) {
    k++;
    par.textContent = cardsHTML[k].title;
    textOne.textContent = cardsHTML[k].text;
  } else {
    k=0;
    par.textContent = cardsHTML[k].title;
    textOne.textContent = cardsHTML[k].text;
  }
});

back.addEventListener("click", () => {
  if (k > 0) {
    k--;
    par.textContent = cardsHTML[k].title;
    textOne.textContent = cardsHTML[k].text;
  } else {
    k=last;
    par.textContent = cardsHTML[k].title;
    textOne.textContent = cardsHTML[k].text;
  }
});
