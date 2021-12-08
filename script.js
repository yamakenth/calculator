// query selector 
const calculationDisplay = document.querySelector('#calculation');
const resultDisplay = document.querySelector('#result');
const Allbuttons = document.querySelectorAll('button');
const deleteButtons = document.querySelectorAll('.row-1 > button');
const allClearButton = document.querySelector('.all-clear');
const clearButton = document.querySelector('.clear');
const operandsButtons = document.querySelectorAll('.operands');
const operatorButtons = document.querySelectorAll('.operators');

// current value that user input 
let currValue = '';
// store current values 
let currValues = [];

// eventListener for operands
operandsButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const currOperand = e.target.value;
    updateCurrValue(currOperand);

  });
});

// eventListener for operators
operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const currOperator = e.target.value;
    updateCurrValues(currOperator);
    
    

  });
});

// append input to currValue
// take in current operand input 
// return no result 
function updateCurrValue(currOperand) {
  // disable '.' input if it is already in currValue
  if ((currValue.includes('.')) && (currOperand === '.')) {
    return;
  }

  // append input in currValue
  currValue += currOperand;
  console.log(currValue);
}

// update currValues array 
// take in current operator input 
// return no result 
function updateCurrValues(currOperator) {
  // handle special cases 
  if ((currValues.length < 1) && (currValue === '')) { // when operator is the very first input 
    // if operator is '=' then do nothing else currValue = '0'
    if (currOperator === '=') {
      return;
    } else {
      currValue = '0';
    }
  } else if ((currOperator === '=') && (currValue === '')) { // when operator is '=' but currValue = ''
    currValue = currValues.slice(-2, -1);
  } else if (currValue === '') { // when opeator is !'=' but currValue = ''
    currValues[currValues.length - 1] = currOperator;
    currValue = '';
    console.log(currValues);
    return;
  }

  // push currValue and operator in to currValues array then reset currValue
  currValues.push(parseFloat(currValue), currOperator);
  currValue = '';
  console.log(currValues);
}



/*
// store current display value (start with 0)
let displayValue = '0';
// store array of display values until equal 
let displayValueArray = [];

// eventListener for operands
const operandsButtons = document.querySelectorAll('.operands');
operandsButtons.forEach((button) => {
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-number-button'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-number-button'));
  button.addEventListener('click', displayInput);
});

// eventListener for operator 
const operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach((button) => {
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-operator-button'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-operator-button'));
  button.addEventListener('click', calculateResult);
});

// eventListener for all-clear button 
const allClearButton = document.querySelector('.all-clear');
allClearButton.addEventListener('click', () => {
  displayValue = '0';
  displayValueArray = [];
  document.querySelector('#calculation').textContent = '';
  document.querySelector('#result').textContent = '0';
});

// eventListener for clear button 
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  displayValue = displayValue.slice(0, -1);
  document.querySelector('#result').textContent = displayValue;
});

// animaiton eventListener for all buttons 
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering'));
});

// animation eventListner for clear buttons 
const deleteButtons = document.querySelectorAll('.row-1 > button');
deleteButtons.forEach((button) => {
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-clear-button'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-clear-button'));
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
  if (currInput === '.') {
    resultField.textContent = displayValue;
  } else {
    resultField.textContent = roundNumber(displayValue);
  }
}

// calculate result and update display 
// take in no parameters 
// return no results 
function calculateResult() {
  // disable equal button when tyring to operate on an operand only
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
    if ((secondNum === 0) && (operator === '/')) {
      alert('You cannot divide a number by 0!');
      displayValueArray = displayValueArray.slice(0, -2);
      // console.log(`displayValue: ${displayValue}, displayValueArray: ${displayValueArray}`);
      return;
    }
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
*/
