'use strict';
const add = (number1, number2) => {
  return number1 + number2;
};
const subtract = (number1, number2) => {
  return number1 - number2;
};
const multiply = (number1, number2) => {
  return number1 * number2;
};
const divide = (number1, number2) => {
  return number1 / number2;
};

const operate = (operator, number1, number2) => {
  if (operator === '+') return add(number1, number2);
  if (operator === '-') return subtract(number1, number2);
  if (operator === '*') return multiply(number1, number2);
  if (operator === '/') return divide(number1, number2);
};

const btnEl = document.querySelectorAll('.btn');
const calculationEl = document.querySelector('.calculation');

let sum = {
  number1: 0,
  number2: false,
  operator: false,
  result: false,
};

let screen = [];
let storage = [];

const getFirstNumber = () => {};

btnEl.forEach(button => {
  button.addEventListener('click', e => {
    // You’ll need to store the first number that is input into the calculator when a user presses an operator,
    // and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

    screen.push(button.dataset.button);
    storage.push(button.dataset.button);

    calculationEl.textContent = screen.join('');
    if (sum.result) {
      if (
        button.dataset.button === '+' ||
        button.dataset.button === '*' ||
        button.dataset.button === '-' ||
        button.dataset.button === '/'
      ) {
        sum.number1 = sum.result;
        sum.operator = button.dataset.button;
        storage = [];
      }
    }
    if (
      (button.dataset.button === '+' ||
        button.dataset.button === '*' ||
        button.dataset.button === '-' ||
        button.dataset.button === '/') &&
      !sum.result
    ) {
      sum.number1 = +storage.join('').slice(0, -1);
      sum.operator = storage.join('').slice(-1);
      storage = [];
    }
    if (button.dataset.button === '=') {
      sum.number2 = +storage.join('').slice(0, -1);
      storage = [];
      let calculatedResult = operate(sum.operator, sum.number1, sum.number2);

      calculationEl.textContent = calculatedResult;
      sum.result = calculatedResult;
      screen = [];
    }
    console.log(storage, sum);
  });
});
