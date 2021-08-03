//==================================================================
"use strict";

class Figure {
  constructor(name, secret) {
    this.name = name;
  }

  getArea() {}
}

class Triangle extends Figure {
  constructor(a, h) {
    super("Треугольник");

    this.a = a;
    this.h = h;
  }

  getArea() {
    return this.a * this.h * 0.5;
  }
}

class Square extends Figure {
  constructor(a) {
    super("Квадрат");

    this.a = a;
  }

  getArea() {
    return this.a * this.a;
  }
}

const triangle = new Triangle(2, 5);
const square = new Square(5);

console.log(triangle);
console.log(square);
