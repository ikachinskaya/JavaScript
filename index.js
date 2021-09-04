//==================================================================
"use strict";

/* Структура данных — это конкретный способ хранения и организации данных.  */

/* Очередь — список задач, подлежащих обработке. 
  Каждая задача ассоциируется с некоторой функцией, которая будет вызвана, чтобы обработать эту задачу.
  Когда стек полностью освобождается, самая первая задача извлекается из очереди и обрабатывается. 
  Обработка задачи состоит в вызове  ассоциированной с ней функции с параметрами, записанными в этой задаче. 
  Как обычно, вызов функции создаёт новый контекст выполнения и заносится в стек вызовов.
  Обработка задачи заканчивается, когда стек снова становится пустым. 
  Следующая задача извлекается из очереди и начинается её обработка.

  Очередь - FIFO (First In First Out). 
  После добавления нового элемента все элементы, которые были добавлены до этого, должны быть удалены до того, как новый элемент будет удален.
  В очереди есть только две основные операции: enqueue и dequeue. 
  Enqueue - вставить элемент в конец очереди.
  Dequeue - удаление переднего элемента.
 */

class Queue {
  constructor(...elements) {
    this._tail = 0;
    this._head = 0;
    for (let i = 0; i < elements.length; i++) {
      this.push(elements[i]);
    }
  }

  get size() {
    return this._tail - this._head;
  }

  /**
   * Добавление элемента в конец очереди
   * @param {*} item
   * @returns {number} размер очереди
   */
  push(item) {
    this[this._tail++] = item;
    return this.size;
  }

  /**
   * Удаление элемента с конца очереди
   * @returns {any} значение удаленного элемента
   */
  pop() {
    if (this.size > 0) {
      const deleted = this[this._head];
      delete this[this._head++];
      return deleted;
    }
  }
}

/**
 * Функция, которая принимает две очереди и возвращает
 * очередь с поочередно вставленными данными из принятых очередей
 * @param {Queue} q1 первая очередь
 * @param {Queue} q2 вторая очередь
 * @returns {Queue} очередь из двух очередей
 */
function mergeQueue(q1, q2) {
  const resultQueue = new Queue();
  // while (q1.size || q2.size) {
  //   if (q1.size) {
  //     resultQueue.push(q1.pop());
  //   }
  //   if (q2.size) {
  //     resultQueue.push(q2.pop());
  //   }
  // }

  for (let i = 0; i !== q1.size + q2.size; ) {
    if (q1.size) {
      resultQueue.push(q1.pop());
    }
    if (q2.size) {
      resultQueue.push(q2.pop());
    }
  }

  return resultQueue;
}

const q = new Queue();
q.push(10);
q.push(20);
q.push(30);
console.log(q);
q.pop();
console.log(q);
console.log(q.size);
console.log(q);
const Q = new Queue(100, 200, 300, 400);
console.log(Q);

const q1 = new Queue(1, 3, 5, 7, 9, 11);
const q2 = new Queue(2, 4, 6, 8);
const resultQueue = mergeQueue(q1, q2);
console.log(resultQueue);
