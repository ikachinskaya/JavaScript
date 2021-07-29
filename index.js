//==================================================================
"use strict";
/*Функции-стрелки:
- Только function expression;
- Не имеет своего this
- Не работает с arguments*/

// function expression
const anotherSum = function (a, b) {
	return this;
};

// function decrlaration
function sum(a, b) {
	return this;
}

const arrowSum = (a, b) => {
	return a + b;
};

//если в {} одна строка
const arrowSum2 = (a, b) => a + b;

//==================================================================
const newspaper = {
	title: "NY Post - Murzilka",

	articles: ["Main news", "Article not main", "test1234", "give more money"],

	showArticles() {
		//const that = this;

		//this: newspaper. Просит this у showArticles, а у него this - newspaper
		const arrow3 = () => {
			console.log(this);
		}
		arrow3();

		this.articles.forEach((article, index, array) => {
			console.log(
				`Newspaper ${this.title} | Article №${index + 1} : ${article}`
			);
		});
	},

	//this:Window, т.к. нет своего this, и он берет выше(т.е. Window)
	arrow2: () => {
		console.log(this);
	}
};

//this:Window
const arrow1 = () => {
	console.log(this);
}
//==================================================================

//Четные числа
const arr = [1, 2, 3, 4];
//1 вариант
const evenArr = arr.filter(function (number) {
	return number % 2 === 0;
});
//2 вариант со стрелкой
const evenArr2 = arr.filter((number) => number % 2 === 0);
//==================================================================

//Сумма чисел, функция без параметров. Стрелкой не получится.
const summa = function () {
	let result = 0;
	for (let i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}