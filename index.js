//==================================================================
function Phone(model, manufacturer, price, color, inStock) {
	this.model = model;
	this.manufacturer = manufacturer;
	this.price = price;
	this.color = color;
	this.inStock = inStock;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function getPhones(amount) {
	const newPhones = [];

	for (let i = 0; i < amount; i++) {
		newPhones.push(
			new Phone(
				`Model ${i}`,
				"Panasonic",
				getRandomInt(5000, 50000),
				"black",
				Math.random() >= 0.5
			)
		);
	}
	return newPhones;
}
console.table(phones);
//==================================================================
/*	1. Посчитать количество моделей телефонов в	наличии и вывести в консоль */
function getAvaliblePhonesNumber(phonesArray) {
	let amount = 0;
	const forEachCallback = function (phone, index, array) {
		if (phone.inStock) {
			amount++;
		}
	};
	phonesArray.forEach(forEachCallback);
	return amount;
}
//==================================================================
/* 1.1* Вывести в консоль для каждого элемента массива	строку следующего вида:
	'<Производитель> <Модель> со стоимостью <цена> сейчас <в наличии / нет в наличии>' */

function getPhoneData(phonesArray) {
	const callback = function (phone) {
		const phoneStockMessage = phone.inStock ? 'в наличии' : 'нет в наличии';
		console.log(`${phone.manufacturer} ${phone.model} со стоимостью ${phone.price} UAH сейчас ${phoneStockMessage}`);
	}
	phonesArray.forEach(callback);
}
//==================================================================
/* 2. Получить массив тех телефонов, которые есть в наличии */

const phonesInStock = phones.filter(function (phone) {
	return phone.inStock;
});
//==================================================================
/* 3. Получить массив телефонов для праздничной распродажи (черная пятница и т.д)
Всем телефонам которые стоят больше 30000 снизить цену на 30%. */

const phonesWithDiscount = phonesInStock.map(function (phone) {
	if (phone.price > 30000) {
		phone.price = Math.round(phone.price * 0.7);
	}
	return phone;
});
//==================================================================
// advanced
/*1. Отсортировать массив телефонов по цене (от дорогих к дешевым)*/

const sortedArray = phones.sort(function (firstPhone, secondPhone) {
	return secondPhone.price - firstPhone.price; 		// только потому что там числа
});