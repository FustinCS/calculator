let firstNum = "0";
let secondNum = "0";
let displayVal = "0";
let operator = "";

function add(a, b) {
    let value = a + b;
    return Number(value.toFixed(3));
}

function subtract(a, b) {
    let value = a - b;
    return Number(value.toFixed(3));
}

function multiply(a, b) {
    let value = a * b;
    return Number(value.toFixed(3));
}

function divide(a, b) {
    let value = a / b;
    return Number(value.toFixed(3));
}

function storeOp() {
    firstNum = displayVal;
    operator = this.textContent;
    displayVal = "0";
    console.log(`${firstNum} ${operator}`);
}

function operate() {
    let currentDisplay = document.querySelector(".display-value");
    secondNum = currentDisplay.textContent;

    if (operator === "+") {
        displayVal = add(parseFloat(firstNum), parseFloat(secondNum));
    }
    else if (operator === "-") {
        displayVal = subtract(parseFloat(firstNum), parseFloat(secondNum));
    }
    else if (operator === "*") {
        displayVal = multiply(parseFloat(firstNum), parseFloat(secondNum));
    }
    else if (operator === "/") {
        displayVal = divide(parseFloat(firstNum), parseFloat(secondNum));
    }
    else {
        return;
    }
    operator = "";
    updateDisplay();
}

function createNumber() {
   if (displayVal === "0") {
        displayVal = this.textContent;
    }
    else {
        displayVal += this.textContent;
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector(".display-value");
    display.textContent = displayVal;
}

const numbers = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

numbers.forEach((number) => number.addEventListener('click', createNumber));
operators.forEach((operator) => operator.addEventListener('click', storeOp));
equals.addEventListener('click', operate);
