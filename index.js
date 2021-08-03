//==================================================================
"use strict";
let thread = [];

class User {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.isBanned = false;
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }

  createMessage(message) {
    thread.push(message);
    return message;
  }
}

class Moderator extends User {
  constructor(name, lastName, age, permission) {
    super(name, lastName, age);
    this.permission = permission;
  }
  deleteMessage(messageId) {
    thread.pop();
  }

  betterDeleteMessage(messageId) {
    thread = thread.filter((message, i) => {
      return messageId !== i;
    });
  }
}

class Admin extends Moderator {
  constructor(name, lastName, age, permission, email) {
    super(name, lastName, age, permission);
    this.email = email;
  }
  banUsers(user) {
    user.isBanned = true;
  }
}

const user1 = new User("Test", "Testovich", 50);
const moderator1 = new Moderator("Petr", "Semenovich", 45, {
  canDeleteMessages: true,
});
const admin1 = new Admin(
  "Admin",
  "Adminovich",
  55,
  { canDeleteUsers: true, canDeleteMessages: true },
  "test@mail.com"
);

admin1.createMessage("Привет");
admin1.createMessage("Здрасьте");
admin1.createMessage("Hello");
admin1.createMessage("Я тут");
admin1.createMessage("Пока!");
console.log(thread);

admin1.betterDeleteMessage(1);
console.log(thread);

admin1.banUsers(user1);
console.log(user1);
