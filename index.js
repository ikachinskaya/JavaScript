//==================================================================
// CRUD
//Create. Литеральная запись объекта.
const monitor = {
	width: "70sm",
	color: "red",
	manufacturer: "Samsung",
	isOn: true,
	price: 500,
	switchOff: function () {
		alert("Monitor switched off");
	},
	switchOn: function () {
		alert("Monitor switched on");
	},
};

const human = {
	gender: "male",
	year: 2000,
	weight: 50,
	height: 165,
	isWork: true,
	speak: function () {
		alert("Human talking");
	},
};

//Read
console.log(monitor);
console.log(human);

//Update
monitor.isOn = false;

//Delete
delete monitor.width;