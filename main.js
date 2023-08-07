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
    operate();
    firstNum = displayVal;
    operator = this.textContent;
    displayVal = "0";

    const equation = document.querySelector(".equation");
    equation.textContent = `${firstNum} ${operator}`;
}

function operate() {
    let currentDisplay = document.querySelector(".display-value");
    const equation = document.querySelector(".equation");
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
        if(parseFloat(secondNum) === 0) {
            alert("ERROR: Dividing by 0!");
            clear();
            return;
        }
        displayVal = divide(parseFloat(firstNum), parseFloat(secondNum));
    }
    else {
        return;
    }
    equation.textContent = `${firstNum} ${operator} ${secondNum} =`;
    operator = "";
    updateDisplay();
}

function createNumber() {
   if (displayVal.toString() === "0") {
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

function clear() {
    const equation = document.querySelector(".equation");

    firstNum = "0";
    secondNum = "0";
    displayVal = "0";
    operator = "";
    updateDisplay();
    equation.textContent = "";
}

function backspace() {
    let displayString = displayVal.toString();
    if (displayString.length === 1) {
        displayVal = "0";
    }
    else {
        displayVal = displayString.substring(0, displayString.length - 1);
    }
    displayString = displayVal.toString();
    if (displayString.charAt(displayString.length-1) === ".") {
        displayVal = displayString.substring(0, displayString.length - 1);
    }
    updateDisplay();
}

function adjustSign() {
    if (parseFloat(displayVal) === 0) {
        return;
    }
    else if(parseFloat(displayVal) > 0) {
        displayVal = 0 - displayVal;
    }
    else if(parseFloat(displayVal) < 0) {
        displayVal = 0 - displayVal;
    }
    updateDisplay();
}

function decimal() {
    if (displayVal.toString().includes(".")) {
        return;
    }
    else {
        displayVal += ".";
        updateDisplay();        
    }
}

const numbers = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const backspaceBtn = document.querySelector(".backspace");
const plusMinus = document.querySelector(".plus-minus");
const decimalBtn = document.querySelector(".decimal");

numbers.forEach((number) => number.addEventListener('click', createNumber));
operators.forEach((operator) => operator.addEventListener('click', storeOp));
equals.addEventListener('click', operate);
clearBtn.addEventListener('click', clear);
backspaceBtn.addEventListener('click', backspace);
plusMinus.addEventListener('click', adjustSign);
decimalBtn.addEventListener('click', decimal);