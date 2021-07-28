//==================================================================
const users = [
	{ firstName: "User2", lastName: "Test", age: 13 },
	{ firstName: "User1", lastName: "Test", age: 20 },
	{ firstName: "User3", lastName: "Test", age: 50 },
	{ firstName: "User4", lastName: "Test", age: 77 },
	{ firstName: "User5", lastName: "Test", age: 45 },
	{ firstName: "User6", lastName: "Test", age: 19 },
	{ firstName: "User7", lastName: "Test", age: 415 },
];

function isAdult(user) {
	return user.age >= 18;
}
// Метод some() проверяет, удовлетворяет ли какой - либо элемент массива условию, заданному в передаваемой функции.
const someVerdict = users.some(isAdult);

// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
const everyVerdict = users.every(isAdult);

console.log(someVerdict);
console.log(everyVerdict);