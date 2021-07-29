//==================================================================
/*ЧИСТАЯ ФУНКЦИЯ:
•	Является детерминированной;
•	Не обладает побочными эффектами.
Детерминированная функция каждый раз возвращает один и тот же результат, если предоставлять им один и тот же набор значений.
Побочные эффекты – любые действия работающей программы, изменяющей среду выполнения. (alert, console.log, изменение функцией глобальной переменной(let), объекта и т.д., запрос на сервер).*/

'use strict';
// functional expression
const anotherSum = function (a, b) {
	return a + b;
}

// function decrlaration
function sum(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

function square(number) {
	const result = multiply(number, number);

	return result;
}