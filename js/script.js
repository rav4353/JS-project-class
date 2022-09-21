var startEle = document.getElementById('start');
var problemsEle = document.getElementsByName('problems')[0];

function generateRandomNumber(max) {
    return parseInt(Math.random() * max)
}

function textToSymbol(text) {
    switch (text) {
        case 'add':
            return '+'
            break;
        case 'sub':
            return '-'
            break;
        case 'multiply':
            return '*'
            break;
        default:
            return '/'
            break;
    }
}

function updateProblem(number1, number2, operation) {
    // create problem div
    let problemEle = document.createElement('div');
    problemEle.setAttribute('class', 'problem');
    // create h3 for number1
    let number1Ele = document.createElement('h3');
    // update value of number1
    number1Ele.innerText = number1;
    // create h3 for operation
    let operationEle = document.createElement('h3');
    operationEle.innerText = operation;
    // update symbol of operation
    // create h3 for number2
    let number2Ele = document.createElement('h3');
    // update value of number2
    number2Ele.innerText = number2;
    // create hr

    // create input
    let inputEle =document.createElement('input');
    // update input class name
    inputEle.setAttribute('class', 'answer');
    // create input type text
    inputEleset.setAttribute('type', 'text');
    // append h3s, hr, input inside problem
    // append inside problems
}

var stage1Operation = function () {
    var operationEle = document.getElementById('operation'),
        rangeEle = document.getElementById('range'),
        operation = operationEle.value,
        range = parseInt(rangeEle.value),
        randomNumber1, randomNumber2;

    // create 16 problems

    if (operation !== 'divide') {
        for (let i = 1; i <= 16; i++) {
            // Random no 1
            randomNumber1 = generateRandomNumber(range);
            // Random no 2
            randomNumber2 = generateRandomNumber(range);
            console.log(randomNumber1, randomNumber2, operation)
        }
    }
}

startEle.addEventListener('click', stage1Operation);