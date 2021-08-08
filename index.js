//==================================================================
"use strict";

/*Деструктуризация - особый способ создания переменных*/

/*Деструктуризация объектов*/
const monitor = {
  matrix: "Ips",
  sizes: {
    width: {
      value: 50,
      unit: "cm",
    },
    height: {
      value: 20,
      unit: "cm",
    },
  },
  resolution: {
    horizontal: {
      value: 1920,
      unit: "px",
    },

    vertical: {
      value: 1080,
      unit: "px",
    },
  },
  color: "black",
  manufactures: "Samsung",
  refreshRate: 60,
};

const {
  matrix: monitorMatrix,
  sizes: {
    width: { value: monitorWidth },
    height: { value: monitorHeight },
  },
  resolution: {
    horizontal: { value: monitorHorizontal },
    vertical: { value: monitorVertical },
  },

  color: monitorColor,
  manufactures: monitorManufactures,
  refreshRate: monitorRefreshRate,
} = monitor;

console.log(monitorMatrix);
console.log(monitorWidth);
console.log(monitorHeight);
console.log(monitorHorizontal);
console.log(monitorVertical);
console.log(monitorColor);
console.log(monitorManufactures);
console.log(monitorRefreshRate);
console.log("===============");

const {
  matrix: monitorMatrix_,
  sizes: {
    width: { value: monitorWidth_ },
    height: { value: monitorHeight_ },
  },
  resolution: {
    horizontal: { value: monitorHorizontal_ },
    vertical: { value: monitorVertical_ },
  },

  ...restOfMonitor
} = monitor;
console.log(restOfMonitor);
console.log("===============");

//==================================================================

/*Деструктуризация массивов*/
const array = [-999, 2, 58, 9];
console.log(array);

const [first] = array;
console.log(first);

const [one, , three] = array;
console.log(three);

const [first_, ...restOfArray] = array;
console.log(restOfArray);
console.log("===============");
//==================================================================
/*Деструктуризация в функциях*/

function calculateDiagonalOfMonitor(monitor) {
  const {
    sizes: {
      width: { value: monitorWidth },
      height: { value: monitorHeight },
    },
  } = monitor;

  return Math.sqrt(monitorWidth ** 2 + monitorHeight ** 2);
}

console.log(calculateDiagonalOfMonitor(monitor));
//==================================================================
function calculateDiagonalOfMonitor_({
  sizes: {
    width: { value: monitorWidth },
    height: { value: monitorHeight },
  },
}) {
  return Math.sqrt(monitorWidth ** 2 + monitorHeight ** 2);
}

console.log(calculateDiagonalOfMonitor_(monitor));
//==================================================================
const calculateDiagonalOfMonitor__ = ({
  sizes: {
    width: { value: monitorWidth },
    height: { value: monitorHeight },
  },
}) => Math.sqrt(monitorWidth ** 2 + monitorHeight ** 2);

console.log(calculateDiagonalOfMonitor__(monitor));
console.log("===============");
//==================================================================

const user = {
  name: "Test",
  lastName: "Testovich",
};

// function sayHi({ name, lastname }) {
//   return `${name} ${lastname}`;
// }
// console.log(sayHi());

function sayHello(user = { name: "Undefined", lastName: "Nullovich" }) {
  const { name, lastName } = user;
  return `Hello ${name} ${lastName}`;
}
console.log(sayHello());
