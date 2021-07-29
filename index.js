//==================================================================
function highOrderFunction(callbackFunction, num1, num2) {
	return callbackFunction(num1, num2);
}

const hofSum = highOrderFunction(function (elem, elem2) {
	return elem + elem2;
}, 5, 5);

function hof() {
	return function () {
		return true;
	}
}

const test = hof();