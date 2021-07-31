//==================================================================
"use strict";
/*...rest - остаточные параметры
... - собери оставшиеся параметры и положи их в массив
...rest всегда должен быть последним*/

//1 вариант
const arrowSum = (...rest) => {
	let result = 0;
	for (let i = 0; i < rest.length; i++) {
		result += rest[i];
	}
	return result;
}
console.log(arrowSum(5, 6));

//2 вариант
const arrowSum2 = (...rest) => {
	const callback = function (accumulator, currentValue) {
		return accumulator + currentValue;
	}
	return rest.reduce(callback);
}
console.log(arrowSum2(5, 6));

//со стрелкой
const arrowSum3 = (...rest) => rest.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(arrowSum3(5, 6));
//==================================================================

/*... - spread-оператор
- расширяет перебираемый объект в спиоск аргументов
- работает только с итерируемыми объектами
- можно использовать для слияния массивов*/

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
console.log(...numbers);

const numbers2 = [11, 22, 33, 44, 55, 66];
console.log(numbers2);
console.log(...numbers2);

console.log(...numbers, ...numbers2);
