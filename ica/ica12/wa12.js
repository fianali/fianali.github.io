// const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
// }

const minusButton = document.querySelector('.minus-button').addEventListener('click', decrease);
const plusButton = document.querySelector('.plus-button').addEventListener('click', increase);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const sliderSubmitButton = document.querySelector('.slider-submit-button').addEventListener('click', sliderSubmit);

const output = document.querySelector('.output');
var slider = document.getElementById("myRange");
const sliderOutput = document.querySelector('.slider-output');


function check() {
    console.log('test');
}

function submit() {
    alert(output.textContent);
}

function reset() {
    const resetValue = 0;
    output.textContent = resetValue;
}

function increase() {
    if (output.textContent < 9999999999) {
        output.textContent++;
    }
}

function decrease() {
    if (output.textContent > 0) {
        output.textContent--;
    }
}

function random() {
    output.textContent = randomNumber(0, 9999999999);
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

function sliderSubmit() {
    sliderOutput.textContent = slider.value;
}



