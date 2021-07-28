//==================================================================
function Animal() {
	this.exist = function () {
		return true;
	}
}

const monkeyPrototype = new Animal();

function Monkey(name, appendages) {
	this.name = name;
	this.appendages = appendages;
}

Monkey.prototype = monkeyPrototype;

const pete = new Monkey('Pete', 5);
const tom = new Monkey('Tom', 5);
const jerry = new Monkey('jerry', 5);
const testasdsadas = new Monkey('testasdsadas', 5);
const sadsa = new Monkey('asdsad', 5);

// pete.__proto__ = monkeyPrototype;
// tom.__proto__ = monkeyPrototype;