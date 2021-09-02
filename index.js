 
//==================================================================
"use strict";

// Сложность алгоритмов

//Линейная сложность O(n)
// Линейный поиск

const value = 1207;
const arr = [1, 5, 6, 91, 18, 9, 2, 8, 2, 7];

const testArr = new Array(1000).fill(null).map((_, i) => i + 1);

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
//==================================================================

//Квадратичная сложность O(n^2), цикл в цикле

function createMultiplicationTable(number) {
  const table = [];
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      table.push(`${i} * ${j} = ${i * j}`);
    }
  }
  return table;
}
//==================================================================

//Логарифмическая сложность O(log(n))
//Бинарный поиск

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((end + start) / 2);
  while (true) {
    if (arr[middle] === value) {
      return true;
    }
    if (arr[middle] > value) {
      end = middle;
      middle = Math.ceil((end + start) / 2);
    } else {
      start = middle;
      middle = (end + start) / 2;
    }
    if (start === end && start === middle) {
      return false;
    }
  }
  //return false;
}

// console.log(createMultiplicationTable(1));
// console.log(createMultiplicationTable(2));
// console.log(createMultiplicationTable(3));
// console.log(createMultiplicationTable(250));

console.time("Linear");
console.log(linearSearch(testArr, value));
console.timeEnd("Linear");

console.time("Quadro");
console.log(createMultiplicationTable(1000));
console.timeEnd("Quadro");

console.time("Binary");
console.log(binarySearch(testArr, value));
console.timeEnd("Binary");
//==================================================================

//Константная сложность О(1)
//Односвязный список

let listItem1 = {
  value: 1,
  next: listItem2,
};
let listItem2 = {
  value: 2,
  next: listItem3,
};
let listItem3 = {
  value: 3,
  next: null,
};

//Индексация и поиск O(n)
for (let i = 0; i < 2; i++) {}

//Вставка и удаление O(1)

//Удаление
let listItem1 = {
  value: 1,
  next: null,
};
//Вставка
let listItem1 = {
  value: 3,
  next: listItem5,
};

//Двусвязный список
let listItem1 = {
  value: 1,
  next: listItem2,
  prev: null,
};
let listItem2 = {
  value: 2,
  next: listItem3,
  prev: listItem1,
};
let listItem3 = {
  value: 3,
  next: listItem2,
};
