//==================================================================
const cat1 = {
	name: "Оболтус",
	breed: "Сиамский",
	age: 5,
	color: "серый",
	isMale: true,
	sleep: function () {
		return "ZZZ...";
	},
};

const cat2 = {
	name: "Арнольд",
	breed: "Шотландский вислоухий",
	age: 2,
	color: "серый",
	isMale: false,
	sleep: function () {
		return "ZZZ...";
	},
};

const cat3 = {
	name: "Васька",
	breed: "Дворовой",
	age: 5,
	color: "серый",
	isMale: true,
	sleep: function () {
		return "ZZZ...";
	},
};

// Функция-конструктор котов
function Cat(name, breed, age, color, isMale) {
	this.name = name;
	this.breed = breed;
	this.age = age;
	this.color = color;
	this.isMale = isMale;

	this.sleep = function () {
		return "ZZZZZZ....";
	};

	this.run = function () {
		return "Tgdim....tgdim....";
	};
}

//new говорит return this
const cat1 = new Cat("Marsik", "Dvor", 9, "grey", true);
console.log(cat1);
console.log(cat1.run());