//==================================================================
"use strict";
function sum(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a - b)) {
		throw new TypeError('Invalid number');
	}
	if (a < 0) {
		throw new RangeError('Число a должно быть положительным');
	}
	return a + b;
}
console.log(sum(1, 'test'));

//Reference Error
console.log(abracadabra);

//SyntaxError
//...test1;