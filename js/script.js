// add two numbers 
// take in two numbers 
// return sum
function add(a, b) {
  return a + b;
}

// subtract second param from first param 
// take in two numbers 
// return difference 
function subtract(a, b) {
  return a - b;
}

// mulitply two numbers 
// take in two numbers 
// return product 
function multiply(a, b) {
  return a * b;
}

// divide first param by second param
// take in two numbers 
// return product or '#DIV/0!'
function divide(a, b) {
  return (b === 0) ? '#DIV/0!' : a / b;
}

// perform operation on two numbers with given operator
// take in one operator and two numbers 
// return result 
function operate(a, b, operator) {
  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtract(a, b);
  } else if (operator === '*') {
    return multiply(a, b);
  } else if (operator === '/') {
    return divide(a, b);
  }
  return;
}


// store the exact values on display as string 
let displayValue = '';

// onClick eventListener for buttons that display value 
const displayButtons = document.querySelectorAll('.display-button');
displayButtons.forEach((button) => {
  button.addEventListener('click', createDisplayValue);
});

// onClick eventListener for equal button 
const equalButton = document.querySelector('.equal-button');
equalButton.addEventListener('click', calculateAnswer);

// create dipslay values from input and store it in an array 
// take in no parameters 
// return no results 
function createDisplayValue() {
  let calculation = document.querySelector('#calculation');
  
  let isOperatorButton = this.classList.contains('operator-button');
  let isOperatorPrior = calculation.textContent.slice(-1) === ' ';
  
  let input = this.value;
  if (isOperatorButton && displayValue.length === 0) {
    return;
  } else if (isOperatorButton && isOperatorPrior) {
    calculation.textContent = calculation.textContent.slice(0, -3) + ' ' + input + ' ';
  } else if (isOperatorButton) {
    calculation.textContent += ' ' + input + ' ';
  } else {
    calculation.textContent += input;
  }

  displayValue = calculation.textContent;
}

// calculate pair-wise answer
// take in no parameters 
// return no results 
function calculateAnswer() {
  let resultDisplay = document.querySelector('#result');
  
  // split display value by space 
  const displayArray = displayValue.split(' ');

  // show answer as input if does not have second number 
  if ((displayArray.length < 2) && (displayArray[0] !== '.')) {
    resultDisplay.textContent = displayArray[0];
    return;
  }

  // calculate each pair 
  while (displayArray.length > 1) {
    const firstNum = parseFloat(displayArray[0]);
    const operator = convertOperator(displayArray[1]);
    const secondNum = parseFloat(displayArray[2]);
    const result = operate(firstNum, secondNum, operator);

    displayArray.splice(0, 3, result);

    resultDisplay.textContent = displayArray[0] || '#DIV/0!';
  }
}

// convert operator from symbol to actual operator 
// take in symbol 
// return actual operator 
function convertOperator(symbol) {
  if (symbol === '+' || symbol === '-') {
    return symbol;
  } else if (symbol === '÷') {
    return '/';
  } else if (symbol === '×') {
    return '*';
  }
  return;
}
