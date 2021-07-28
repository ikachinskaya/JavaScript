alert('Hello World');
alert(5555);
console.log(42);

let num1 = 5;
const num2 = 7;

console.log("сложение: ", num1 + num2);
console.log("вычитание: ", num1 - num2);
console.log("умножение: ", num1 * num2);
console.log("деление: ", num1 / num2);
console.log("остаток от деления: ", num1 % num2);
console.log("возведение в степень: ", num1 ** num2);

let value1 = "cat";
let value2 = "dog";

console.log(value1 > value2);

value1 += "dog";
console.log(value1);

let a = 5;
let b = 7;
let c = (a, b, a + b);
console.log(c);

console.log(NaN === NaN);

const myName = prompt("Enter your name: ");
alert("Hello, " + myName);

const number1 = +prompt("Enter first number: ");
const number2 = +prompt("Enter first number: ");
const result = number1 + number2;
alert(result);