//==================================================================
/*
preventDefault - метод объекта события, предотвратить стандартное поведение события. 
Необходимо для того, чтобы страница не обновлялась.
stopPropagation - остано dить всплытие.
*/
"use strict";
const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("submitBtn");

form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
});

document.body.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
});

window.addEventListener("click", (e) => {
  console.log(e.target);
});
//=======================
/*При нажатии на кнопку 
отображать текст на страницу и записывать его в массив*/

const state = [];

const formTwo = document.getElementById("formTwo");

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target: {
      elements: {
        inputTwo: { value },
      },
    },
    target,
  } = e;
  console.log(value);
  state.push(value);
  const par = document.createElement("p");
  par.textContent = value;
  document.body.append(par);
  target.reset();
});
