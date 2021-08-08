//==================================================================
"use strict";

class MyArray {
  constructor(...startingValues) {
    this.length = 0;
    this.push(...startingValues);
  }

  push(...incomingValues) {
    for (const value of incomingValues) {
      this[this.length++] = value;
    }
    return this.length;
  }

  unshift(...incomingValues) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + incomingValues.length] = this[i];
    }
    for (let i = 0; i < incomingValues.length; i++) {
      this[i] = incomingValues[i];
    }
    return this.length;
  }

  [Symbol.iterator]() {
    let currentIndex = 0;
    const context = this;
    return {
      next() {
        return {
          value: context[currentIndex++],
          done: currentIndex > context.length,
        };
      },
    };
  }
}

const myArray = new MyArray(11, 22, 33, 44);
console.log(myArray);

for (const value of myArray) {
  console.log(value);
}

myArray.push(5, 6, 7, 8);
console.log(myArray);

myArray.unshift(111, 222, 333);
console.log(myArray);
