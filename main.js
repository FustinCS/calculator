function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    let value = a / b;
    return Number(value.toFixed(3));
}

let firstNum = 0;
let operator;
let secondNum = 0;

function operate(op, num1, num2) {
    if (op === "+") {
        return add(num1, num2);
    }
    else if (op === "-") {
        return subtract(num1, num2);
    }
    else if (op === "*") {
        return multiply(num1, num2);
    }
    else if (op === "/") {
        return divide(num1, num2);
    }
    else {
        return;
    }
}