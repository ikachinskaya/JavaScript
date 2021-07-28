//==================================================================
function UserProto() {
	this.login = function () {
	}

	this.logout = function () {
		return 'you logged out'
	}

	this.createComment = function () {
	}
}

function User(username, email, password) {
	this.username = username;
	this.email = email;
	this.password = password;
	this.isAdmin = false;
	this.isBanned = false;
}
//создаем объект прототип User
const userPrototype = new UserProto();

//говорим, что у User прототип - userPrototype
User.prototype = userPrototype;

const user1 = new User('destrouer997', 'destr@mylo.com', '12343');

function AdminProto() {
	this.ban = function (user) {
		if (user.isAdmin === true) {
			throw new Error('Нельзя банить админов');
		}
		user.isBanned = true;
		return user;
	}
}

function Admin(username, email, password) {
	this.username = username;
	this.email = email;
	this.password = password;
	this.isAdmin = true;
	this.isBanned = false;
}

//создаем объект прототип Admin
const admProto = new AdminProto();

//говорим, что у AdminProto прототип - userPrototype
AdminProto.prototype = userPrototype;

//говорим, что у Admin прототип - admProto
Admin.prototype = admProto;

const admin1 = new Admin('Test', 'Testovich', 12323);

admin1.__proto__ = admProto;

const admin2 = new Admin('Test2', 'Testovich2', 12323);
// const userPrototype = new UserProto();

// User.prototype = userPrototype;