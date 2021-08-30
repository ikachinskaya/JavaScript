//==================================================================
"use strict";

/*Рекурсия - функция, которая вызывает сама себя.*/

let count = 0;
function test() {
  console.log(count);
  count++;
  if (count < 10) {
    test();
  }
}
//console.log(test());
//==================================================================
/**
 *
 * @param {number} number
 */
function countDown(number) {
  console.log(number);
  if (number > 0) {
    countDown(number - 1);
  }
}
//console.log(countDown(5));
//==================================================================
/**
 *
 * @param {number} min
 * @param {number} max
 */
function logRange(min, max) {
  console.log(min);
  if (min < max) {
    logRange(min + 1, max);
  }
}
//console.log(logRange(5, 25));
//==================================================================
/**
 *
 * @param {number} number
 * @returns {number} сумма чисел от 1 до max
 */
function increment(number) {
  let result = number;
  if (number > 0) {
    result += increment(number - 1);
  }
  /*for(let i = 0; i<number; i++) {
    result+=i;
  }*/
  return result;
}
//console.log(increment(5));
//==================================================================
/* Binary Tree*/
const tree = {
  value: 10,
  left: {
    value: 20,
    left: {
      value: 10,
    },
  },
  right: {
    value: 30,
  },
};
/**
 * @param {object} tree
 * @returns {number} сумма всех параметров value
 */
function getTreeValue(tree) {
  const { value, left, right } = tree;
  let result = value;
  //console.log(result)
  if (left) {
    result += getTreeValue(left);
  }
  if (right) {
    result += getTreeValue(right);
  }
  return result;
}
//console.log(getTreeValue(tree));
//==================================================================
//Refactoring
const tree_ = {
  value: 10,
  left: {
    value: 20,
    left: {
      value: 10,
    },
  },
  right: {
    value: 30,
  },
};
/**
 * @param {object} tree
 * @param {number} tree.value значение узла дерева
 * @param {object} tree.left левый узел дерева
 * @param {object} tree.right правый узел дерева
 * @returns {number} сумма всех параметров value
 */
function getTreeValue_({ value, left, right }) {
  let result = value;
  //console.log(result)
  if (left) {
    result += getTreeValue_(left);
  }
  if (right) {
    result += getTreeValue_(right);
  }
  return result;
}
//console.log(getTreeValue_(tree_));
//==================================================================

/**
 *
 * @param {number} number число
 * @param {number} pow степень
 * @returns {number}
 */
function power(number, pow) {
  let result = number;

  if (pow === 0) {
    return 1;
  }
  if (pow < 0) {
    number = 1 / number;
    pow *= -1;
    result *= power(number, pow - 1);
  }
  if (pow > 0) {
    result *= power(number, pow - 1);
  }
  return result;
}

console.log(power(2, 3));
console.log(power(2, -3));
console.log(power(2));
//==================================================================
//Refactoring
function power_(number, pow) {
  let result = number;
  if (pow === 0) {
    return 1;
  }
  return pow < 0
    ? (result *= power(1 / number, Math.abs(pow - 1)))
    : (result *= power(number, pow - 1));
}
console.log(power_(2, 3));
console.log(power_(2, -3));
console.log(power_(2));
