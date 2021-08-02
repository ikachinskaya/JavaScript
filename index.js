//==================================================================
"use strict";
class Human {
  constructor(name, lastname, age) {
    if (isNaN(age) || typeof age !== "number") {
      throw new TypeError("Age must be a number");
    }
    if (age < 0) {
      throw new RangeError("Age must be >0");
    }

    //свойства создаваемого экземпляра класса
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Ведите строку");
    }
    this._name = newName;
  }

  get lastname() {
    return this._lastname;
  }
  set lastname(newLastName) {
    if (typeof newLastName !== "string") {
      throw new TypeError("Ведите строку");
    }
    this._lastname = newLastName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (isNaN(newAge) || typeof newAge !== "number") {
      throw new TypeError("Age must be a number");
    }
    if (newAge < 0) {
      throw new RangeError("Age must be >0");
    }
    this._age = newAge;
  }
  //методы у экземпляров класса
  //создаст метод один раз и закинет в объект каждого экземпляра
  walk = function () {
    console.log("I am walking right now");
  };

  isAdult = function () {
    return this.age >= 18;
  };
}

const human1 = new Human("Coolkid", "Coolkidovich", 18);
const human2 = new Human("Coolkid", "Coolkidovich", 5);

console.log(human1);
console.log(human2);
