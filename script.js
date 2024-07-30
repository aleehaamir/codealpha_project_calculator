let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;
let angleMode = 'Rad';

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    firstOperand = parseFloat(currentInput);
    operator = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    if (firstOperand === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    let result = null;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    currentInput = result;
    firstOperand = null;
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}

// Scientific functions

function toggleAngleMode() {
    angleMode = angleMode === 'Rad' ? 'Deg' : 'Rad';
    updateDisplay();
}

function factorial() {
    if (currentInput === '') return;
    let number = parseFloat(currentInput);
    let result = 1;
    for (let i = number; i > 1; i--) {
        result *= i;
    }
    currentInput = result;
    updateDisplay();
}

function trigonometry(func) {
    if (currentInput === '') return;
    let number = parseFloat(currentInput);
    if (angleMode === 'Deg') {
        number = number * Math.PI / 180;
    }
    let result;
    switch (func) {
        case 'sin':
            result = Math.sin(number);
            break;
        case 'cos':
            result = Math.cos(number);
            break;
        case 'tan':
            result = Math.tan(number);
            break;
        default:
            return;
    }
    currentInput = result;
    updateDisplay();
}

function naturalLog() {
    if (currentInput === '') return;
    let number = parseFloat(currentInput);
    currentInput = Math.log(number);
    updateDisplay();
}

function log() {
    if (currentInput === '') return;
    let number = parseFloat(currentInput);
    currentInput = Math.log10(number);
    updateDisplay();
}

function sqrt() {
    if (currentInput === '') return;
    let number = parseFloat(currentInput);
    currentInput = Math.sqrt(number);
    updateDisplay();
}

function constant(constant) {
    switch (constant) {
        case 'pi':
            currentInput = Math.PI;
            break;
        case 'e':
            currentInput = Math.E;
            break;
        default:
            return;
    }
    updateDisplay();
}

function exp() {
    if (currentInput === '') return;
    let number = parseFloat(currentInput);
    currentInput = Math.exp(number);
    updateDisplay();
}

function power() {
    if (currentInput === '') return;
    let number = parseFloat(currentInput);
    currentInput = Math.pow(number, 2);
    updateDisplay();
}

function answer() {
    // Implement the logic for storing and retrieving the last answer
    updateDisplay();
}

function percent() {
    if (currentInput === '') return;
    let number = parseFloat(currentInput);
    currentInput = number / 100;
    updateDisplay();
}

function inverse() {
    if (currentInput === '') return;
    let number = parseFloat(currentInput);
    currentInput = 1 / number;
    updateDisplay();
}

function historyFunction() {
    // Implement the logic for displaying calculation history
    updateDisplay();
}
