//==================================================================
// Калькулятор
const firstNumber = +prompt("Введите первое число");
const secondNumber = +prompt("Введите второе число");
const operator = +prompt(
	"Выберите действие:\n1-Сложение\n2-Умножение\n3-Умножение\n4-Деление"
);

switch (operator) {
	case 1:
		alert(firstNumber + secondNumber);
		break;
	case 2:
		alert(firstNumber - secondNumber);
		break;
	case 3:
		alert(firstNumber * secondNumber);
		break;
	case 4:
		alert(firstNumber / secondNumber);
		break;
	default: {
		alert("Выберите действие");
	}
}
//==================================================================
const firstNumber = +prompt('number 1');
const secondNumber = +prompt('number 2');
const operator = prompt('Enter operator');
const calculate = function (firstNumber, secondNumber, operator) {
	if (isNaN(firstNumber - secondNumber)) {
		return null;
	}
	switch (operator) {
		case "+": {
			const result = firstNumber + secondNumber;
			return result;
		}
		case "-": {
			const result = firstNumber + secondNumber;
			return result;
		}
		case "*": {
			const result = firstNumber + secondNumber;
			return result;
		}
		case "/": {
			const result = firstNumber + secondNumber;
			return result;
		}
		default: {
			return null;
		}
	}
};
calculate();