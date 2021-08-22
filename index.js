//==================================================================
"use strict";

/*  Замыкание - функция, которая запоминает свои внешние переменные и может получить к ним доступ.
Все функции в JS изначально являются замыканиями. */

//Выведет 10
const value = 10;

function log() {
  console.log("log function: ", value);
}

console.log(log());
console.log("============");
//====================

//Выведет 20
function wrapper() {
  let value = 20;
  console.log("log function: ", value);
}
console.log(wrapper());
console.log("============");
//====================

function wrapper() {
  let value = 20;
  console.log("log function: ", value);
  log(); //Выведет 10
}
console.log(log());
console.log("============");
//====================

function wrapper() {
  let value = 20;

  function log() {
    console.log("log function: ", value);
  }
  console.log("log function: ", value);
  log(); //Выведет 20
}
console.log(wrapper());
console.log("============");
//==================================================================

//грязная функция
let counter = 0;
function increment() {
  counter++;
  return counter;
}
console.log(increment());
console.log("============");

//с помощью замыкания
function makeCounter() {
  let counter = 0; //замыкание здесь
  return function increment() {
    counter++;
    return counter;
  };
}
const count = makeCounter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log("============");

//==================================================================

function makeAdder(value) {
  let result = value;
  return function (number) {
    return (result += number);
  };
}
const adder = makeAdder(20);
console.log(adder(10));
console.log(adder(100));
console.log(adder(1000));
console.log(adder(0));
console.log(adder(-100));
console.log("============");
//====================

const makeAdder_ = (value) => (number) => (value += number);

const adder_ = makeAdder_(20);
console.log(adder_(10));
console.log(adder_(100));
console.log(adder_(1000));
console.log(adder_(0));
console.log(adder_(-100));
//====================
//==================================================================

