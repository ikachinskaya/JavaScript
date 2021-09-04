//==================================================================
"use strict";

/* Структура данных — это конкретный способ хранения и организации данных.  */

/* Set 
  Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
  Сохраняет данные в том порядке, в котром добавили.
  Set итерируемый
  В Set нет ключей, есть только значения

  add - добавить элемент
  delete -удалить элемент
  union (Объединение).Объединяет все элементы из двух разных множеств и возвращает результат, как новый набор (без дубликатов).
  intersection (Пересечение). Если заданы два множества, эта функция вернет другое множество, 
        содержащее элементы, которые имеются и в первом и во втором множестве.
  difference  (Разница). Вернет список элементов, которые находятся в одном множестве, но НЕ повторяются в другом.
  subset(Подмножество) - возвращает булево значение, показывающее, содержит ли одно множество все элементы другого множества.
  entries - возвращает новый Итератор, который содержит массив [значение, значение] для каждого элемента в объекте Set в порядке их добавления.
  Итератор - это объект, который предоставляет метод next(), 
        возвращающий следующий элемент последовательности. Этот метод возвращает объект с двумя свойствами: done и value.
*/

const set = new Set();
//add
set.add(1);
set.add(2);
set.add("test");
set.add(true);
set.add([10, 20, 30]);
set.add("1");
set.add(1);
console.log(set);
console.log(set.size);

//delete
set.delete(1);
set.delete(true);
console.log(set);
console.log(set.size);

//has -есть ли значение
console.log(set.has(1));
console.log(set.has("test"));

//clear
set.clear();
console.log(set);
console.log(set.size);

//for of
set.add(1);
set.add(2);
set.add("test");
set.add(true);
set.add([10, 20, 30]);
set.add("1");
set.add(1);
console.log(set);
console.log(set.size);
for (const item of set) {
  console.log(item);
}

//forEach
//т.к. нет ключей, value===key
set.forEach((value, key, set) => {
  console.log(value);
  console.log(key);
  console.log(set);
});

//entries
const setIter = set.entries();
console.log(setIter);
console.log(setIter.next());
console.log(setIter);
console.log(setIter.next());
console.log(setIter);
console.log(setIter.next());
console.log(setIter);
console.log(setIter.next());
console.log(setIter);
console.log(setIter.next());
console.log(setIter);
console.log(setIter.next());
console.log(setIter);
console.log(setIter.next());

for (const entry of set.values()) {
  console.log(entry);
}

for (const setEntry of set) {
  console.log(setEntry);
}
//==================================================================

//Получить массив с уникальными значениями из двух массивов
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 7, 8, 9];

const unique = new Set(arr1.concat(arr2));
const unique1 = [...new Set([...arr1, ...arr2])];
console.log(unique);
console.log(unique1);