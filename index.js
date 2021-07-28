// Function expression - функциональное выражение
// Сумма двух чисел
const getSumOfTwoNumbers = function (value1, value2) {
	if (isNaN(value1 - value2)) {
		alert("Incorrect data");

		return null;
	} else {
		const result = value1 + value2;
	}
}
//==================================================================

const myFirstJSFunc = function () {
	alert("Hello, world!");
};

myFirstJSFunc();
//==================================================================

// Найти из двух чисел минимальное
const getMinNumbers = function (value1, value2) {
	if (isNaN(value1 - value2)) {
		return null;
	}
	if (value1 < value2) {
		return value1;
	}
	return value2;
};
//==================================================================

// Найти из двух чисел максимальное
const getMaxNumbers = function (value1, value2) {
	if (isNaN(value1 - value2)) {
		return null;
	}
	if (value1 > value2) {
		return value1;
	}
	return value2;
};
//==================================================================

// Проверить число на четность
const isEvenNumbers = function (value) {
	if (value % 2 === 0) {
		return true;
	} else return false;
	return value % 2 === 0; //т.к. value % 2 === 0 - это true!
};
//==================================================================

// Решить квадраное уравнение
// 1 вариант
const solveSquareExpression = function (a, b, c) {
	if (isNaN(a - b - c)) {
		return null;
	}
	const d = b * b - 4 * a * c;
	if (d < 0) {
		return NaN;
	}
	if (d === 0) {
		const x = (-b / 2) * a;
		return x;
	}
	const dSquareRoot = d ** (1 / 2);
	const x1 = (-b + dSquareRoot) / (2 * a);
	const x2 = (-b - dSquareRoot) / (2 * a);
	return [x1, x2];
};

// 2 вариант
const solveSquareExpression = function (a, b, c) {
	if (isNaN(a - b - c)) {
		return null;
	}
	const d = b * b - 4 * a * c;
	if (d < 0) {
		return NaN;
	}
	const dSquareRoot = d ** (1 / 2);
	const x1 = (-b + dSquareRoot) / (2 * a);
	const x2 = (-b - dSquareRoot) / (2 * a);
	return [x1, x2];
};