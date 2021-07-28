//==================================================================

//Мой вариант
const PASSWORD = "admin";
let userPassword = prompt("Введите пароль");

while (userPassword) {
	if (userPassword !== PASSWORD) {
		userPassword = prompt("Введите пароль");
	} else {
		break;
	}
}

// 2 вариант
while (true) {
	let userPassword = prompt("Введите пароль");
	if (userPassword === PASSWORD) {
		break;
	}
}

// ограничить до 5 раз
const MAX_TRIES = 5;
let tries = 0;

while (true) {
	const userPassword = prompt("Введите пароль");
	tries++;
	if (userPassword === PASSWORD) {
		alert("Вы вошли");
		break;
	}
	if (tries >= MAX_TRIES) {
		alert("Пока!");
		break;
	}
}