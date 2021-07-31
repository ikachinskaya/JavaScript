//==================================================================
"use strict";
class CoolerHuman {
	constructor(name, lastname, age) {
		if (isNaN(age) || typeof age !== 'number') {
			throw new TypeError("Age must be a number");
		}
		if (typeof age < 0) {
			throw new RangeError('Age must be >0');
		}
		//свойства создаваемого экземпляра класса
		this.name = name;
		this.lastname = lastname;
		this.age = age;
	}
	//методы у экземпляров класса
	//создаст метод один раз и закинет в объект каждого экземпляра
	walk = function () {
		console.log('I am walking right now');
	}
	isAdult = function () {
		return this.age >= 18;
	}
}

const coolerHuman1 = new CoolerHuman('Coolkid', 'Coolkidovich', 18);
const coolerHuman2 = new CoolerHuman('Coolkid', 'Coolkidovich', 5);

console.log(coolerHuman1);
console.log(coolerHuman2);