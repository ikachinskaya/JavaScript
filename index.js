//==================================================================
"use strict";

/*DOM - Document Object Model
  Каждый HTML-тег - объект. 
  Вложенные теги - дети родительского элемента.
  Текст внутри тега - объект.
  DOM - представление HTML-документа в виде дерева тегов.
  Каждый узел - объект.
  Теги - узлы-элементы(элементы).
  Текст внутри элементов - текстовый узел. Содержит только строку, не имеет потомков.
  Пробелы и переводы троки - текстоые узлы.
  */

//Нашли кнопки
const [firstBtn, , thirdBtn] = document.getElementsByTagName("button");

let count = 0;
//Создали функцию слушателя
function btnAlert() {
  alert(`Вы нажали кнопку ${++count}`);
}

//Сказали кнопке при нажатии на нее, запускать функцию.
firstBtn.addEventListener("click", btnAlert);
thirdBtn.addEventListener("click", btnAlert);
//==================================================================

const par = document.getElementById("unique");
console.log(par);

const testClass = document.getElementsByClassName("test");
console.log(testClass);

const coolerPar = document.querySelector("#unique>span");
console.log(coolerPar);

//NodeList
const coolerPars = document.querySelectorAll("p");
console.log(coolerPar);

const arr = [...coolerPars];
console.log(arr);
console.log("==============");
//==================================================================

const h1 = document.querySelector(".main>h1");
const img = document.querySelector(".main>img");
const span = document.querySelector("span");

console.log(h1);
console.log(img);
console.log(span);
