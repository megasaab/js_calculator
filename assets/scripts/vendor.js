const userInput = document.getElementById('input-number') // input;
const addBtn = document.getElementById('btn-add'); // + button 
const subtractBtn = document.getElementById('btn-subtract'); // - button
const multiplyBtn = document.getElementById('btn-multiply');// * - button
const divideBtn = document.getElementById('btn-divide'); //  / - button

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

