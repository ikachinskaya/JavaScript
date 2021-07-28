//==================================================================
// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
//Принимает (текущий элемент, [индекс], [массив])

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// с помощью for умножить каждый элемент массива на 2
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i] * 2);
}

// с помощью forEach
// 1 вариант
function double(number) {
	const result = number * 2;
	console.log(result);
	return result;
}
arr.forEach(double);

// 2 вариант
arr.forEach(function (number) {
	console.log(number * 2);
});

// вывести в консоль
arr.forEach(function (elem) {
	console.log(elem);
});
//==================================================================

const users = [
	{ firstName: "User1", lastName: "Test", age: 20 },
	{ firstName: "User2", lastName: "Test", age: 13 },
	{ firstName: "User3", lastName: "Test", age: 50 },
	{ firstName: "User4", lastName: "Test", age: 77 },
	{ firstName: "User5", lastName: "Test", age: 45 },
	{ firstName: "User6", lastName: "Test", age: 19 },
	{ firstName: "User7", lastName: "Test", age: 415 },
];

function greet(user) {
	const greeting = `Привет ${user.firstName} ${user.lastName}`;
	console.log(greeting);
	return greeting;
}
users.forEach(greet);

// forEach без forEach
for (let i = 0; i < users.length; i++) {
	greet(users[i]);
}