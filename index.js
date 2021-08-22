//==================================================================
"use strict";
//getAttribute - для поиска любого атрибута
//dataSet - свойство, предоставляющее доступ к пользовательским атрибутам

const [btn1, btn2] = document.querySelectorAll("button");

function listener(event) {
  console.log(event.target.getAttribute("data-secretURL"));
  //console.dir(event.target.dataset);
  const {
    target: { dataset },
  } = event;
  console.dir(dataset);
}
btn1.addEventListener("click", listener);
btn2.addEventListener("click", listener);
//==================================================================

const div = document.querySelector("#root");
const buttons = document.querySelectorAll("button");

function addColorDiv(event) {
  const { target: btn } = event;
  const { dataset: { color } } = btn;
  //div.style.backgroundColor = color;
  btn.parentElement.style.backgroundColor = color;
}
for (const btn of buttons) {
  btn.addEventListener("click", addColorDiv);
}
