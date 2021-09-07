//==================================================================
"use strict";

/* 
setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
timerId - идентификатор таймера
clearTimeout(timerId), clearInterval(timerId) - отмена дальнейшего выполнения


*/

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", (e) => {
//   console.log("btn");
// });

// console.log("Hi");

// const id = setTimeout(function callback1() {
//   console.log("Hello World");
// }, 500);

// clearTimeout(id);
// //==================================================================
// let i = 0;
// const intervalId = setInterval(() => {
//   console.log(`interval${i++}`);
// }, 500);
// console.log(intervalId);

// clearInterval(intervalId);
//==================================================================

/*
Создать функции, которые последовательно выводят в консоль числа от 1 до 20 с интервалом в 100 мс.
Можно решить через 
- setInterval - if, clearInterval
- setTimeout - рекурсия с if
Посчитать время выполнения:
- console.time() 
- console.timeEnd()
*/

function countInterval() {
  let count = 1;
  const idInterval = setInterval(() => {
    console.log(count++);
    if (count > 20) {
      clearInterval(idInterval);
    }
  }, 100);
}

console.time("SetInterval");
console.log(countInterval());
console.timeEnd("SetInterval");
//==================================================================

function countTimeOut(count) {
  let timeId = setTimeout(() => {
    if (count <= 20) {
      console.log(count++);
      timeId = countTimeOut(count);
    }
  }, 100);

}

console.time("SetTimeOut");
console.log(countTimeOut(1));
console.timeEnd("SetTimeOut");
