//==================================================================
const user = {
	firstName: 'Null',
	lastName: 'Nullovna',
	age: 18,
	isMale: false,
	0: 'secret',
	'full name': 'Null Nullovna'
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
console.log(user[0]);
console.log(user['full name']);