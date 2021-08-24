//==================================================================
"use strict";

/*
  createElement - создает новый элемент
  appendChild - добавляет элемент в конец
  append - добавляет несколько элементов в конец
  remove - удаляет элемент
  removeChild - удаляет дочерний элемент
  classList - свойство, возвращает псевдомассив, содержащий все классы элемента
    add - добавить класс
    remove - удалить класс
    toggle - если есть класс- удаляет, нет - добавляет
    contains - проверяет, есть ли класс
    length - количество классов у элемента
 */

const root = document.querySelector("#root");

const firstPar = document.createElement("p");
firstPar.textContent = "JS created me";

const secondPar = document.createElement("p");
secondPar.textContent = "Я буду по середине";

const thirdPar = document.createElement("p");
thirdPar.textContent = "Я буду последним";

root.append(firstPar, secondPar);
root.appendChild(thirdPar);

//==================================================================
function createElem(text) {
  const par = document.createElement("p");
  par.textContent = text;
  par.style = "background-color: lightgray; padding: 20px";
  par.style.color = "red";
  par.style.border = "3px solid black";
  par.style.fontSize = "25px";
  document.body.append(par);
}

createElem("Я создан с помощью функции createElem");

const classNameForPar = ["textColor", "fontSize"];

function createTextPar(text) {
  const par = document.createElement("p");
  par.textContent = text;
  par.setAttribute("class", "createdPar");
  for (let i = 0; i < classNameForPar.length; i++) {
    par.classList.add(classNameForPar[i]);
  }
  document.body.append(par);
}

createTextPar("Я создан с помощью функции createTextPar");
//==================================================================
/*МОДАЛЬНОЕ ОКНО */
const btnClose = document.querySelector(".modal-window-button");
function closeModalWindow(e) {
  const { target } = e;
  target.parentElement.remove();
}
btnClose.addEventListener("click", closeModalWindow);
