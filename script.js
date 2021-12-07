// store current display value (start with 0)
let displayValue = '0';
// store array of display values until equal 
let displayValueArray = [];

// onClick eventListener for operands
const operandsButtons = document.querySelectorAll('.operands');
operandsButtons.forEach((button) => {
  button.addEventListener('click', displayInput);
});

// onClick eventListener for operator 
const operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach((button) => {
  button.addEventListener('click', calculateResult);
});

// onClick eventListener for all-clear button 
const allClearButton = document.querySelector('.all-clear');
allClearButton.addEventListener('click', () => {
  displayValue = '0';
  displayValueArray = [];
  document.querySelector('#calculation').textContent = '';
  document.querySelector('#result').textContent = '0';
});

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

// divide first param by second param (check for div 0 later)
// take in two numbers 
// return product
function divide(a, b) {
  return a / b;
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

// display input on page and update displayValue 
// take in no parameters 
// return no results 
function displayInput() {
  const currInput = this.value;
  
  if ((displayValue.length === 1) && (displayValue === '0') && (currInput !== '.')) {
    displayValue = '';
  }

  if ((displayValue.includes('.')) && (currInput === '.')) {
    return;
  }
  
  displayValue += currInput;
  const resultField = document.querySelector('#result');
  resultField.textContent = roundNumber(displayValue);
}

// calculate result and update display 
// take in no parameters 
// return no results 
function calculateResult() {
  // disable equal button when tyring to operat on an operand only
  if ((displayValueArray.length < 1) && (this.value === '=')) {
    return;
  }
  
  displayValueArray.push(displayValue, this.value);
  // console.log(`BEOFRE: displayValue: ${displayValue}, displayValueArray: ${displayValueArray}`);
  const calculationField = document.querySelector('#calculation');
  if (displayValueArray.length === 4) { // when there are enough elements to operate
    const firstNum = parseFloat(displayValueArray[0]);
    const secondNum = parseFloat(displayValueArray[2]);
    const operator = displayValueArray[1];
    const result = operate(firstNum, secondNum, operator);
    
    if (this.value !== '=') { // if operator button is clicked  
      displayValueArray.splice(0, 3, result);
      displayValue = '0';
      calculationField.textContent = formatCalculationDisplay(displayValueArray);
    } else { // if equal button is clicked 
      displayValue = String(result);
      calculationField.textContent = formatCalculationDisplay(displayValueArray);
      displayValueArray = [];
    }
    document.querySelector('#result').textContent = roundNumber(result);
  } else { // where there is not eqnough element to operate just print and update value
    calculationField.textContent = formatCalculationDisplay(displayValueArray);
    displayValue = '0';
  }
  // console.log(`>>> AFTER: displayValue: ${displayValue}, displayValueArray: ${displayValueArray}`);
}

// format calculation display 
// take in array to display 
// retun string to print 
function formatCalculationDisplay(displayValueArray) {
  const arrayToDisplay = [];
  for (let i = 0; i < displayValueArray.length; i++) {
    let elementToPush = displayValueArray[i];
    
    if (elementToPush === '*') {
      elementToPush = '×';
    } else if (elementToPush === '/') {
      elementToPush = '÷';
    }

    if (Number(elementToPush)) {
      elementToPush = roundNumber(elementToPush);
    }

    arrayToDisplay.push(elementToPush);
  }
  
  return arrayToDisplay.join(' ');
}

// round numbers to 6 decimal places
// take in number to round
// return rounded number 
function roundNumber(num) {
  return Math.round(num * 10e5) / 10e5;
}
