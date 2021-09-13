//==================================================================
"use strict";

/*
Объект Promise используется для отложенных и асинхронных вычислений.

Метод fetch запускает процесс извлечения ресурса из сети. 
Возвращает Promise, содержащий Response (ответ на запрос).

Promise может находиться в трёх состояниях:

ожидание (pending): начальное состояние, не исполнен и не отклонён.
исполнено (fulfilled): операция завершена успешно.
отклонено (rejected): операция завершена с ошибкой.

then() возвращает Promise. 
Метод может принимать два аргумента: колбэк-функции для случаев выполнения и отклонения промиса.
Исполнится, когда promise успешно загрузится.

*/
//==================================================================
//синхронно
//извлекли данные из users.json и вернули promise в состоянии pending
//fetchResult - это набор бит, в котором лежит ответ
const fetchResult = fetch("./users.json");
console.log(fetchResult);

//асинхронно
//response  - ответ
const firstThen = fetchResult.then((response) => {
  console.log("Завершился запрос fetch");
  console.log(response);

  //преобразовали данные (набор в бит) в json, снова вернули promise
  const jsonResponse = response.json();
  console.log("Преобразовали данные в JS массив");
  console.log(jsonResponse);
  return jsonResponse;
});

//передали промису данные и получили нужный массив объектов
const secondThen = firstThen.then((data) => {
  console.log("Получили данные");
  //данные будут доступны только здесь, т.е это работает асинхронно
  console.log(data);
});

//здесь лежит promise
console.log(firstThen);
//синхронно
console.log("end");
//==================================================================

//цепочка вызовов
fetch("./users.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
//==================================================================

//если json сломался

//1 вариант, но так не пишут
//then() может принимать 2 колбэка

fetch("./userssssss.json")
  .then(
    (response) => response.json(),
    (err) => {
      console.log("Ошибка в then");
    }
  )
  .then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log("Ошибка 2 в then");
    }
  );
//==================

//2 вариант, так пишут
fetch("./userssssss.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Ошибка в catch");
  });
//==================================================================

/*
executor - Объект функции с двумя аргументами resolve и reject.
Функция executor  получает оба аргумента и выполняется сразу, ещё до того как конструктор вернёт созданный объект.

resolve вызывает успешное исполнение промиса, в
reject - отклоняет его.

executor описывает выполнение какой-то асинхронной работы,
по завершении которой необходимо вызвать функцию resolve или reject.

Возвращаемое значение функции executor игнорируется.
*/
function executor(resolve, reject) {
  //выполнится одна функция
  resolve(); //вызывает успешное исполнение промиса
  reject(); //отклоняет его
}

const promise = new Promise(executor);

//==================

const ratPromise = new Promise((resolve, reject) => {
  const verdict = Math.random();
  if (verdict > 0.5) {
    resolve("Крыса жива");
  } else {
    reject("Крыса не жива");
  }
});

ratPromise.then(
  (data) => {
    console.log(data);
  },
  (errorData) => {
    console.log(errorData);
  }
);
//==================================================================

const loadDiv = document.getElementById("load");

const result = fetch("data .json")
  .then((response) => response.json())
  .then((data) => {
    document.body.append(JSON.stringify(data, null, 4));
  })
  .catch((err) => {
    document.body.append("error happende");
  })
  .finally(() => loadDiv.remove());
//==================================================================

//создание промиса сразу исполненным
const resolvedPromise = new Promise((resolve, reject) => {
  resolve(42);
});

//то же самое, только более короткая запись
const resolvedPromise2 = Promise.resolve(42);

const rejectedPromise = Promise.reject(42);

//можно так
const rejectedPromise2 = Promise.reject(42).catch((err) => {
  console.log(err);
});

//функция проверяет, что лежит в промисе
function handlerPromise(promise) {
  return promise.then(
    (data) => {
      console.log(`Promise data is ${data}`);
    },
    (err) => {
      console.log(`Rejected with error ${err}`);
    }
  );
}

console.log(handlerPromise(resolvedPromise));
console.log(handlerPromise(resolvedPromise2));
//==================================================================

function logA() {
  console.log("A");
}
function logB() {
  console.log("B");
}
function logC() {
  console.log("C");
}
function logD() {
  console.log("D");
}
function logPromise() {
  console.log("Promise");
}
function logTimeOut() {
  console.log("TimeOut");
}

setTimeout(logTimeOut, 0);
Promise.resolve().then(() => {
  logPromise();
});
setTimeout(logTimeOut, 0);
Promise.resolve().then(() => {
  logPromise();
});
setTimeout(logTimeOut, 0);
Promise.resolve().then(() => {
  logPromise();
});
