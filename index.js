//==================================================================
"use strict";
function Human(name, lastname) {
	this.name = name;
	this.lastname = lastname;
}

function HumanProto() {
	this.walk = function () {
		console.log('I am walking rigt now');
	}
}
Human.prototype = new HumanProto();
const human1 = new Human('Test', 'Testovich');
console.log(human1);