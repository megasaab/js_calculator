 const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Generates and writes calculating log
function getUserNumberInput() {
  return parseInt(userInput.value)
}

function createAndWriteOutput(operator,resultBeforeCalc, calcNumber) {
  const calcDescription =`${resultBeforeCalc}  ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  opearionIdentifier,
  prevResult,
  operationNumber, 
  newResult) {
    const logEntry = {
      operation: opearionIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult
   };
   logEntries.push(logEntry);
   console.log(logEntries)
  }


// Action arrow functions

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult +=   enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -=   enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY'){
    currentResult *=  enteredNumber;
    mathOperator ='*';
  } else if (calculationType === 'DEVIDE'){
    currentResult /=  enteredNumber;
    mathOperator ='/';
  }
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD',calculationType, enteredNumber, currentResult);
}

const  add = () => {
 calculateResult('ADD')
}


const subtract = () => {
  calculateResult('SUBTRACT')
};


const multiply = () => {
  calculateResult('MULTIPLY')
};

const devide = () => {
  calculateResult('DEVIDE')
};


// button click actions

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract ); 
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', devide );

