// store current display value (start with 0)
let displayValue = '0';
// store array of display values until equal 
let displayValueArray = [];
// track number of rounds of input 
let inputRound = 1;

// onClick eventListener for operands
const operandsButtons = document.querySelectorAll('.operands');
operandsButtons.forEach((button) => {
  button.addEventListener('click', displayInput);
});

// onClick eventListener for operator 
const operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    displayValueArray.push(displayValue, e.target.value);
    console.log(`displayValue: ${displayValue}, displayValueArray: ${displayValueArray}`);
    displayValue = '0';
    inputRound++;
    console.log(inputRound);
  });
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
  
  displayValue += currInput;
  const resultField = document.querySelector('#result');
  resultField.textContent = displayValue;
}