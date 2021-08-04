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

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError("Это не фигура");
}

const triangle = new Triangle(2, 5);
const square = new Square(5);
const testFigure = new Figure("Тестовая фигура");
console.log(triangle);
console.log(square);

console.log(getFigureArea(triangle));
console.log(getFigureArea(square));
console.log(getFigureArea(testFigure));
