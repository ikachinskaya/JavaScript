//==================================================================
"use strict";

/*Символ (Symbol) — это уникальный и неизменяемый тип данных, 
который может быть использован как идентификатор для свойств объектов.*/

const sym1 = Symbol();
const sym2 = Symbol();
const userFrontId = Symbol("user id for front");

const user = {
  id: 0,
  name: "Feofan",
  lastName: "Petrov",
  [userFrontId]: 500,
};

console.log(user);
console.log(user[userFrontId]);

//getOwnPropertySymbols - возвращает массив всех символьных свойств, найденных на переданном объекте
const userSymbol = Object.getOwnPropertySymbols(user);
console.log(userSymbol);

console.log(user[userSymbol[0]]);
//==================================================================

const numberArray = [59, 94, 9, 41, 2];

//императивный код
for (let i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

/*Цикл for..of. для его работы нужен Symbol.iterator
Symbol.iterator - это метод, возвращающий итератор по умолчанию для объекта.*/

for (const number of numberArray) {
  console.log(number);
}
