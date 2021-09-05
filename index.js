//==================================================================
"use strict";

/* Структура данных — это конкретный способ хранения и организации данных.  */

/* Map
Map - структура данных, которая хранит данные в парах ключ / значение, где каждый ключ уникален. 
Запоминает исходный порядок вставки ключей. 
Любое значение (как объекты, так и примитивные значения) может использоваться как ключ или значение.
Map иногда называется ассоциативным массивом или словарем. 
Часто используется для быстрого поиска данных. 

new Map() – создаёт коллекцию.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.

Перебор Map
map.keys() – возвращает итерируемый объект по ключам,
map.values() – возвращает итерируемый объект по значениям,
map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.
*/
const user = {
  id: 2,
};

const obj = {
  id: 1,
  name: "Test",
  lastName: "Test",
  id: 1000,
  age: 5,
  0: false,
  [user]: "Hello",
};

//кортеж - массив, состоящий из ключа и значения

//создает двумерный массив на основании объекта
//двумерный массив ключей и значений
const objEntries = Object.entries(obj);
console.log(objEntries);

//двумерный массив значений
const objValues = Object.values(obj);
console.log(objValues);

//двумерный массив ключей
const objKeys = Object.keys(obj);
console.log(objKeys);

//длина массива
const objSize = objEntries.length;
console.log(objSize);

const map = new Map();

const arr = [1, 34, 5];

const func = () => {};

map.set("id", 1);
map.set(arr, "array");
map.set(func, "function");
map.set(1, 1);
map.set("1", "number one");
map.set(user, "object");
console.log(map);

const value = map.get(user);
console.log(value);
map.delete(user);
console.log(map);
//==================================================================

//Словарь
const vocabulary = new Map([
  ["получить", "obtain"],
  ["преимущество", "advantage"],
  ["стул", "chair"],
  ["наличка", "cash"],
  ["цифробуквенный", "alphanumerical"],
  ["переговоры", "negotiacions"],
  ["значительный", "significant"],
  ["кот", "cat"],
  ["собака", "dog"],
  ["слон", "elephant"],
  ["язык", "language"],
]);

const stringToTranslate =
  "слон значительный получить наличку собака кот цифробуквенный стул";

function translate(str) {
  const arrFromStr = str.split(" ");
  for (let i = 0; i < arrFromStr.length; i++) {
    arrFromStr[i] = vocabulary.get(arrFromStr[i]);
  }
  arrFromStr.join(" ");
  return arrFromStr;
}
console.log(translate(stringToTranslate));

//refactoring
function translate_(str) {
  return str
    .split(" ")
    .map((element) =>
      vocabulary.has(element) ? vocabulary.get(element) : element
    )
    .join(" ");
}
console.log(translate_(stringToTranslate));
//==================================================================
const u1 = {
  id: 1,
  name: "John",
  age: 20,
};
const u2 = {
  id: 2,
  name: "Jane",
  age: 23,
};
const johnMsg = ["Hello", "yes", "no", "test"];
const janeMsg = ["Hi", "abracadabra?", "test", "not test"];

const msgToUser = new Map();

msgToUser.set(u1, johnMsg);
msgToUser.set(u2, janeMsg);

function getUserMessege(user) {
  return msgToUser.get(user);
}
console.log(getUserMessege(u1));

msgToUser.set(u1.id, johnMsg);
msgToUser.set(u2.id, janeMsg);

function getUserMessege_({ id }) {
  return msgToUser.get(id);
}
console.log(getUserMessege_({id:2}));
