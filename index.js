//==================================================================
const phones = [
	{ model: '11', brand: "Apple", price: 150000 },
	{ brand: "motorolla" },
	{ brand: "Google" },
	{ brand: "Meizu" },
	{ brand: "Xiaobao" },
	{ model: 'X', brand: "Apple", price: 15000 },
	{ brand: "Huawei" },
	{ brand: "Honor" }
]

const checkBrand = function (brand, targetBrand) {
	return brand === targetBrand;
}

const callback = function (phone) {
	return checkBrand(phone.brand, "Apple");
}

const applePhones = phones.filter(callback);

const cheapApplePhones = applePhones.filter(function (phone) {
	return phone.price <= 20000;
})