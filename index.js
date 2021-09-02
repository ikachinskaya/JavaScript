//==================================================================
"use strict";

/* Структура данных — это конкретный способ хранения и организации данных.  */

/*Stack — упорядоченная коллекция элементов, в которой добавление новых и удаление старых элементов 
всегда происходит с одного конца коллекции. Обычно его называют вершиной стека. 
"Last In First Out" (LIFO), то есть "последним зашёл, первый вышел".*/

//Stack
/**
 * @param {number} maxSize размер стека
 */
class Stack {
  constructor(maxSize = 10, ...items) {
    this.maxSize = maxSize;
    this._size = 0;
    for (let i = 0; i < items.length; i++) {
      this.push(items[i]);
    }
  }

  push(item) {
    if (this._size >= this.maxSize) {
      throw new RangeError("Stack overflow");
    }
    this[`_${this._size}`] = item;
    this._size++;
    return this._size;
  }

  pop() {
    if (this._size === 0) {
      return;
    }
    const deleted = this[`_${this._size - 1}`];
    delete this[`_${this._size--}`];
    return deleted;
  }

  pick() {
    return this[`_${this._size}-1`];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.pop();
console.log(stack.pick());
console.log(stack);

const stack1 = new Stack(10, "test", "test12", "123", false);
console.log(stack1);
