//==================================================================
const user = {
	firstName: 'Null',
	lastName: 'Nullovna',
	age: 18,
	isMale: false
}
const user1 = {
	firstName: 'Undefined',
	lastName: 'Undefinov',
	age: 18,
	isMale: true
}

function sayHello(user) {
	return `Hello ${user.firstName} ${user.lastName}!`;
}
console.log(sayHello(user));
console.log(sayHello(user1));