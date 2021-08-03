//==================================================================
"use strict";
class Auto {
  constructor(weightAuto, maxSpeed, currentSpeed, name) {
    this.weightAuto = weightAuto;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = currentSpeed;
    this.name = name;
  }

  set weightAuto(newWeightAuto) {
    if (isNaN(newWeightAuto) || typeof newWeightAuto !== "number") {
      throw new TypeError("Invalid type");
    }
    if (newWeightAuto < 0) {
      throw new RangeError("Weigth auto cant be a negative");
    }
    this._weightAuto = newWeightAuto;
  }
  get weightAuto() {
    return this._weightAuto;
  }

  set maxSpeed(newMaxSpeed) {
    if (isNaN(newMaxSpeed) || typeof newMaxSpeed !== "number") {
      throw new TypeError("Invalid type");
    }
    if (newMaxSpeed < 0) {
      throw new RangeError("Max speed auto cant be a negative");
    }
    this._maxSpeed = newMaxSpeed;
  }
  get maxSpeed() {
    return this._maxSpeed;
  }

  set currentSpeed(newCurrentSpeed) {
    if (isNaN(newCurrentSpeed) || typeof newCurrentSpeed !== "number") {
      throw new TypeError("Invalid type");
    }
    if (newCurrentSpeed < 0) {
      throw new RangeError("Current speed auto cant be a negative");
    }
    this._currentSpeed = newCurrentSpeed;
  }
  get currentSpeed() {
    return this.currentSpeed;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Invalid type");
    }
    if (newName.trim() === "") {
      throw new Error("Name must not be empty");
    }
    this._name = newName.trim();
  }
  get name() {
    return this._name;
  }

  /* Статический метод*/ 
  static isCar(carInstance) {
    return carInstance instanceof Car;
  }
}
const auto1 = new Auto(2000, 300, 350, "Toyota");
console.log(auto1);

/*Статический метод вызывается для всего класса в целом, а не для отдельного объекта.
Ключевое слово this не используется.*/
