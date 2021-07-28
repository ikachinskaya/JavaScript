//==================================================================
function Student(firstName, lastName, age, isMale) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.isMale = isMale;
	this.study = study;
}

function study() {
	return `Student ${this.firstName} ${this.lastName} is studying`;
}

const student1 = new Student('Test', 'Testovich', 22, true);
const student2 = new Student('Test1', 'Testovich1', 221, true);

console.log(student1);
console.log(student2);