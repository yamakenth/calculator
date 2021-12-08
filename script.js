// query selector 
const calculationDisplay = document.querySelector('#calculation');
const resultDisplay = document.querySelector('#result');
const allButtons = document.querySelectorAll('button');
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
    // display input in result display   
    resultDisplay.textContent = (Number(currValue)) ? roundNumber(currValue, 9) : currValue; 
  });
  
  // animation 
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-number-button'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-number-button'));
});

// eventListener for operators
operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const currOperator = e.target.value;
    updateCurrValues(currOperator);
    // display calculation 
    calculationDisplay.textContent = formatCalculationDisplay(currValues);
    // operate when currValues array have enough elements
    if (currValues.length === 4) {
      const result = calculateResult(currOperator);
      // display result in result display 
      resultDisplay.textContent = roundNumber(result, 9);
    }
  });

  // animation
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-operator-button'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-operator-button'));
});

// eventListener for all-clear button 
allClearButton.addEventListener('click', () => {
  currValue = '';
  currValues = [];
  calculationDisplay.textContent = '';
  resultDisplay.textContent = '0';
});

// eventListener for clear button 
clearButton.addEventListener('click', () => {
  currValue = currValue.slice(0, -1);
  resultDisplay.textContent = (Number(currValue)) ? roundNumber(currValue, 9) : currValue;
});

// eventListener for all buttons 
allButtons.forEach((button) => {
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering'));
});

// eventListner for delete (clear and all-clear) buttons 
deleteButtons.forEach((button) => {
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-clear-button'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-clear-button'));
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
  } else if ((currValues.length < 1) && (currOperator === '=')) { // when equal is pressed repeatedly
    return;
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

// calculate result 
// take in current operator
// return result 
function calculateResult(currOperator) {
  const firstNum = currValues[0];
  const secondNum = currValues[2];
  const operator = currValues[1];

  // check if div by 0
  if ((secondNum === 0) && (operator === '/')) {
    currValue = '0';
    currValues = currValues.slice(0, -2);
    alert('You cannot divide a number by 0!');
    calculationDisplay.textContent = formatCalculationDisplay(currValues);
    // console.log('You cannot divide a number by 0!', `currValues: ${currValues}, currValue = ${currValue}`);
    return 0;
  }
  
  console.log('ready to operate');
  const result = operate(firstNum, secondNum, operator);
  console.log(`result: ${result}, currValues: ${currValues}`);
  
  console.log('manipulate array');
  if (currValues[currValues.length - 1] === '=') {
    currValues = [];
    currValue = String(result);
  } else {
    currValues = [result, currOperator];
    currValue = '';
  }
  console.log(`result: ${result}, currValues: ${currValues}`);
  return result;
}

// format calculation display 
// take in array to display 
// retun string to print 
function formatCalculationDisplay(currValues) {
  const arrayToDisplay = [];
  for (let i = 0; i < currValues.length; i++) {
    let elementToPush = currValues[i];
    
    if (elementToPush === '*') {
      elementToPush = '×';
    } else if (elementToPush === '/') {
      elementToPush = '÷';
    }

    if (Number(elementToPush)) {
      elementToPush = roundNumber(elementToPush, 6);
    }

    arrayToDisplay.push(elementToPush);
  }
  
  return arrayToDisplay.join(' ');
}

// round numbers to 'dec' decimal places
// take in number to round, decimal places to round to
// return rounded number 
function roundNumber(num, dec) {
  return Math.round(num * (10 ** dec)) / (10 ** dec);
}