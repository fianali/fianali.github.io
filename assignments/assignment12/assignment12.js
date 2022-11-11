const output = document.querySelector('.output');
const minusButton = document.querySelector('.minus-button').addEventListener('click', subtract);
const plusButton = document.querySelector('.plus-button').addEventListener('click', add);
const multiplyButton = document.querySelector('.multiply-button').addEventListener('click', multiply);
const divideButton = document.querySelector('.divide-button').addEventListener('click', divide);

const zeroButton = document.querySelector('.zero-button').addEventListener('click', zero);
const oneButton = document.querySelector('.one-button').addEventListener('click', one);
const twoButton = document.querySelector('.two-button').addEventListener('click', two);
const threeButton = document.querySelector('.three-button').addEventListener('click', three);
const fourButton = document.querySelector('.four-button').addEventListener('click', four);
const fiveButton = document.querySelector('.five-button').addEventListener('click', five);
const sixButton = document.querySelector('.six-button').addEventListener('click', six);
const sevenButton = document.querySelector('.seven-button').addEventListener('click', seven);
const eightButton = document.querySelector('.eight-button').addEventListener('click', eight);
const nineButton = document.querySelector('.nine-button').addEventListener('click', nine);

const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
const clearButton = document.querySelector('.clear-button').addEventListener('click', clear);

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

output.textContent = randomNumber(0, 999);

function add() {
    output.textContent += "+";
}

function subtract() {
    output.textContent += "-";
}

function multiply() {
    output.textContent += "*";
}

function divide() {
    output.textContent += "/";
}


function zero() {
    output.textContent += "0";
}
function one() {
    output.textContent += "1";
}

function two() {
    output.textContent += "2";
}

function three() {
    output.textContent += "3";
}

function four() {
    output.textContent += "4";
}

function five() {
    output.textContent += "5";
}

function six() {
    output.textContent += "6";
}

function seven() {
    output.textContent += "7";
}

function eight() {
    output.textContent += "8";
}

function nine() {
    output.textContent += "9";
}


function submit() {
    output.textContent = eval(output.textContent);
}


function clear() {
    output.textContent = 0;
}

