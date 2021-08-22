//==================================================================
"use strict";
//Обработчик события отработает один раз
const btn = document.querySelector("#btn");
function alertBtn() {
  alert("Клик");
  btn.removeEventListener("click", alertBtn);
}

btn.addEventListener("click", alertBtn);
//==================

const btn2 = document.querySelector("#btn2");
btn2.addEventListener(
  "click",
  () => {
    alert("Клик");
  },
  { once: true } //обработчик вызван не более одного раза, автоматически удаляется при вызове
);
//==================

//В одну строку
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", (event) => console.log(event));
//==================

function clickHandler(event) {
  console.dir(event.currentTarget); //на ком висит обработчик, видно только когда событие обрабатывается
  console.dir(event.target); //куда кликнули
  console.log(event); //событие
}
document.body.addEventListener("click", clickHandler);
//==================

//Вывести текст на кнопке
const buttons = document.querySelectorAll(".btn");

function clickButton(event) {
  alert(event.target.textContent);
  //alert(event.target.innerText);
}
for (let btn of buttons) {
  btn.addEventListener("click", clickButton);
}
//==================

//dispatchEvent - симулирует событие, для тестирования
const clickEvent = new Event("wheel");
btn.dispatchEvent(clickEvent);
//==================
//Стандартное поведение
const btn10 = document.querySelector(".button");
function listener(event) {
  console.dir(event.currentTarget);
  alert(`This is ${event.currentTarget}`);
}

btn10.addEventListener("click", listener);
document.body.addEventListener("click", listener);
document.addEventListener("click", listener);
window.addEventListener("click", listener);

//==================
//Переопределение поведения
btn10.addEventListener("click", listener, true);
document.body.addEventListener("click", listener, true);
document.addEventListener("click", listener, true);
window.addEventListener("click", listener, true);
