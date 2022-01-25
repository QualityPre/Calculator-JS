'use strict';
const numberBtnsEl = document.querySelectorAll('[data-number]');
const operationBtnsEl = document.querySelectorAll('[data-operation]');
const equalBtnEl = document.querySelector('[data-equals]');
const deleteBtnEl = document.querySelector('[data-delete]');
const acBtnEl = document.querySelector('[data-clear]');
const previousCalculationEl = document.querySelector(
  '[data-previous-calculation ]'
);
const currentCalculationEl = document.querySelector(
  '[data-current-calculation ]'
);

class Calculator {
  constructor(previousCalculationEl, currentCalculationEl) {
    this.previousCalculationEl = previousCalculationEl;
    this.currentCalculationEl = currentCalculationEl;
    this.allClear();
  }

  allClear() {
    this.currentCalculation = '';
    this.prevCalculation = '';
    this.operation = undefined;
  }

  delete() {
    this.currentCalculation = this.currentCalculation.toString().slice(0, -1);
  }

  gettingNumber(number) {
    if (number === '.' && this.currentCalculation.includes('.')) return;
    this.currentCalculation =
      this.currentCalculation.toString() + number.toString();
  }

  operate(operation) {
    if (this.currentCalculation === '') return;
    if (this.prevCalculation !== '') {
      this.compute();
    }
    this.operation = operation;
    this.prevCalculation = this.currentCalculation;
    this.currentCalculation = '';
  }

  compute() {
    let calculation;
    const prev = parseFloat(this.prevCalculation);
    const current = parseFloat(this.currentCalculation);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        calculation = prev + current;
        break;
      case '-':
        calculation = prev - current;
        break;
      case '*':
        calculation = prev * current;
        break;
      case '/':
        calculation = prev / current;
        break;
      default:
        return;
    }
    this.currentCalculation = calculation;
    this.operation = undefined;
    this.prevCalculation = '';
  }

  updateDisplay() {
    this.currentCalculationEl.innerText = this.currentCalculation;
    if (this.operation != null) {
      this.previousCalculationEl.innerText = `${this.prevCalculation}${this.operation}`;
    } else {
      this.previousCalculationEl.innerText = '';
    }
  }
}

//creating a calculator object using the class

const calculator = new Calculator(previousCalculationEl, currentCalculationEl);

// when number buttons and decimal point get clicked...

numberBtnsEl.forEach(btn => {
  btn.addEventListener('click', () => {
    calculator.gettingNumber(btn.innerText);
    calculator.updateDisplay();
  });
});

operationBtnsEl.forEach(btn => {
  btn.addEventListener('click', () => {
    calculator.operate(btn.innerText);
    calculator.updateDisplay();
  });
});

equalBtnEl.addEventListener('click', btn => {
  calculator.compute();
  calculator.updateDisplay();
});

acBtnEl.addEventListener('click', btn => {
  calculator.allClear();
  calculator.updateDisplay();
});

deleteBtnEl.addEventListener('click', btn => {
  calculator.delete();
  calculator.updateDisplay();
});
