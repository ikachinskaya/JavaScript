//==================================================================
function User(firstName, lastName, age, isMale) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullName = `${firstName} ${lastName}`;
	this.age = age;
	this.isMale = isMale;

	this.startMoney = this.startMoney;
	this.IBAN = function (endMoney) {
		return (this.startMoney += endMoney);
	};
}

const user1 = new User("Bill", "Gates", 65, true);
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);
console.log(user1.isMale);
console.log(user1.fullName);
user1.startMoney = 300;
console.log(user1.startMoney);
console.log(user1.IBAN(1000));
console.log(user1);

// 2 вариант
function User1(firstName, lastName, age, isMale, moneyInBank, salary) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullName = firstName + ' ' + lastName;
	this.age = age;
	this.isMale = isMale;
	this.moneyInBank = moneyInBank;
	this.salary = salary;

	this.getSalary = function (monthNumber) {
		return this.moneyInBank += (this.salary * monthNumber);
	}
}
const user2 = new User1('Karl', 'Marx', 238, true, 0, 100);
const user3 = new User1('John', 'Rockfeller', 175, true, 10000000, 10000000);

console.log(user2);
console.log(user3);